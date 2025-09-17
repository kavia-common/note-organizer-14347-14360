#!/usr/bin/env sh
# Analyzer/CI compatibility wrapper to run Gradle "check" via Expo prebuild flow.
# Use this if your CI can't be changed and expects a root-level script to run checks.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

if [ ! -f "$ROOT_DIR/gradle-preflight.sh" ]; then
  echo "[run-gradle-check] gradle-preflight.sh not found at repo root." >&2
  exit 127
fi

echo "[run-gradle-check] Running :app:check via preflight..."
sh "$ROOT_DIR/gradle-preflight.sh" :app:check
