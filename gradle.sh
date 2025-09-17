#!/usr/bin/env sh
# Universal gradle entrypoint for CI environments.
# Goals:
# - If CI fails to resolve ./gradlew due to PATH or exec bit issues, run this script instead.
# - Bootstrap Android via Expo prebuild if missing.
# - Delegate to notes_frontend/android/gradlew with passed args.
set -eu

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
ANDROID_DIR="$APP_DIR/android"

# Ensure line endings are LF (defensive for checked-out code with CRLF)
# Not modifying files here to avoid side effects, but we can warn:
case "$(printf '%s' "$0" | od -An -t x1 | tr -d ' \n')" in
  *) : ;; # noop
esac

# If native gradle wrapper is missing, prebuild
if [ ! -f "$ANDROID_DIR/gradlew" ]; then
  echo "[gradle.sh] Android project not found. Running Expo prebuild..."
  cd "$APP_DIR"
  npx --yes expo prebuild --platform android --no-install || {
    echo "[gradle.sh] Expo prebuild failed."
    exit 1
  }
fi

# Delegate to native gradle
if [ ! -f "$ANDROID_DIR/gradlew" ]; then
  echo "[gradle.sh] Still cannot find $ANDROID_DIR/gradlew"
  exit 1
fi

cd "$ANDROID_DIR"
chmod +x ./gradlew 2>/dev/null || true
exec ./gradlew "$@"
