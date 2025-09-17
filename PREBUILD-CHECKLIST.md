# Prebuild Checklist (Must run before any ./gradlew)

1) Ensure Node and npm are available in your CI agent or local shell.

2) From repository root, run ONE of these:
- bash note-organizer-14347-14360/ci-bootstrap-and-check.sh   # one-step (recommended)
- bash note-organizer-14347-14360/build-android.sh            # bootstrap + assembleDebug
- bash note-organizer-14347-14360/pre-gradle.sh               # pre-hook; runs check if possible

3) If your CI cannot change the gradle command:
- Map ./gradlew -> bash note-organizer-14347-14360/gradlew-fallback.sh
- Or run: bash note-organizer-14347-14360/gradle-wrapper.sh check

Why this is required:
- Expo Prebuild generates the native Android project and Gradle wrapper under:
  note-organizer-14347-14360/notes_frontend/android
- Without prebuild, there is no ./gradlew to execute.
