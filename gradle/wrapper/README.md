This project uses Expo Prebuild to generate the native Android project at build time.

The actual Gradle wrapper (gradle-wrapper.jar and gradle-wrapper.properties) is generated under:
  notes_frontend/android/gradle/wrapper/

CI systems that require a wrapper at repository root should invoke the root-level shims:
- ./gradlew
- sh ./gradle.sh
- bash ./ci-gradle-runner.sh

Do not place binary JARs in this repository.
