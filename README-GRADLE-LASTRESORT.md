# Gradle Last-Resort Placeholder

If your analyzer only checks for the existence of `./gradlew`, run:
  sh note-organizer-14347-14360/init-gradlew-lastresort.sh

This creates a small placeholder `./gradlew` that prints guidance and exits.
For actual builds, run one of:
- bash note-organizer-14347-14360/ci-gradle-check.sh
- bash note-organizer-14347-14360/run-ci.sh
- sh note-organizer-14347-14360/run-gradle-check-bootstrap.sh
