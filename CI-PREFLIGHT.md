# CI Preflight

Instead of calling `./gradlew` directly, use:
  sh ./gradle-preflight.sh :app:assembleDebug

This guarantees that a root-level `./gradlew` wrapper exists (delegating to `gradle.sh`) before executing the Gradle task.
