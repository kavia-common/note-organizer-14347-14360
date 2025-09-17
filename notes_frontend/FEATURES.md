Ocean Professional Notes – Feature Summary

Core:
- Create, edit, view, and delete notes
- Organize notes into folders (create, rename, delete folders)
- Pin notes to keep them prioritized
- Search notes by title/content
- Sort notes by: Recently updated, Created, Title
- Local persistence via @react-native-async-storage/async-storage

UI/UX:
- AppBar (title, actions), FAB for adding new notes
- Ocean Professional theme: blue primary (#2563EB) and amber secondary (#F59E0B)
- Minimalist surfaces with rounded corners and soft shadows
- Subtle gradients and tints (e.g., amber-50 for pinned highlights)
- Note color tagging (left accent bar, color picker in editor)
- Empty state with CTA to create a new note
- Folder chips row with Manage action
- Pull-to-refresh on list
- Inline rename (long-press a note)
- Delete confirmation dialog
- Snackbar confirmation after save
- Onboarding tip shown on first launch
- Help and About screens; Help accessible from Home app bar

Accessibility & Testability:
- Accessibility roles and labels on interactive elements
- testID attributes on FAB and key actions

Persistence:
- Notes and Folders saved locally (storage.ts)
- User preferences saved (selected folder, sort mode)

Developer Shortcuts:
- Quick Android build helper at repo root: bash ./android-build.sh
- Build scripts and CI helpers documented in repository root README files
