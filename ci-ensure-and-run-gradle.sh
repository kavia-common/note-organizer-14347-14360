#!/usr/bin/env sh
# Ensures ./gradlew exists at repo root, then runs it with provided args.
# Usage: sh ./ci-ensure-and-run-gradle.sh :app:assembleDebug
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Ensure primary scripts are executable
chmod +x ./gradle.sh 2>/dev/null || true
chmod +x ./ci-gradle-runner.sh 2>/dev/null || true

# Ensure ./gradlew exists (write a tiny wrapper if missing)
if [ ! -f "./gradlew" ]; then
  printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
  chmod +x ./gradlew
fi

# Run gradle with given args
exec ./gradlew "$@"
