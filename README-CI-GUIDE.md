# CI Guide (Android Gradle Wrapper)

If your CI/analyzer calls `./gradlew` directly at repository root, it will fail because this project uses Expo Prebuild to generate the native Android project and the Gradle wrapper under:
- note-organizer-14347-14360/notes_frontend/android/gradlew

Use one of the following entrypoints at repository root:

1) One-step check:
   bash note-organizer-14347-14360/ci-gradle-check.sh

2) Manual steps:
   - bash note-organizer-14347-14360/ensure-exec.sh
   - ./gradlew check

3) Run a build:
   - bash note-organizer-14347-14360/ensure-exec.sh
   - ./gradlew assembleDebug

The repo-root ./gradlew is a shim that bootstraps the Android wrapper (via Expo Prebuild) if missing, then delegates to it.
