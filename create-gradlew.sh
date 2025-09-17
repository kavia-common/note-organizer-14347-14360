#!/usr/bin/env sh
# Force-create a ./gradlew path at repo root, then optionally run a default task.
# Usage:
#   sh ./create-gradlew.sh
#   sh ./create-gradlew.sh :app:assembleDebug
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Ensure gradle.sh exists
if [ ! -f "./gradle.sh" ]; then
  echo "[create-gradlew] gradle.sh not found; cannot proceed."
  exit 1
fi
chmod +x ./gradle.sh 2>/dev/null || true

# Create ./gradlew symlink or wrapper
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
  echo "[create-gradlew] Created ./gradlew"
else
  echo "[create-gradlew] ./gradlew already exists."
fi

# If args provided, delegate to ./gradlew with them
if [ "$#" -gt 0 ]; then
  exec ./gradlew "$@"
fi
