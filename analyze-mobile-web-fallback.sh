#!/usr/bin/env sh
# Web fallback analysis for environments where native Android toolchain is unavailable.
# This avoids invoking Gradle by running an Expo web build, useful for static analysis.

set -e

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"

echo "[web-fallback] Installing dependencies (if needed) and running Expo Web..."
cd "$APP_DIR"

# Ensure npm is initialized and dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "[web-fallback] Installing dependencies..."
  npm ci || npm install
fi

# Run a non-interactive web build; this does not require Android SDK/Gradle
echo "[web-fallback] Building for web (non-interactive)..."
# Expo export for web (stable for CI static checks)
npx --yes expo export --platform web --output-dir dist-web

echo "[web-fallback] Web build completed at notes_frontend/dist-web"
