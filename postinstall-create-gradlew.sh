#!/usr/bin/env sh
# Auto-create a ./gradlew wrapper on npm/yarn install at repo root.
# This helps CI that performs install before running Gradle.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Ensure there is a gradle.sh to delegate to
if [ ! -f "./gradle.sh" ]; then
  # Minimal gradle.sh bootstrap if somehow missing
  printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"' 'cd "$DIR"' 'exec sh ./ci-gradle-runner.sh "$@"' > ./gradle.sh
  chmod +x ./gradle.sh
fi

# Create ./gradlew wrapper if missing
if [ ! -f "./gradlew" ]; then
  printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
  chmod +x ./gradlew
  echo "[postinstall-create-gradlew] Created ./gradlew"
else
  echo "[postinstall-create-gradlew] ./gradlew already exists"
fi
