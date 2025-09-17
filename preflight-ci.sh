#!/usr/bin/env bash
# Preflight checks for CI environments. Run before any gradle tasks.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Ensure executable bits on shims
bash "$ROOT_DIR/set-exec-bits.sh" || true

# Attempt to generate Android wrapper
bash "$ROOT_DIR/prepare-android-wrapper.sh" || true

# Provide clear status output
if [ -f "$ROOT_DIR/notes_frontend/android/gradlew" ]; then
  echo "[preflight-ci] Android wrapper is present."
else
  echo "[preflight-ci] Android wrapper is NOT present. CI must run prebuild step before invoking gradle."
  echo "[preflight-ci] Try: bash note-organizer-14347-14360/build-android.sh"
fi
