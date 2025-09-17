#!/usr/bin/env sh
# Helper: Ensure gradle/wrapper/gradle-wrapper.jar is present by downloading from distributionUrl.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
JAR="$ROOT_DIR/gradle/wrapper/gradle-wrapper.jar"
PROPS="$ROOT_DIR/gradle/wrapper/gradle-wrapper.properties"

[ -f "$JAR" ] && exit 0
[ -f "$PROPS" ] || { echo "[fetch-wrapper] Missing $PROPS"; exit 127; }

DIST_URL=$(grep '^distributionUrl=' "$PROPS" | sed -e 's/.*=//')
[ -n "$DIST_URL" ] || { echo "[fetch-wrapper] distributionUrl not found"; exit 127; }

TMP_ZIP="$ROOT_DIR/gradle/wrapper/gradle-dist.zip"
mkdir -p "$(dirname "$TMP_ZIP")"
if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$DIST_URL" -o "$TMP_ZIP"
elif command -v wget >/dev/null 2>&1; then
  wget -qO "$TMP_ZIP" "$DIST_URL"
else
  echo "[fetch-wrapper] curl/wget missing"; exit 127
fi

command -v unzip >/dev/null 2>&1 || { echo "[fetch-wrapper] unzip missing"; exit 127; }
WRAP_JAR_PATH=$(unzip -Z1 "$TMP_ZIP" | grep "gradle-wrapper.jar" | head -n1 || true)
[ -n "$WRAP_JAR_PATH" ] || { echo "[fetch-wrapper] JAR path not found in distribution"; exit 127; }
unzip -p "$TMP_ZIP" "$WRAP_JAR_PATH" > "$JAR"
rm -f "$TMP_ZIP"
echo "[fetch-wrapper] gradle-wrapper.jar ready at $JAR"
