#!/usr/bin/env sh
# Run Gradle within notes_frontend with a sensible default task if none is provided.

set -e
APP_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
TASK_ARGS="$@"

if [ -z "$TASK_ARGS" ]; then
  TASK_ARGS=":app:check"
fi

exec sh "$APP_DIR/gradlew" $TASK_ARGS
