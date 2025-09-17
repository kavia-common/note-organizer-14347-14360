# Gradle Wrapper Notes

- The repo has a root-level `./gradlew` and `gradle/wrapper/gradle-wrapper.properties`.
- The wrapper jar is downloaded automatically when invoking `./gradlew` (requires curl/unzip).
- If your CI reports `./gradlew: No such file or directory`, ensure:
  1) The repo files are present in the working directory you execute from.
  2) Execute permissions are set: `sh note-organizer-14347-14360/set-exec-gradle.sh`.
  3) Run `./gradlew help` or `./gradlew check`.

Alternate entrypoints:
- bash note-organizer-14347-14360/ci-gradle-check.sh
- bash note-organizer-14347-14360/run-ci.sh
- bash note-organizer-14347-14360/build-web.sh
