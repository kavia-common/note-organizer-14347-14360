#!/usr/bin/env bash
# One-time developer setup: install dependencies for notes_frontend and bootstrap Android wrapper.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR/notes_frontend"

echo "[setup] Installing dependencies in notes_frontend ..."
cd "$APP_DIR"
if [ -f "package-lock.json" ]; then
  npm ci || npm install
else
  npm install
fi

echo "[setup] Bootstrapping Android wrapper ..."
npm run ci:bootstrap-android || npx expo prebuild --platform android --non-interactive || true

echo "[setup] Done. You can now run:"
echo "  cd note-organizer-14347-14360/notes_frontend && npm start"
