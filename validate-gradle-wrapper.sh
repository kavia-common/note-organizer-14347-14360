#!/usr/bin/env sh
# Validate repo-root Gradle wrapper presence and configuration for CI.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
echo "[validate] Checking for ./gradlew ..."
if [ ! -f "$ROOT_DIR/gradlew" ]; then
  echo "[validate] ERROR: ./gradlew is missing at repo root." >&2
  exit 127
fi

echo "[validate] Ensuring execute permissions ..."
chmod +x "$ROOT_DIR/gradlew" || true

echo "[validate] Checking gradle/wrapper/gradle-wrapper.properties ..."
if [ ! -f "$ROOT_DIR/gradle/wrapper/gradle-wrapper.properties" ]; then
  echo "[validate] ERROR: gradle/wrapper/gradle-wrapper.properties missing." >&2
  exit 127
fi

echo "[validate] OK. You can now run: ./gradlew help (or 'check' if your project defines it)"
