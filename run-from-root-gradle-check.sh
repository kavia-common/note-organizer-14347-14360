#!/usr/bin/env sh
# Ensures the current directory is the repository root before invoking ./gradlew.
set -eu

# Determine this script's directory and the repo root (this file resides at repo root)
SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Ensure exec perms and wrapper JAR presence if needed
sh "$SCRIPT_DIR/set-exec-gradle.sh" || true
# Hardened gradlew will self-fetch wrapper JAR if missing
exec sh "$SCRIPT_DIR/gradlew" check
