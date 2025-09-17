#!/usr/bin/env sh
# One-shot CI command that guarantees ./gradlew exists, then runs :app:assembleDebug
# Usage: sh ./run-ci-gradle-once.sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Guarantee ./gradlew
if [ ! -f "./gradlew" ]; then
  printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
  chmod +x ./gradlew
fi

# Execute default task
exec ./gradlew :app:assembleDebug
