#!/usr/bin/env sh
# Run a Gradle task inside notes_frontend/android if already generated.
# Usage: sh ./run-gradle-direct.sh :app:assembleDebug

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
ANDROID_DIR="$ROOT_DIR/notes_frontend/android"
TASK="${1:-:app:assembleDebug}"

if [ ! -d "$ANDROID_DIR" ] || [ ! -x "$ANDROID_DIR/gradlew" ]; then
  echo "[direct] Android project or gradlew missing. Use gradle-preflight.sh instead." >&2
  exit 127
fi

cd "$ANDROID_DIR"
chmod +x ./gradlew || true
./gradlew $TASK
