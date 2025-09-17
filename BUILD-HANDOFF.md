# Build Handoff (One‑Liner)

Use this single command for native Android builds in CI or locally from the repository root:

  sh ./gradle-preflight.sh :app:assembleDebug

Why this works:
- Generates the native Android project via Expo Prebuild if missing
- Delegates to notes_frontend/android/gradlew with your Gradle task

Alternatives:
- sh ./run-gradle-direct.sh :app:assembleDebug
- sh notes_frontend/android/run-gradle-here.sh :app:assembleDebug
- npm run ensure:gradlew && ./gradlew :app:assembleDebug
