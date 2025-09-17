#!/usr/bin/env sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$ROOT_DIR/set-exec-gradle.sh" || true
exec "$ROOT_DIR/gradlew" check
