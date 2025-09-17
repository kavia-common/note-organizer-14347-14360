# Gradle Shim

Why this exists
- The project is an Expo (React Native) app. The native Android project is created via Expo Prebuild.
- CI often expects `./gradlew` at the repo root.
- The root-level `gradlew` shim bootstraps the Android project and then delegates to the generated `notes_frontend/android/gradlew`.

How to use in CI
- bash set-exec-shims.sh
- bash ci-gradle-runner.sh

Direct usage
- chmod +x ./gradlew && ./gradlew :app:assembleDebug
