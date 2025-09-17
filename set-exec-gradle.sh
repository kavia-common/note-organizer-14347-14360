#!/usr/bin/env sh
# Ensure execute permissions for gradle wrapper scripts in strict CI environments.
set -eu
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
chmod +x "$ROOT_DIR/gradlew" || true
chmod +x "$ROOT_DIR/gradlew.bat" || true
chmod +x "$ROOT_DIR/gradlew.sh" || true
chmod +x "$ROOT_DIR/gradlew-root.sh" || true
chmod +x "$ROOT_DIR/ci-gradle-check.sh" || true
chmod +x "$ROOT_DIR/run-ci.sh" || true
chmod +x "$ROOT_DIR/check" || true
echo "[set-exec-gradle] Executable permissions ensured."
