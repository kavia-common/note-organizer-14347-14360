# CI Prehook

Before running `./gradlew`, add this step:

  sh ./pre-ci-ensure-gradlew.sh

This will:
1) Ensure execution bits on helper scripts,
2) Create `./gradlew` as a symlink to `gradle.sh` (or a tiny wrapper) so CI can call `./gradlew ...`.
