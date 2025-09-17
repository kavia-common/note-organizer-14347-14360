Structure overview

- components/: Reusable UI parts (AppBar, BackButton, FAB, NoteCard, ConfirmDialog, etc.)
- screens/: App screens (Notes list, Note editor/viewer, Folder manager + optional variants)
- store/: Context-based state for notes & folders (CRUD + sorting/filtering)
- services/: AsyncStorage persistence
- theme/: Ocean Professional tokens (colors, spacing, radii, elevation)
- utils/: Shared helpers (date format, a11y announcer, slugify, seed)
- dev/: Optional developer helpers (seed-once)

Entrypoint
- App.tsx wraps the Router with NotesProvider. No external backend; data is local.

Styling
- Ocean Professional theme: blue primary (#2563EB), amber secondary (#F59E0B),
  rounded corners, subtle shadows, minimalist surfaces.

Notes
- Public interfaces are documented and marked with PUBLIC_INTERFACE comments.
