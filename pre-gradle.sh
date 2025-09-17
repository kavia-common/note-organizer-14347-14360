#!/usr/bin/env bash
# Universal pre-gradle hook for CI/analyzers.
# Ensures the Android wrapper is generated, then runs a Gradle check through the generated wrapper.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
WRAPPER="$APP_DIR/android/gradlew"

# Attempt a full one-step bootstrap; this also runs gradle check if successful.
if [ -f "$ROOT_DIR/ci-bootstrap-and-check.sh" ]; then
  exec bash "$ROOT_DIR/ci-bootstrap-and-check.sh"
fi

# Fallback path (rare)
bash "$ROOT_DIR/set-exec-bits.sh" || true
bash "$ROOT_DIR/prepare-android-wrapper.sh" || true

if [ -f "$WRAPPER" ]; then
  chmod +x "$WRAPPER" || true
  cd "$APP_DIR/android"
  exec "$WRAPPER" check
fi

echo "[pre-gradle] Android wrapper not found; run: bash note-organizer-14347-14360/build-android.sh"
exit 127
