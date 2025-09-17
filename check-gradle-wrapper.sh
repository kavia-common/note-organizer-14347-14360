#!/usr/bin/env bash
# Diagnostics for CI: verifies the Expo Android gradle wrapper path and prints next steps.

set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
WRAPPER="$ROOT_DIR/notes_frontend/android/gradlew"

echo "[check] Looking for Android Gradle wrapper at: $WRAPPER"
if [ -f "$WRAPPER" ]; then
  echo "[check] OK: Wrapper exists."
  echo "[check] You can run: ./notes_frontend/android/gradlew :app:assembleDebug"
  exit 0
fi

echo "[check] Wrapper NOT found."
echo "[check] Run the following to generate it via Expo prebuild:"
echo "  cd notes_frontend && npm install --no-audit --no-fund && npm run prebuild:android"
exit 127
