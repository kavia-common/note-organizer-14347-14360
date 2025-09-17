#!/usr/bin/env bash
# CI alias for 'gradle wrapper' invocations. Runs pre-gradle bootstrap and then executes a gradle check.
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -f "$ROOT_DIR/pre-gradle.sh" ]; then
  exec bash "$ROOT_DIR/pre-gradle.sh"
else
  echo "[gradlew-ci] Missing pre-gradle.sh. Run: bash note-organizer-14347-14360/build-android.sh"
  exit 127
fi
