# Build/Check Entrypoints (Repo Root)

Recommended:
- bash note-organizer-14347-14360/ci-gradle-check.sh

Common aliases:
- ./build-ci.sh
- ./check.sh
- ./ci
- ./test
- ./tests
- ./run.sh
- sh note-organizer-14347-14360/run-from-root-gradle-check.sh
- sh note-organizer-14347-14360/run-gradle-check-bootstrap.sh

Wrapper directly (ensure perms first):
- sh note-organizer-14347-14360/set-exec-gradle.sh
- ./gradlew check

Alternate (no Gradle):
- bash note-organizer-14347-14360/build-web.sh
- bash note-organizer-14347-14360/auto-check-or-web.sh
