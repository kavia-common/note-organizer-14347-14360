#!/usr/bin/env bash
# Root-level Android build helper for CI analyzers that expect ./gradlew at repo root.
# This script generates the native android wrapper under notes_frontend via Expo prebuild, then runs Gradle.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"

echo "[build-android] Using notes_frontend at: $APP_DIR"

if [ ! -d "$APP_DIR" ]; then
  echo "[build-android] ERROR: notes_frontend directory not found at $APP_DIR"
  exit 2
fi

cd "$APP_DIR"

# Ensure Node/npm present (non-fatal logs)
echo "[build-android] node: $(node --version 2>/dev/null || echo 'not found')"
echo "[build-android] npm:  $(npm --version 2>/dev/null || echo 'not found')"

# Install deps if needed
if [ ! -d "node_modules" ]; then
  echo "[build-android] Installing dependencies..."
  npm ci || npm install
fi

# Generate native wrapper
echo "[build-android] Running expo prebuild for Android..."
npx expo prebuild --platform android --non-interactive

# Execute Gradle assembleDebug from the generated android folder
cd "$APP_DIR/android"
chmod +x ./gradlew || true
echo "[build-android] Running ./gradlew assembleDebug ..."
./gradlew assembleDebug
