#!/usr/bin/env bash
# Drop-in Gradle command for CI: bootstraps Android wrapper, then runs requested Gradle tasks.
# Usage (as a ./gradlew replacement):
#   bash note-organizer-14347-14360/gradlew-ci-task.sh assembleDebug
#   bash note-organizer-14347-14360/gradlew-ci-task.sh check

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
WRAPPER="$APP_DIR/android/gradlew"

# Ensure scripts are executable
[ -f "$ROOT_DIR/fix-exec-bits.sh" ] && bash "$ROOT_DIR/fix-exec-bits.sh" || true

# Attempt to bootstrap wrapper
if [ ! -f "$WRAPPER" ]; then
  if [ -f "$ROOT_DIR/ci-bootstrap-and-check.sh" ]; then
    bash "$ROOT_DIR/ci-bootstrap-and-check.sh" || true
  else
    bash "$ROOT_DIR/prepare-android-wrapper.sh" || true
  fi
fi

# Delegate to wrapper if available; else fail with clear message
if [ -f "$WRAPPER" ]; then
  chmod +x "$WRAPPER" || true
  cd "$APP_DIR/android"
  exec "$WRAPPER" "$@"
fi

echo "[gradlew-ci-task] Android wrapper not found. Run:"
echo "  bash note-organizer-14347-14360/build-android.sh"
exit 127
