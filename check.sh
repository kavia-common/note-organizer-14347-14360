#!/usr/bin/env sh
# Conventional analyzer entrypoint to run native check with bootstrap.
set -eu
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$DIR/set-exec-gradle.sh" || true
exec sh "$DIR/run-gradle-check-bootstrap.sh"
