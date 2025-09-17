#!/usr/bin/env sh
# Add ./bin to PATH so 'gradlew' can be resolved, then run check.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
export PATH="$ROOT_DIR/bin:$PATH"
exec gradlew check
