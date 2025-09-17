#!/usr/bin/env sh
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$ROOT_DIR"

# Ensure scripts are executable
chmod +x ./gradle.sh 2>/dev/null || true
chmod +x ./ci-gradle-runner.sh 2>/dev/null || true
chmod +x ./ensure-gradle-exec.sh 2>/dev/null || true

# If ./gradlew does not exist, create a symlink to gradle.sh (most compatible)
if [ ! -f "./gradlew" ]; then
  if command -v ln >/dev/null 2>&1; then
    ln -s ./gradle.sh ./gradlew || {
      # Fallback: create a tiny forwarding wrapper if symlinks are not supported
      printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
      chmod +x ./gradlew
    }
  else
    # No ln command: write a forwarding wrapper
    printf '%s\n' '#!/usr/bin/env sh' 'set -eu' 'exec sh ./gradle.sh "$@"' > ./gradlew
    chmod +x ./gradlew
  fi
fi

echo "[pre-ci-ensure-gradlew] ./gradlew is present and executable."
