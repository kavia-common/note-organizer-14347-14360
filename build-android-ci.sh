#!/usr/bin/env bash
set -euo pipefail

# One-step CI helper: ensure android wrapper exists then run gradle task(s).
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="${REPO_ROOT}/note-organizer-14347-14360/notes_frontend"
ANDROID_DIR="${APP_DIR}/android"

echo "[ci] Ensuring Expo Android prebuild..."
if [ ! -d "${ANDROID_DIR}" ]; then
  (cd "${APP_DIR}" && npx --yes expo prebuild --platform android)
fi

if [ ! -x "${ANDROID_DIR}/gradlew" ]; then
  echo "[ci] Gradle wrapper still missing after prebuild. Exiting." >&2
  exit 127
fi

echo "[ci] Running Gradle in ${ANDROID_DIR} with args: $*"
(cd "${ANDROID_DIR}" && ./gradlew "$@")
