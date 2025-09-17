# Developer Notes

Entry points
- App: note-organizer-14347-14360/notes_frontend/App.tsx
- State: notes_frontend/src/store/NotesContext.tsx
- Screens: notes_frontend/src/screens
- Components: notes_frontend/src/components
- Theme: notes_frontend/src/theme/colors.ts

Run (local)
- cd notes_frontend
- npm install
- npm run start

Native build (CI-friendly)
- sh ./gradle-preflight.sh :app:assembleDebug
- or sh ./run-gradle-direct.sh :app:assembleDebug

Web export
- sh ./build-web.sh

Common helpers
- Export: src/utils/export.ts
- Import: src/utils/import.ts
- Seed: src/dev/seed-once.ts and src/utils/seed.ts
