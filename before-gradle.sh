#!/usr/bin/env bash
# Common CI hook: run this before any Gradle invocation.
# It ensures executable permissions and generates the native Android wrapper.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Ensure all shims are executable
bash "$ROOT_DIR/fix-exec-bits.sh" || true

# Attempt to generate the native Android wrapper and run a quick check
if [ -f "$ROOT_DIR/ci-bootstrap-and-check.sh" ]; then
  bash "$ROOT_DIR/ci-bootstrap-and-check.sh" || true
else
  # Fallback preparation
  bash "$ROOT_DIR/prepare-android-wrapper.sh" || true
fi

if [ -f "$ROOT_DIR/notes_frontend/android/gradlew" ]; then
  echo "[before-gradle] Android wrapper is present."
else
  echo "[before-gradle] Android wrapper not present; Gradle tasks at repo root will fail unless prebuild is executed."
  echo "[before-gradle] Try: bash note-organizer-14347-14360/build-android.sh"
fi
