#!/usr/bin/env sh
# Fetches the Gradle wrapper JAR according to gradle/wrapper/gradle-wrapper.properties
# This is useful in CI where the wrapper JAR isn't committed and must be downloaded.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
PROPS="$ROOT_DIR/gradle/wrapper/gradle-wrapper.properties"
JAR="$ROOT_DIR/gradle/wrapper/gradle-wrapper.jar"

if [ -f "$JAR" ]; then
  echo "[bootstrap-gradle-wrapper] Wrapper JAR already present."
  exit 0
fi

if [ ! -f "$PROPS" ]; then
  echo "[bootstrap-gradle-wrapper] ERROR: $PROPS is missing." >&2
  exit 127
fi

DIST_URL=$(grep '^distributionUrl=' "$PROPS" | sed -e 's/.*=//')
if [ -z "$DIST_URL" ]; then
  echo "[bootstrap-gradle-wrapper] ERROR: distributionUrl not found in properties." >&2
  exit 127
fi

echo "[bootstrap-gradle-wrapper] Downloading Gradle distribution: $DIST_URL"
TMP_ZIP="$ROOT_DIR/gradle/wrapper/gradle-dist.zip"
mkdir -p "$(dirname "$TMP_ZIP")"

if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$DIST_URL" -o "$TMP_ZIP"
elif command -v wget >/dev/null 2>&1; then
  wget -qO "$TMP_ZIP" "$DIST_URL"
else
  echo "[bootstrap-gradle-wrapper] ERROR: Neither curl nor wget is available." >&2
  exit 127
fi

if ! command -v unzip >/dev/null 2>&1; then
  echo "[bootstrap-gradle-wrapper] ERROR: 'unzip' is required to extract gradle-wrapper.jar" >&2
  exit 127
fi

WRAP_JAR_PATH=$(unzip -Z1 "$TMP_ZIP" | grep "gradle-wrapper.jar" | head -n1 || true)
if [ -z "$WRAP_JAR_PATH" ]; then
  echo "[bootstrap-gradle-wrapper] ERROR: gradle-wrapper.jar not found inside distribution ZIP." >&2
  exit 127
fi

unzip -p "$TMP_ZIP" "$WRAP_JAR_PATH" > "$JAR"
rm -f "$TMP_ZIP"
echo "[bootstrap-gradle-wrapper] Wrapper JAR ready at $JAR"
