#!/usr/bin/env bash
# Ensure executable bits are set on gradle-related shims for CI/analyzers.

set -euo pipefail
chmod +x note-organizer-14347-14360/gradlew 2>/dev/null || true
chmod +x note-organizer-14347-14360/gradlew.sh 2>/dev/null || true
chmod +x note-organizer-14347-14360/.gradlew 2>/dev/null || true
chmod +x note-organizer-14347-14360/gradlew-root.sh 2>/dev/null || true
chmod +x note-organizer-14347-14360/prepare-android-wrapper.sh 2>/dev/null || true
chmod +x note-organizer-14347-14360/build-android.sh 2>/dev/null || true
chmod +x note-organizer-14347-14360/notes_frontend/scripts/bootstrap-android.sh 2>/dev/null || true
chmod +x note-organizer-14347-14360/notes_frontend/scripts/ci-build-android.sh 2>/dev/null || true

echo "[set-exec-bits] Executable bits ensured."
