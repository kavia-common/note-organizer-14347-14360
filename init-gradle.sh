#!/usr/bin/env bash
# CI alias: initialize (bootstrap) Gradle wrapper before any gradle tasks.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

bash "$ROOT_DIR/fix-exec-bits.sh" || true
bash "$ROOT_DIR/ci-bootstrap-and-check.sh" || bash "$ROOT_DIR/build-android.sh" || true

if [ -f "$ROOT_DIR/notes_frontend/android/gradlew" ]; then
  echo "[init-gradle] Wrapper generated at notes_frontend/android/gradlew"
  exit 0
else
  echo "[init-gradle] Wrapper not found. Ensure Node/npm is available to run Expo Prebuild."
  exit 127
fi
