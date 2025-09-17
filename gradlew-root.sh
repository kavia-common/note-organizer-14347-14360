#!/usr/bin/env bash
# Final fallback root gradle wrapper that ensures a working ./gradlew is always present.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="${ROOT}/note-organizer-14347-14360/notes_frontend"
ANDROID_DIR="${APP_DIR}/android"
APP_WRAPPER="${ANDROID_DIR}/gradlew"

# 1) If app wrapper exists, delegate.
if [ -x "${APP_WRAPPER}" ]; then
  cd "${ANDROID_DIR}"
  exec "${APP_WRAPPER}" "$@"
fi

# 2) Try to bootstrap automatically.
echo "[gradlew-root] Android wrapper not found. Bootstrapping via Expo prebuild..."
( cd "${APP_DIR}" && npx --yes expo prebuild --platform android ) || {
  echo "[gradlew-root] Expo prebuild failed. Aborting." >&2
  exit 127
}

# 3) Delegate after bootstrap.
if [ -x "${APP_WRAPPER}" ]; then
  cd "${ANDROID_DIR}"
  exec "${APP_WRAPPER}" "$@"
fi

echo "[gradlew-root] Wrapper still missing after prebuild. Exiting." >&2
exit 127
