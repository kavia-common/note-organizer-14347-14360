#!/usr/bin/env sh
# Ensures Android native project exists and delegates to Gradle wrapper.
# Usage: sh ./gradle-preflight.sh :app:assembleDebug

set -e

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
ANDROID_DIR="$APP_DIR/android"
TASK="${1:-:app:assembleDebug}"

echo "[preflight] Task: $TASK"

if [ ! -d "$ANDROID_DIR" ] || [ ! -x "$ANDROID_DIR/gradlew" ]; then
  echo "[preflight] Android project not found. Running Expo prebuild for Android..."
  cd "$APP_DIR"
  npx --yes expo prebuild --platform android
  echo "[preflight] Prebuild completed."
else
  echo "[preflight] Android project already present."
fi

cd "$ANDROID_DIR"
chmod +x ./gradlew || true
echo "[preflight] Delegating to Gradle wrapper with task $TASK"
./gradlew $TASK
