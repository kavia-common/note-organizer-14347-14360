#!/usr/bin/env sh
# Prepend the ci-path-shims directory to PATH to override gradlew during analysis.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
export PATH="$ROOT_DIR/ci-path-shims:$PATH"
echo "[ci-path-shims] PATH updated. gradlew will route to ci-mobile-analyze-or-fallback.sh"
# Optionally exec the next command provided:
if [ "$#" -gt 0 ]; then
  exec "$@"
fi
