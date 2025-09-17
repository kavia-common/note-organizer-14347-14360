# Android Check Entrypoints

Preferred:
- bash note-organizer-14347-14360/ci-gradle-check.sh

Also available:
- ./gradlew check
- bash note-organizer-14347-14360/run-ci.sh
- sh note-organizer-14347-14360/.ci
- bash note-organizer-14347-14360/use-path-gradle.sh
- node note-organizer-14347-14360/gradlew.mjs check
- make check
- bash note-organizer-14347-14360/tools/gradle-check.sh
- ./build.sh

All of these bootstrap the Android wrapper (Expo prebuild) if needed and delegate to the native Gradle wrapper to run `check`.
