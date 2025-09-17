If CI fails with `./gradlew: No such file or directory`:

Preferred:
- bash note-organizer-14347-14360/ci-gradle-check.sh

If must call a wrapper:
- sh note-organizer-14347-14360/set-exec-gradle.sh
- ./gradlew check
(also available: ./.gradlew, gradlew.run, .gradlew.sh, run-gradle-check-bootstrap.sh)

Alternate (no Gradle):
- bash note-organizer-14347-14360/build-web.sh
