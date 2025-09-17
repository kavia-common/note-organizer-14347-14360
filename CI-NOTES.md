# CI Notes — Native Build

Prefer running:
  sh ./run-notes-native-check.sh

Why:
- This Expo project generates the native Android project at build time.
- Some CI images fail when calling ./gradlew at repo root.
- The script runs Expo Prebuild and then delegates to notes_frontend/android/gradlew.

If you must call ./gradlew:
- Ensure you are at the repository root,
- Run: sh ./ensure-gradle-exec.sh
- Then: ./gradlew :app:assembleDebug
