#!/usr/bin/env sh
# Analyzer entrypoint: prefer calling this instead of ./gradlew in static analysis jobs.
# Routes to a non-interactive Gradle check that tolerates analyzer SIGTERM behavior.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
exec sh "$ROOT_DIR/run-noninteractive-gradle-check.sh"
