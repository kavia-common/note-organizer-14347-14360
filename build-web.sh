#!/usr/bin/env sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR/notes_frontend"
# Install deps if node_modules missing (best-effort)
if [ ! -d "node_modules" ]; then
  echo "[build-web] Installing dependencies..."
  npm ci || npm install
fi
echo "[build-web] Building Expo web bundle..."
npx --yes expo export --platform web --output-dir dist-web
echo "[build-web] Web export completed at notes_frontend/dist-web"
