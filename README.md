# note-organizer-14347-14360

Ocean Professional themed notes app (React Native, Expo).

Run locally:
- cd notes_frontend
- npm install
- npm run start

Native build in CI:
- Preferred: bash ci-gradle-runner.sh
- Fallbacks: sh gradle.sh :app:assembleDebug, make gradle, ./gradlew :app:assembleDebug (after sh ensure-gradle-exec.sh)

Web export:
- sh build-web.sh

Theme:
- Blue (#2563EB) primary, Amber (#F59E0B) secondary
- Minimalist UI, rounded corners, subtle gradients, smooth transitions
