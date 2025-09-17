#!/usr/bin/env sh
# Root-level wrapper which runs the gradle check from the notes_frontend directory.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
exec sh "$ROOT_DIR/notes_frontend/gradle-check.sh"
