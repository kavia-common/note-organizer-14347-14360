# Gradle Wrapper Notice

This repository uses Expo Prebuild to generate the Android Gradle wrapper under:
- note-organizer-14347-14360/notes_frontend/android

If an analyzer or CI runs `./gradlew` at the repository root PRIOR to prebuild, it will fail because the wrapper does not exist yet.

Fix paths:
- One-step: `bash note-organizer-14347-14360/ci-bootstrap-and-check.sh`
- Build: `bash note-organizer-14347-14360/build-android.sh`
- Proxy Gradle tasks: `bash note-organizer-14347-14360/gradle-check.sh`

Compatibility shims provided at repo root:
- gradlew (bootstraps and delegates)
- gradlew.sh/gradlew.shim/.gradlew/.gradlew.bak/gradlew.auto/gradle/run-gradle.sh (various delegates)
These are helpers; the actual Gradle wrapper lives under notes_frontend/android after Expo Prebuild.
