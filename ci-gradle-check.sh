#!/usr/bin/env sh
# Wrapper used by CI/analyzers expecting to run "gradle check".
# It delegates to gradle-preflight.sh so the native Android project is generated first.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

if [ ! -f "$ROOT_DIR/gradle-preflight.sh" ]; then
  echo "[ci-gradle-check] gradle-preflight.sh not found at repo root." >&2
  exit 127
fi

sh "$ROOT_DIR/gradle-preflight.sh" :app:check
