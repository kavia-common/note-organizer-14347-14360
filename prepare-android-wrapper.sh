#!/usr/bin/env bash
# Root-level utility: make any present gradle wrappers executable and bootstrap android if missing.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"

# If android wrapper missing under notes_frontend, try to prebuild quickly (non-fatal if node tools missing).
if [ ! -f "$APP_DIR/android/gradlew" ]; then
  echo "[prepare-android-wrapper] Android gradle wrapper not found. Attempting quick bootstrap..."
  if command -v node >/dev/null 2>&1 && command -v npm >/dev/null 2>&1; then
    ( cd "$APP_DIR" && npx expo prebuild --platform android --non-interactive || true )
  else
    echo "[prepare-android-wrapper] Node/npm not available; skipping prebuild."
  fi
fi

# Set executable bits on any likely wrappers
chmod +x "$APP_DIR/android/gradlew" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradlew" 2>/dev/null || true
chmod +x "$ROOT_DIR/gradlew.shim" 2>/dev/null || true

echo "[prepare-android-wrapper] Done."
