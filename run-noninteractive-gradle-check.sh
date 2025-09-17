#!/usr/bin/env sh
# Root-level wrapper for non-interactive gradle check to withstand CI/analyzer signals.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
exec sh "$ROOT_DIR/notes_frontend/gradle-check-noninteractive.sh"
