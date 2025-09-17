#!/usr/bin/env bash
# Helper to run Android Gradle tasks from the notes_frontend directory.

set -euo pipefail

WRAPPER="./android/gradlew"

if [ ! -f "$WRAPPER" ]; then
  echo "Gradle wrapper not found at $WRAPPER"
  echo "Run: npm install && npm run prebuild:android"
  exit 127
fi

chmod +x "$WRAPPER"
exec "$WRAPPER" "$@"
