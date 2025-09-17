# Getting Started — Ocean Notes (notes_frontend)

Run (Expo):
1) cd note-organizer-14347-14360/notes_frontend
2) npm install
3) npm run start

Native Android (CI):
- This app uses Expo Prebuild to generate the Android project under notes_frontend/android.
- Use one of the repo-root helpers:
  - bash note-organizer-14347-14360/ci-gradle-check.sh
  - sh note-organizer-14347-14360/run-gradle-check-bootstrap.sh
- If your CI insists on `./gradlew`:
  - sh note-organizer-14347-14360/set-exec-gradle.sh
  - ./gradlew check

Ocean Professional Theme
- Primary: #2563EB, Secondary: #F59E0B, Error: #EF4444
- Background: #f9fafb, Surface: #ffffff, Text: #111827
- Minimalist, rounded corners, subtle shadows/gradients, smooth transitions.

Key Screens
- Notes list, editor, viewer, folder manager
- Help, About, Credits, Web Help
- Optional variants: pinned grouping, quick folder, folder count

Notes are persisted locally via AsyncStorage.
