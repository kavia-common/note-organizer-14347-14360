#!/usr/bin/env sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$ROOT_DIR/set-exec-gradle.sh" || true
sh "$ROOT_DIR/bootstrap-gradle-wrapper.sh"
exec "$ROOT_DIR/gradlew" check
