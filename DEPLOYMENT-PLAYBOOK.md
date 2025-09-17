# Deployment Playbook

Targets
- Android (Debug/Release) via Expo Prebuild + Gradle
- Web (static export)

Pre-flight
- Verify CHANGELOG.md and RELEASE-NOTES.md are updated
- Update version in notes_frontend/app.json
- Run through QA-TEST-PLAN.md on a device/emulator

Build — Android
- Preferred CI command:
  sh ./gradle-preflight.sh :app:assembleDebug
- Alternative:
  sh ./run-gradle-direct.sh :app:assembleDebug

Build — Web
- sh ./build-web.sh
- Output: notes_frontend/dist-web

Post-build
- Smoke test on device/emulator
- Archive artifacts and tag release

Rollback Plan
- Retain previous stable artifacts/tags
- Revert to prior version in app.json if needed
