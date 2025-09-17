If your CI/analyzer fails with:
  bash: line 1: ./gradlew: No such file or directory

Run:
  bash note-organizer-14347-14360/ci-bootstrap-and-check.sh

This will bootstrap the Android wrapper (Expo Prebuild) and run a Gradle check using the generated wrapper.
