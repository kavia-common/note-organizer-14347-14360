This repository uses Expo-managed workflow. For CI systems that require Gradle at the repository root, we provide a delegating Gradle setup:

- ./settings.gradle maps :app to notes_frontend/android/app
- ./build.gradle delegates assembleDebug to :app:assembleDebug
- ./gradle/wrapper/gradle-wrapper.properties references a standard Gradle distribution

Use the root shim ./gradlew (or bash ./gradlew.sh) after running:
- cd notes_frontend && npm install && npm run prebuild:android

This ensures the Android module exists for Gradle to build.
