#!/usr/bin/env sh
set -eu
APP_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$APP_DIR"
# Ensure Android project exists
npx --yes expo prebuild --platform android --no-install || {
  echo "[run-native-check] Expo prebuild failed"; exit 1;
}
cd "$APP_DIR/android"
chmod +x ./gradlew 2>/dev/null || true
./gradlew :app:assembleDebug
