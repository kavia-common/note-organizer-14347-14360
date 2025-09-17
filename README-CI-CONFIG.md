CI Configuration

Some automated environments attempt to execute ./gradlew at the repo root, which is not present until the Expo prebuild generates an Android project.

Use the provided CI config:
- ci.config.json with:
  - prebuildCommand: make prebuild-android
  - buildCommand: bash ./build-android.sh

These commands:
1) Install dependencies and run Expo prebuild
2) Execute the Android Gradle wrapper at notes_frontend/android/gradlew
