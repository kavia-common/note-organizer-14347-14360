# Gradle Usage (CI/Analyzers)

Before any `./gradlew` call, run:
```
bash note-organizer-14347-14360/pre-gradle.sh
```

This bootstraps the Android wrapper (Expo Prebuild) and runs a Gradle check using the generated wrapper.

Alternatives:
- `bash note-organizer-14347-14360/ci-bootstrap-and-check.sh`
- `bash note-organizer-14347-14360/build-android.sh`
- `bash note-organizer-14347-14360/gradle-check.sh`
