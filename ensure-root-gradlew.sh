#!/usr/bin/env sh
# Ensures a root-level ./gradlew exists and is executable.
# Use this as an early CI step before any analyzer that expects ./gradlew.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Create wrapper if missing
if [ ! -f "./gradlew" ]; then
  printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
  chmod +x ./gradlew
  echo "[ensure-root-gradlew] Created ./gradlew wrapper that forwards to gradle.sh"
else
  chmod +x ./gradlew 2>/dev/null || true
  echo "[ensure-root-gradlew] ./gradlew already exists; ensured executable bit"
fi
