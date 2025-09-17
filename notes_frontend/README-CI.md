# CI Instructions (Android - Expo SDK 53)

CI commonly fails with:
```
bash: line 1: ./gradlew: No such file or directory
```

This happens if the native Android wrapper is not generated before invoking Gradle. Use `expo prebuild` to generate it.

## Recommended pipeline steps

1) Bootstrap the native wrapper:
```
bash note-organizer-14347-14360/notes_frontend/scripts/bootstrap-android.sh
```

2) Build with Gradle:
```
bash note-organizer-14347-14360/notes_frontend/scripts/ci-build-android.sh
```

The second script calls the first one and then runs:
```
cd note-organizer-14347-14360/notes_frontend/android && ./gradlew assembleDebug
```

## Notes
- Scripts are idempotent and safe to re-run.
- Ensure Node and npm are available in the CI image.
- If `npm ci` is unavailable, the script falls back to `npm install`.
- These scripts are meant for CI; for local development use `npm start` from `notes_frontend`.
