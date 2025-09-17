# CI Harness

If your CI hardcodes "./gradlew", replace the step with:
  sh ./bootstrap-and-gradle.sh :app:assembleDebug

Or set a custom entrypoint to:
  ./gradle-bootstrap :app:assembleDebug

Both will:
1) Create a ./gradlew symlink or wrapper to gradle.sh
2) Delegate to gradle.sh, which runs Expo Prebuild (if needed) and then native Gradle
