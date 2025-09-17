#!/usr/bin/env sh
# Explicit alternative to ./gradlew that bootstraps and runs Gradle check by default if no args provided.
set -eu
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
TASK="${*:-check}"
sh "$DIR/ensure-exec.sh" || true
exec sh "$DIR/gradlew-root.sh" $TASK
