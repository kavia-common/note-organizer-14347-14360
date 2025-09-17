# Map './gradlew' to our bootstrapper

If your CI/analyzer lets you map or override the command it runs for Gradle, set:
- Command to run: `bash note-organizer-14347-14360/gradlew-fallback.sh`

This script:
- Bootstraps the Android wrapper via Expo Prebuild
- Runs `./gradlew check` in `notes_frontend/android`

Alternatively, run:
- `bash note-organizer-14347-14360/ci-bootstrap-and-check.sh`
- `bash note-organizer-14347-14360/build-android.sh`
