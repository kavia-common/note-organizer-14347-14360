CI Gradle Wrapper Troubleshooting

Symptom:
- CI runs: ./gradlew
- Error: bash: line 1: ./gradlew: No such file or directory

Root cause:
- This is an Expo-managed app; the Android Gradle wrapper is generated under notes_frontend/android by Expo prebuild.
- Some CI pipelines invoke ./gradlew at the repository root before prebuild runs.

Fix options (from repository root):
1) Preferred (single-line):
   bash ./build-android.sh

2) Or explicit steps:
   bash ./prepare-android-wrapper.sh
   ./gradlew :app:assembleDebug

3) Or make:
   make build-android

Notes:
- If ./gradlew is not executable in CI, call with bash: bash ./gradlew-root.sh :app:assembleDebug
- The wrapper path is: notes_frontend/android/gradlew
