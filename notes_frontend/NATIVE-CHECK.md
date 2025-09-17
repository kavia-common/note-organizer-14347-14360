# Native Check (CI-safe)

Recommended CI command from repository root:
- sh ./notes_frontend/run-native-check.sh

This script:
1) Runs Expo Prebuild to generate the Android project if missing.
2) Delegates to notes_frontend/android/gradlew to assemble a debug build.
