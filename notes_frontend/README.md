# Ocean Notes (notes_frontend)

A modern, minimalist notes app built with React Native (Expo), themed with "Ocean Professional" (blue + amber accents, subtle gradients, rounded corners, and smooth transitions).

Features
- Create, edit, view, and delete notes
- Organize notes into folders (manage folders: add, rename, delete)
- Pin notes to keep them at the top
- Search and sort (by updated, created, title)
- Local persistence via AsyncStorage
- Reusable components and theme tokens

Ocean Professional Theme
- Primary: #2563EB
- Secondary: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

Structure
- src/theme: Color tokens, gradients, spacing, elevation
- src/store: NotesProvider (CRUD + persistence)
- src/screens: NotesList, NoteEditor, NoteViewer, FolderManager
- src/components: AppBar, FAB, NoteCard, EmptyState, FolderPill, ConfirmModal
- src/utils: useDebouncedValue, helpers

Run locally (Expo)
1) cd note-organizer-14347-14360/notes_frontend
2) npm install
3) npm run start
4) Use Expo Go or platform-specific run commands:
   - npm run android
   - npm run ios
   - npm run web

Android Native Build (CI)
This project uses Expo Prebuild to generate the Android project and Gradle wrapper under notes_frontend/android. Before running any Gradle tasks, bootstrap with:
- npm run prebuild:android
or use one of the root-level helpers:
- bash note-organizer-14347-14360/ci-gradle-check.sh
- bash note-organizer-14347-14360/run-ci.sh
- ./gradlew check (after ensuring executable permissions and prebuild)

Notes
- The app is fully usable via Expo without a native prebuild.
- For CI systems that invoke Gradle directly, ensure prebuild occurs first.
