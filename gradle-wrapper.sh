#!/usr/bin/env bash
# CI-friendly gradle wrapper substitute for environments that cannot run Expo Prebuild beforehand.
# Bootstraps the Android Gradle wrapper under notes_frontend/android, then forwards requested tasks.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
WRAPPER="$APP_DIR/android/gradlew"

# Make sure helper scripts are executable
[ -f "$ROOT_DIR/fix-exec-bits.sh" ] && bash "$ROOT_DIR/fix-exec-bits.sh" || true

# Bootstrap Android wrapper if missing
if [ ! -f "$WRAPPER" ]; then
  if [ -f "$ROOT_DIR/ci-bootstrap-and-check.sh" ]; then
    bash "$ROOT_DIR/ci-bootstrap-and-check.sh" || true
  else
    bash "$ROOT_DIR/prepare-android-wrapper.sh" || true
  fi
fi

# Forward tasks to the generated Gradle wrapper if available
if [ -f "$WRAPPER" ]; then
  chmod +x "$WRAPPER" || true
  cd "$APP_DIR/android"
  exec "$WRAPPER" "$@"
fi

echo "[gradle-wrapper.sh] Android wrapper not found. Run:"
echo "  bash note-organizer-14347-14360/build-android.sh"
exit 127
