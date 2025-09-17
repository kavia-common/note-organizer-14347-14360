# Build Shims for CI

Problem
- Some CI/analyzers invoke `./gradlew` (or `gradle`, `gradlew.sh`, `gradlew.bat`) from the repository root.
- In Expo projects, the actual Gradle wrapper is generated under `notes_frontend/android/` by `expo prebuild`.

Solution
- Use the provided shims to generate the native project and delegate the Gradle task:

From repository root:
- ./gradlew :app:check
- ./gradle :app:assembleDebug
- sh ./gradle-preflight.sh :app:assembleDebug
- sh ./ci-gradle-check.sh

Windows CI:
- gradlew.bat :app:check

Notes
- Ensure Node is available in the CI image (needed for `npx expo prebuild`).
- For production, consider EAS/Expo cloud builds or set up Android SDK/JDK 17 in CI.
