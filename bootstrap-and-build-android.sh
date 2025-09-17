#!/usr/bin/env bash
# One-shot script: prepare the Expo Android wrapper and run a Gradle build.
# Useful for CI pipelines that don't customize multiple steps.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "[bootstrap] Preparing Android wrapper..."
bash "$ROOT_DIR/prepare-android-wrapper.sh"

echo "[bootstrap] Building Android debug APK via internal wrapper..."
bash "$ROOT_DIR/gradlew-root.sh" :app:assembleDebug

echo "[bootstrap] Done."
