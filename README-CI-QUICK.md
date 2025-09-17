# CI Quick Fix — Gradle Wrapper

If your CI/analyzer reports:
```
bash: line 1: ./gradlew: No such file or directory
```

Run this single step prior to any Gradle command:
```
bash note-organizer-14347-14360/ci-bootstrap-and-check.sh
```

This will:
- Ensure executable bits on shims
- Attempt to generate the Android wrapper via Expo Prebuild
- Run `./gradlew check` under `notes_frontend/android`
