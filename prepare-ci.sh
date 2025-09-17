#!/usr/bin/env bash
# Ensure gradle shims are executable prior to CI build steps.

set -euo pipefail
chmod +x ./gradlew || true
chmod +x ./gradlew.sh || true
chmod +x ./gradlew.shim || true
chmod +x ./gradlew-root.sh || true
chmod +x ./android-build.sh || true
chmod +x ./build-android.sh || true
chmod +x ./ci-build-android.sh || true
chmod +x ./prepare-android-wrapper.sh || true
chmod +x ./notes_frontend/android/gradlew || true

echo "[prepare-ci] Executable bits set on gradle shims and helper scripts."
