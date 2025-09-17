# CI Gradle Fallback

If your CI keeps failing with:
  bash: line 1: ./gradlew: No such file or directory

Use this guaranteed fallback:
  sh ./gradle.sh :app:assembleDebug

This script:
1) Ensures the Android project exists (runs Expo Prebuild if needed).
2) Delegates to notes_frontend/android/gradlew with any args you pass.
