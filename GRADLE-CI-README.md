# Gradle in CI

This repository uses Expo Prebuild to generate the Android Gradle wrapper under:
- note-organizer-14347-14360/notes_frontend/android

If your CI or analyzer attempts to run `./gradlew` at the repository root before prebuild, it will fail.

One-step fix:
- `bash note-organizer-14347-14360/ci-bootstrap-and-check.sh`

This script attempts to:
1) Ensure executable bits on shims
2) Generate the Android wrapper via Expo Prebuild
3) Run `./gradlew check` using the generated wrapper
