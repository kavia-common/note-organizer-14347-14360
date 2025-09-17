#!/usr/bin/env sh
# Conventional entrypoint that some analyzers call to run a Gradle check.
set -eu
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$DIR/set-exec-gradle.sh" || true
exec sh "$DIR/run-gradle-check-bootstrap.sh"
