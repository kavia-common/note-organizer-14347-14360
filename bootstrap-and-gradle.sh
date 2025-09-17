#!/usr/bin/env sh
# Usage: sh ./bootstrap-and-gradle.sh :app:assembleDebug
# Ensures ./gradlew exists (symlink or wrapper to gradle.sh), then delegates to it with passed args.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Ensure helper scripts have exec bit
chmod +x ./gradle.sh 2>/dev/null || true
chmod +x ./ci-gradle-runner.sh 2>/dev/null || true

# Ensure a root-level ./gradlew exists
if [ ! -f "./gradlew" ]; then
  if command -v ln >/dev/null 2>&1; then
    ln -s ./gradle.sh ./gradlew || {
      printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
      chmod +x ./gradlew
    }
  else
    printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
    chmod +x ./gradlew
  fi
fi

# Delegate to the newly ensured wrapper
exec ./gradlew "$@"
