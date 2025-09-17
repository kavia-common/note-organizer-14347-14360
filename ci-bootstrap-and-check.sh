#!/usr/bin/env bash
# One-step CI helper: bootstrap native wrapper then run Gradle 'check'.
# Usage: bash note-organizer-14347-14360/ci-bootstrap-and-check.sh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
WRAPPER="$APP_DIR/android/gradlew"

# Ensure shims have exec bits and attempt wrapper generation
bash "$ROOT_DIR/set-exec-bits.sh" || true
bash "$ROOT_DIR/prepare-android-wrapper.sh" || true

if [ ! -f "$WRAPPER" ]; then
  echo "[ci-bootstrap-and-check] Android wrapper missing; attempting full build path..."
  bash "$ROOT_DIR/build-android.sh" || true
fi

if [ -f "$WRAPPER" ]; then
  chmod +x "$WRAPPER" || true
  cd "$APP_DIR/android"
  echo "[ci-bootstrap-and-check] Running ./gradlew check ..."
  exec "$WRAPPER" check
fi

echo "[ci-bootstrap-and-check] ERROR: Wrapper not available after bootstrap attempts."
echo "[ci-bootstrap-and-check] Please ensure Node/npm are available for Expo prebuild or call build-android.sh in CI."
exit 127
