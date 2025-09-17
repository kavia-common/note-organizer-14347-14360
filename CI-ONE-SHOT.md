# CI One-Shot Command

Use this as your Gradle build step:
  sh ./run-ci-gradle-once.sh

It creates a root-level ./gradlew shim (forwarding to gradle.sh), then executes:
  ./gradlew :app:assembleDebug
