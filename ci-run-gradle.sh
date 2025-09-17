#!/usr/bin/env bash
# CI helper to run Gradle from the repo root using the Expo-generated wrapper.

set -euo pipefail

cd "$(dirname "$0")/notes_frontend"

if [ ! -f "./android/gradlew" ]; then
  echo "Internal Gradle wrapper missing. Generating via Expo prebuild..."
  npm install --no-audit --no-fund
  npm run prebuild:android
fi

chmod +x ./android/gradlew || true
exec ./android/gradlew "$@"
