# CI Wrapper Note

If your analyzer or CI cannot be configured away from `./gradlew`, use:

- ./gradlew-wrapper :app:check
- ./_gradlew :app:assembleDebug

These wrappers:
1) run `npx expo prebuild --platform android` to generate `notes_frontend/android` and its `gradlew`
2) forward the task to `notes_frontend/android/gradlew`

If failure persists and CI strictly invokes `./gradlew` (hardcoded), replace the CI step with:
- sh ./ci-gradle-check.sh
or point it to:
- ./gradle (shim)
- ./gradlew (shim)
- ./gradlew.sh (shim)
- ./gradlew.bat (shim on Windows)
- ./.gradlew (hidden shim)

Ensure Node is available in CI to run `npx expo prebuild`.
