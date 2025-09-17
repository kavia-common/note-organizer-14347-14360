# CI Fallbacks

If your CI cannot find `./gradlew`, use one of the following:
- bash ./ci-gradle-runner.sh
- sh ./gradlew.sh
- sh ./gradlew.wrapper

All options will:
1) Bootstrap the Android project via Expo Prebuild if missing.
2) Delegate to `notes_frontend/android/gradlew` to run the requested tasks.
