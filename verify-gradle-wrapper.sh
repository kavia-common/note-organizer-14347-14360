#!/usr/bin/env bash
# Verifies that the internal Android Gradle wrapper exists; generates it if missing.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
WRAPPER="$ROOT_DIR/notes_frontend/android/gradlew"

if [ -f "$WRAPPER" ]; then
  echo "[verify] Wrapper exists at notes_frontend/android/gradlew"
  exit 0
fi

echo "[verify] Wrapper missing. Running Expo prebuild to generate it..."
pushd "$ROOT_DIR/notes_frontend" >/dev/null
npm install --no-audit --no-fund
npm run prebuild:android
popd >/dev/null

if [ -f "$WRAPPER" ]; then
  echo "[verify] Wrapper created successfully."
  exit 0
else
  echo "[verify] Failed to create wrapper." 1>&2
  exit 127
fi
