# Android Build Notes

Prereqs (Local/CI)
- Node 18+ (for `npx expo prebuild`)
- JDK 17
- Android SDK/Platform Tools (if not using EAS)

Commands (from repo root)
- sh ./gradle-preflight.sh :app:check
- sh ./gradle-preflight.sh :app:assembleDebug

Analyzer/CI Entrypoint
- sh ./analyze-mobile.sh  (delegates to a non-interactive Gradle check)

If failures persist
- Ensure Java/SDK are available or switch to web-only analysis
- Prefer EAS/Expo cloud builds for production signing and publishing
