#!/usr/bin/env sh
# Some CI providers source profile.d/* before executing job steps.
# This script ensures a root-level ./gradlew exists for subsequent steps.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"
if [ ! -f "./gradlew" ]; then
  printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
  chmod +x ./gradlew
  echo "[profile.d-ensure-gradlew] Created ./gradlew at repo root."
fi
