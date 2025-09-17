#!/usr/bin/env bash
# CI build entrypoint: bootstrap android then call gradle assembleDebug
# Usage (from repo root): bash note-organizer-14347-14360/notes_frontend/scripts/ci-build-android.sh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
APP_DIR="$ROOT_DIR/note-organizer-14347-14360/notes_frontend"

bash "$APP_DIR/scripts/bootstrap-android.sh"

cd "$APP_DIR/android"
echo "[ci-build-android] Invoking gradle assembleDebug..."
./gradlew assembleDebug
