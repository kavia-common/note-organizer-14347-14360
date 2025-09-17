#!/usr/bin/env sh
# Root-level gradlew.sh shim for CI systems that invoke "./gradlew.sh".
# Ensures the native Android project exists, then forwards requested task(s).

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
ANDROID_DIR="$APP_DIR/android"

TASK_ARGS="$@"

if [ ! -d "$ANDROID_DIR" ] || [ ! -x "$ANDROID_DIR/gradlew" ]; then
  echo "[root-gradlew.sh] Android project not found. Running expo prebuild..."
  cd "$APP_DIR"
  npx --yes expo prebuild --platform android
  echo "[root-gradlew.sh] Prebuild completed."
fi

cd "$ANDROID_DIR"
chmod +x ./gradlew || true
echo "[root-gradlew.sh] Delegating to notes_frontend/android/gradlew $TASK_ARGS"
./gradlew $TASK_ARGS
