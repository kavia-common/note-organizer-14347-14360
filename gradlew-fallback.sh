#!/usr/bin/env bash
# Fallback wrapper to be aliased to './gradlew' by CI/analyzers.
# It bootstraps the Android wrapper (Expo Prebuild) and runs 'gradle check'.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "[gradlew-fallback] Using one-step bootstrap and check ..."
exec bash "$ROOT_DIR/ci-bootstrap-and-check.sh"
