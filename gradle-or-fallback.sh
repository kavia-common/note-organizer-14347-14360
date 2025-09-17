#!/usr/bin/env sh
# Drop-in replacement for "gradlew check" in CI.
# Tries native Android check, then automatically falls back to Expo web export.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
exec sh "$ROOT_DIR/ci-mobile-analyze-or-fallback.sh"
