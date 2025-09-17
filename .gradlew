#!/usr/bin/env sh
# Hidden gradle wrapper shim for CI tools invoking ".gradlew".
# Ensures the native Android project exists, then forwards requested task(s).

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
ANDROID_DIR="$APP_DIR/android"

TASK_ARGS="$@"

if [ ! -d "$ANDROID_DIR" ] || [ ! -x "$ANDROID_DIR/gradlew" ] ; then
  echo "[dot-gradlew-shim] Android project not found. Running expo prebuild..."
  cd "$APP_DIR"
  npx --yes expo prebuild --platform android
  echo "[dot-gradlew-shim] Prebuild completed."
fi

cd "$ANDROID_DIR"
chmod +x ./gradlew || true
echo "[dot-gradlew-shim] Delegating to notes_frontend/android/gradlew $TASK_ARGS"
./gradlew $TASK_ARGS
