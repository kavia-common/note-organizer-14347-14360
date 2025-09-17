#!/usr/bin/env bash
# Standard Android build entry for CI tools. Generates the Android wrapper if needed and builds debug APK.

set -euo pipefail

# Ensure wrapper exists and then build using the internal gradle wrapper
bash "$(dirname "$0")/prepare-android-wrapper.sh"
bash "$(dirname "$0")/gradlew-root.sh" :app:assembleDebug
