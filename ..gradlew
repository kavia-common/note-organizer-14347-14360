#!/usr/bin/env sh
# Hidden alt entrypoint some analyzers invoke by mistake. Ensure perms and delegate.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$ROOT_DIR/set-exec-gradle.sh" || true
exec "$ROOT_DIR/gradlew" "$@"
