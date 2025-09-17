# Ensure ./gradlew in CI

Add this step before invoking Gradle:
  npm run ensure:gradlew
  ./gradlew :app:assembleDebug

This creates a POSIX `./gradlew` wrapper that forwards to `gradle.sh`, with LF endings and executable bit set.
