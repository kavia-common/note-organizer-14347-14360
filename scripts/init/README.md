This folder contains bootstrap helpers some CI providers execute automatically.
scripts/init/gradlew ensures a root-level ./gradlew exists and then runs it.
If your CI still fails on ./gradlew, call:
  sh ./gradle-preflight.sh :app:assembleDebug
