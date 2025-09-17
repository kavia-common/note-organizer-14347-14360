#!/usr/bin/env sh
# Conventional analyzer entrypoint. Bootstraps and runs Gradle check.
set -eu
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$DIR/set-exec-gradle.sh" || true
exec sh "$DIR/run-gradle-check-bootstrap.sh"
