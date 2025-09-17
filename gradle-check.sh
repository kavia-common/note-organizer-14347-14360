#!/usr/bin/env sh
# Conventional CI entrypoint: gradle-check.sh
# Runs :app:check via Expo prebuild and delegates to the Android Gradle wrapper.

set -e
ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
exec sh "$ROOT_DIR/gradle-preflight.sh" :app:check
