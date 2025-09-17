#!/usr/bin/env bash
set -euo pipefail

# Gradle wrapper shim for CI environments that call ./gradlew directly.
# If the native Android wrapper exists (created by Expo prebuild), delegate to it.
# Otherwise, provide a helpful message and exit non-zero.

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ANDROID_DIR="${APP_DIR}/android"
WRAPPER_PATH="${ANDROID_DIR}/gradlew"

if [ -x "${WRAPPER_PATH}" ]; then
  echo "[gradlew-shim] Delegating to ${WRAPPER_PATH} $*"
  cd "${ANDROID_DIR}"
  exec "${WRAPPER_PATH}" "$@"
fi

cat <<'EOF'
[gradlew-shim] Android Gradle wrapper not found.

This project uses Expo Prebuild to generate the native Android project and gradle wrapper.
Before invoking Gradle, run the bootstrap step to generate `notes_frontend/android`:

  cd note-organizer-14347-14360/notes_frontend
  npx expo prebuild --platform android

Alternatively run the CI helper script from repo root:

  bash note-organizer-14347-14360/build-android.sh

After prebuild completes, retry your Gradle command.
EOF
exit 127
