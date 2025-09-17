Before invoking Gradle in CI, ensure executable permissions:
- chmod +x ./gradlew || true
- chmod +x ./.gradlew || true
- chmod +x ./notes_frontend/android/gradlew || true

Recommended invocation:
- make build-android
or
- bash ./gradlew-ci.sh :app:assembleDebug
