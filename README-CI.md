# Root CI Quickstart

To avoid `./gradlew: No such file or directory` in CI for the mobile app:

Run these steps before any Gradle invocation:
```
bash note-organizer-14347-14360/notes_frontend/scripts/bootstrap-android.sh
bash note-organizer-14347-14360/notes_frontend/scripts/ci-build-android.sh
```

These scripts:
- Install dependencies if needed
- Run `expo prebuild --platform android` to generate `notes_frontend/android/gradlew`
- Execute `./gradlew assembleDebug` within the generated `android` folder
