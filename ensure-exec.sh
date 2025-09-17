#!/usr/bin/env bash
# Ensure executable bits for Gradle shim scripts in environments that drop file modes.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

chmod +x "${ROOT}/gradlew" || true
chmod +x "${ROOT}/gradlew.sh" || true
chmod +x "${ROOT}/gradlew.alias.sh" || true
chmod +x "${ROOT}/note-organizer-14347-14360/notes_frontend/gradlew-shim.sh" || true
chmod +x "${ROOT}/build-android-ci.sh" || true

echo "[ensure-exec] Execute permissions ensured for gradle shims and helpers."
