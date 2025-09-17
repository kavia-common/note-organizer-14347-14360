# Gradle Helper Scripts Index

Use these in CI/analyzers to avoid "./gradlew: No such file or directory" by generating the Android wrapper (Expo Prebuild) first.

One-step (bootstrap + check):
- bash note-organizer-14347-14360/ci-bootstrap-and-check.sh

Bootstrap then build:
- bash note-organizer-14347-14360/build-android.sh

Pre-step (ensure exec bits and try wrapper generation):
- bash note-organizer-14347-14360/preflight-ci.sh
- bash note-organizer-14347-14360/pre-gradle.sh
- bash note-organizer-14347-14360/prepare-android-wrapper.sh

Proxies/shims:
- note-organizer-14347-14360/gradlew (root shim, bootstraps then delegates)
- note-organizer-14347-14360/gradle (root shim alternative)
- note-organizer-14347-14360/run-gradle.sh
- note-organizer-14347-14360/gradle-check.sh
- note-organizer-14347-14360/gradlew.auto, gradlew.lite, gradlew.sh, gradlew.shim, .gradlew, .gradlew.bak

App-level scripts:
- note-organizer-14347-14360/notes_frontend/scripts/bootstrap-android.sh
- note-organizer-14347-14360/notes_frontend/scripts/ci-build-android.sh

If your CI cannot run Node/npm to execute Expo Prebuild, you must add a prior step to do so, otherwise Gradle wrapper will not exist and ./gradlew will fail.
