# Gradle Usage in This Repository

This project uses Expo Prebuild to generate the Android Gradle wrapper inside:
- note-organizer-14347-14360/notes_frontend/android

If your analyzer or CI tries to run `./gradlew` at the repo root:
- Use `bash note-organizer-14347-14360/gradle-check.sh` which will bootstrap and forward Gradle tasks
- Or run `bash note-organizer-14347-14360/build-android.sh` to bootstrap and build

Direct `./gradlew` at the repo root is a shim and cannot function until the native wrapper is generated.
