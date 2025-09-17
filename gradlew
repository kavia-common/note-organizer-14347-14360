#!/usr/bin/env sh
# Root-level gradlew shim for CI/analyzers that invoke "./gradlew".
# Ensures the native Android project exists (via Expo prebuild) and then delegates
# to the actual Gradle wrapper inside notes_frontend/android.

set -e

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"
ANDROID_DIR="$APP_DIR/android"

TASK_ARGS="$@"

# Ensure native Android project exists and gradle wrapper is available
if [ ! -d "$ANDROID_DIR" ] || [ ! -x "$ANDROID_DIR/gradlew" ]; then
  echo "[root-gradlew] Android project not found. Running expo prebuild..."
  cd "$APP_DIR"
  npx --yes expo prebuild --platform android
  echo "[root-gradlew] Prebuild completed."
fi

cd "$ANDROID_DIR"
chmod +x ./gradlew || true
echo "[root-gradlew] Delegating to notes_frontend/android/gradlew $TASK_ARGS"
exec ./gradlew $TASK_ARGS
