# CI Usage

If your CI/analyzer invokes `./gradlew` directly and fails with "No such file or directory", run:

- bash note-organizer-14347-14360/ensure-exec.sh
- ./gradlew check

The repo-root `./gradlew` delegates to `gradlew.sh`, which bootstraps the Android wrapper using Expo prebuild if needed, then runs Gradle.
