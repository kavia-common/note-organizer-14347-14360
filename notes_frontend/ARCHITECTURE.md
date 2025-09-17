# Architecture — Ocean Notes

Overview
- React Native (Expo) app with a lightweight in-app router (App.tsx).
- NotesProvider context manages Notes and Folders with CRUD and persistence via AsyncStorage.
- Ocean Professional theme tokens centralize colors, radii, spacing, and elevation.

Data flow
- Components use `useNotes()` from `src/store/NotesContext` for:
  - notes, folders, selectedFolderId, sortMode, loading
  - create/update/delete/togglePin for notes
  - create/update/delete for folders
  - setSelectedFolderId and setSortMode

Persistence
- AsyncStorage keys:
  - notes.data.v1
  - folders.data.v1

UI structure
- AppBar at top, list in main area, FAB at bottom-right.
- Screens:
  - NotesListScreen (and variants: pinned, folderCount, quickFolder)
  - NoteEditorScreen
  - NoteViewerScreen
  - FolderManagerScreen
  - Help, About, Credits, Web Help
- Components:
  - AppBar, FAB, NoteCard, EmptyState, FolderPill, ConfirmModal
  - Optional: StatsBadge, FolderCounter, NewFolderQuickAction, SectionHeader

Theme
- Ocean Professional: modern minimal, blue (#2563EB) & amber (#F59E0B), rounded, subtle gradients, smooth transitions.
