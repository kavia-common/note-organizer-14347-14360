# Gradle Ensure

If your CI does not allow pre-steps before executing Gradle, replace:
  ./gradlew :app:assembleDebug

with:
  ./gradlew-ensure :app:assembleDebug

This creates a root-level `./gradlew` wrapper (delegating to `gradle.sh`) if missing, then runs your task.
