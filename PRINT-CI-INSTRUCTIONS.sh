#!/usr/bin/env bash
set -euo pipefail

cat <<'EOT'
CI Android Build Instructions (Expo-managed):

1) Generate the Android wrapper (only needed once per clean checkout):
   cd notes_frontend
   npm install --no-audit --no-fund
   npm run prebuild:android
   cd ..

2) Build using the internal wrapper:
   ./notes_frontend/android/gradlew :app:assembleDebug

Convenience scripts from repository root:
- bash ./build-android.sh            # prebuild (if needed) + assembleDebug
- bash ./ci-run-gradle.sh :app:assembleDebug
- bash ./gradlew-root.sh :app:assembleDebug
- make build-android

If a CI step insists on ./gradlew at repo root:
- chmod +x ./gradlew || true
- chmod +x ./notes_frontend/android/gradlew || true
- ./gradlew :app:assembleDebug

Diagnostics:
- bash ./check-gradle-wrapper.sh
EOT
