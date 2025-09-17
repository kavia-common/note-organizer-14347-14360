# Project Summary

- Container: notes_frontend (Expo React Native)
- Theme: Ocean Professional (blue #2563EB, amber #F59E0B)
- Screens: Notes list, editor, viewer, folder manager, help, about, credits, web help
- Features: create, edit, view, delete, pin, search, sort, organize into folders, local persistence
- UI: top app bar, list in main area, FAB for adding notes, rounded corners, subtle shadows/gradients

Run locally:
- cd note-organizer-14347-14360/notes_frontend
- npm install
- npm run start

CI/native build guidance:
- Use bootstrap script: bash note-organizer-14347-14360/ci-gradle-check.sh
- Alternate: web export via bash note-organizer-14347-14360/build-web.sh
