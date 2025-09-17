#!/usr/bin/env sh
# Conventional CI build entrypoint: bootstrap Gradle wrapper and run 'check'.
set -eu
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
sh "$DIR/set-exec-gradle.sh" || true
exec sh "$DIR/run-gradle-check-bootstrap.sh"
