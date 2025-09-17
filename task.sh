#!/usr/bin/env sh
# Generic CI entrypoint used by some analyzers. Runs Android check via bootstrapper.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$ROOT_DIR/set-exec-gradle.sh" || true
exec sh "$ROOT_DIR/run-gradle-check-bootstrap.sh"
