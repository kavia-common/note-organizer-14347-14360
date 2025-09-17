#!/usr/bin/env bash
# Bootstrap native Android wrapper for CI. Must run before any Gradle call.
# Usage (from repo root or container workspace):
#   bash notes_frontend/scripts/bootstrap-android.sh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
APP_DIR="$ROOT_DIR/note-organizer-14347-14360/notes_frontend"

echo "[bootstrap-android] Root: $ROOT_DIR"
echo "[bootstrap-android] App:  $APP_DIR"

cd "$APP_DIR"

# Ensure npm is available
echo "[bootstrap-android] npm version: $(npm --version 2>/dev/null || echo 'not found')"
echo "[bootstrap-android] node version: $(node --version 2>/dev/null || echo 'not found')"

# Install dependencies if node_modules is missing (safe to re-run)
if [ ! -d "node_modules" ]; then
  echo "[bootstrap-android] Installing dependencies..."
  npm ci || npm install
fi

# Run prebuild to generate native folders and gradle wrapper for Android only
echo "[bootstrap-android] Running expo prebuild for Android..."
npx expo prebuild --platform android --non-interactive || {
  echo "[bootstrap-android] expo prebuild failed"
  exit 1
}

# Verify gradle wrapper presence
if [ -f "$APP_DIR/android/gradlew" ]; then
  chmod +x "$APP_DIR/android/gradlew" || true
  echo "[bootstrap-android] Android gradle wrapper is ready at notes_frontend/android/gradlew"
else
  echo "[bootstrap-android] ERROR: Android gradle wrapper not found after prebuild."
  exit 2
fi
