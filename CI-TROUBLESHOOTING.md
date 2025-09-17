# CI Troubleshooting

Symptom: bash: ./gradlew: No such file or directory
- Cause: Native Android project not generated at notes_frontend/android yet.
- Fix: Use preflight script to generate and then delegate the task.

Commands:
- sh ./gradle-preflight.sh :app:check
- sh ./gradle-preflight.sh :app:assembleDebug

Other common issues:
- Java not found: Install JDK 17 in CI image.
- Android SDK missing: Use an image with Android SDK/NDK, or build via EAS/Expo cloud if preferred.
