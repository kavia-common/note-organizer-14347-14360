#!/usr/bin/env sh
set -eu
cat <<'EOF'
This repository uses Expo Prebuild to generate the native Android Gradle wrapper.
Do NOT call ./gradlew at the repo root directly.

Use ONE of:
  sh ./gradle-preflight.sh :app:assembleDebug
  sh ./run-gradle-direct.sh :app:assembleDebug
  sh notes_frontend/android/run-gradle-here.sh :app:assembleDebug
  npm run ensure:gradlew && ./gradlew :app:assembleDebug
EOF
exit 2
