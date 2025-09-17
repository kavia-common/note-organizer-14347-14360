#!/usr/bin/env sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Ensure shim is executable
chmod +x ./gradlew 2>/dev/null || true

# Try invoking via sh
if [ -x ./gradlew ]; then
  echo "[ci-gradle-runner] Running ./gradlew :app:assembleDebug"
  ./gradlew :app:assembleDebug && exit 0 || echo "[ci-gradle-runner] ./gradlew failed, trying bash"
fi

# Try invoking via bash explicitly (some shells need it)
if command -v bash >/dev/null 2>&1; then
  echo "[ci-gradle-runner] Running bash ./gradlew :app:assembleDebug"
  bash ./gradlew :app:assembleDebug && exit 0 || echo "[ci-gradle-runner] bash invocation failed"
fi

# If still failing, run direct prebuild then delegate
echo "[ci-gradle-runner] Attempting direct expo prebuild then native gradle"
cd "$ROOT_DIR/notes_frontend"
npx --yes expo prebuild --platform android --no-install || {
  echo "[ci-gradle-runner] Expo prebuild failed"; exit 1;
}
cd "$ROOT_DIR/notes_frontend/android"
chmod +x ./gradlew 2>/dev/null || true
./gradlew :app:assembleDebug
