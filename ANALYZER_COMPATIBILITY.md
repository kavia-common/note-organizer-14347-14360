# Analyzer Compatibility

Some code analysis tools attempt to run `./gradlew` at the repository root.
This project generates the Android Gradle wrapper via Expo Prebuild under:
- note-organizer-14347-14360/notes_frontend/android

Use these entry points:
- `bash note-organizer-14347-14360/prepare-android-wrapper.sh`
- `bash note-organizer-14347-14360/build-android.sh`
- or `make build`

If a tool insists on `./gradlew`, our root `gradlew` shim will try to bootstrap and delegate to the generated wrapper. If Node/npm are unavailable, please call the prepare script in a prior CI step.
