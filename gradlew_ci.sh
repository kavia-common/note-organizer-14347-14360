#!/usr/bin/env sh
# CI-friendly gradle entrypoint that does not depend on ./gradlew being executable.
# It bootstraps the Android project and runs 'check'.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
APP_DIR="$ROOT_DIR/note-organizer-14347-14360/notes_frontend"
ANDROID_DIR="$APP_DIR/android"

# Ensure exec perms on our helper scripts
sh "$ROOT_DIR/set-exec-gradle.sh" || true

# Bootstrap android wrapper if missing
if [ ! -d "$ANDROID_DIR" ] || [ ! -x "$ANDROID_DIR/gradlew" ]; then
  echo "[gradlew_ci] Bootstrapping Android via Expo prebuild..."
  (cd "$APP_DIR" && npx --yes expo prebuild --platform android)
fi

# Run check via native gradle wrapper
if [ -x "$ANDROID_DIR/gradlew" ]; then
  echo "[gradlew_ci] Running Gradle 'check'..."
  (cd "$ANDROID_DIR" && ./gradlew check)
  exit $?
fi

echo "[gradlew_ci] Gradle wrapper still not available after prebuild." >&2
exit 127
