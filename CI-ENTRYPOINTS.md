# CI Entrypoints

Do not call ./gradlew from repository root — no wrapper exists here.

Use one of the following from repo root:
- sh ./gradle-preflight.sh :app:check
- sh ./gradle-preflight.sh :app:assembleDebug

If the Android project already exists:
- sh ./run-gradle-direct.sh :app:check

Why:
- Expo projects generate native folders during prebuild.
- The preflight script creates notes_frontend/android and the Gradle wrapper, then forwards the requested task.
