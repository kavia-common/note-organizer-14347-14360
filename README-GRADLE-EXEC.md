# Gradle Execution at Repository Root

Some analyzers/CI pipelines call `./gradlew` at the repository root. This project uses Expo Prebuild to generate the native Android Gradle project inside `notes_frontend/android`.

Use one of the following entrypoints:
- `bash note-organizer-14347-14360/build-android.sh` (bootstraps and builds)
- `bash note-organizer-14347-14360/prepare-android-wrapper.sh` (only bootstraps)

The root `gradlew` file provided here is a shim that:
- Attempts to bootstrap the wrapper under `notes_frontend/android`
- Delegates execution to `notes_frontend/android/gradlew` if available
If generation is not possible in the environment (no Node/npm), you must bootstrap in a different CI step.
