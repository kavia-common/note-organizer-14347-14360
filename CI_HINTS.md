If your CI cannot find ./gradlew at the repository root:
- Use: bash ./gradlew.sh :app:assembleDebug
- Or: ./run-android-gradle.sh :app:assembleDebug
- Ensure the Android wrapper exists by running in notes_frontend:
  npm install && npm run prebuild:android
