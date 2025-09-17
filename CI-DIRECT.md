# CI Direct Runner

Use this command in CI:
  sh ./run-gradle-direct.sh :app:assembleDebug

It will:
1) Generate the Android project with `expo prebuild` if needed,
2) Run `notes_frontend/android/gradlew` with your arguments.
