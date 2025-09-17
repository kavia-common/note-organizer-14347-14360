#!/usr/bin/env sh
# Normalizes analyzer-provided gradle args and runs a safe, non-interactive check.
# Use: ./gradlew-defaults.sh [args...]
# Examples it can handle:
#   ./gradlew check --console=plain
#   ./gradlew :app:check --scan --no-daemon

set -e

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

# Build filtered args: we pass through only the first Gradle task and drop interactive flags
TASK=""
for a in "$@"; do
  case "$a" in
    --console=*|--console|--scan|--no-daemon|--daemon|--parallel)
      # skip interactive/noisy flags for analyzers
      ;;
    :app:*|check|assembleDebug|assembleRelease|test|lint|build)
      if [ -z "$TASK" ]; then
        TASK="$a"
      fi
      ;;
    *)
      # ignore unknown flags here to keep execution deterministic
      ;;
  esac
done

if [ -z "$TASK" ]; then
  TASK=":app:check"
fi

echo "[gradlew-defaults] Running normalized Gradle task: $TASK"
exec sh "$ROOT_DIR/gradle-preflight.sh" "$TASK"
