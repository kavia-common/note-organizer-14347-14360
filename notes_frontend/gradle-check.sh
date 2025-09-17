#!/usr/bin/env sh
# Runs :app:check from within notes_frontend, ensuring android project exists first.

set -e
APP_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
ANDROID_DIR="$APP_DIR/android"

if [ ! -d "$ANDROID_DIR" ] || [ ! -x "$ANDROID_DIR/gradlew" ]; then
  echo "[notes_frontend/gradle-check] Android project not found. Running expo prebuild..."
  cd "$APP_DIR"
  npx --yes expo prebuild --platform android
  echo "[notes_frontend/gradle-check] Prebuild completed."
fi

cd "$ANDROID_DIR"
chmod +x ./gradlew || true
echo "[notes_frontend/gradle-check] Running :app:check"
exec ./gradlew :app:check --console=plain
