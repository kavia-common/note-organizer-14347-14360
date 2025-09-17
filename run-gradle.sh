#!/usr/bin/env bash
# Wrapper to be used by CI systems in place of './gradlew'.
# It bootstraps the Android wrapper and delegates to the generated gradlew.

set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"

bash "$ROOT_DIR/preflight-ci.sh" || true

if [ -f "$APP_DIR/android/gradlew" ]; then
  chmod +x "$APP_DIR/android/gradlew" || true
  cd "$APP_DIR/android"
  exec ./gradlew "${@:-check}"
else
  echo "[run-gradle] Android wrapper not found. Run: bash note-organizer-14347-14360/build-android.sh"
  exit 127
fi
