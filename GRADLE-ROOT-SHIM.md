# Root Gradle Shim

Use one of these from repository root:
- ./gradlew            (if your environment picks up the file mode correctly)
- bash ./gradlew-root.sh
- bash note-organizer-14347-14360/ci-gradle-check.sh

These scripts will:
1) Bootstrap the Android project via Expo Prebuild if needed.
2) Delegate to notes_frontend/android/gradlew.
