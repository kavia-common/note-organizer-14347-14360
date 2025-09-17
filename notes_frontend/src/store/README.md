Store Overview (NotesContext)

- Provides application state for Notes and Folders with CRUD operations.
- Persists data to AsyncStorage (see services/storage.ts).
- Persists preferences (sort mode, selected folder) under:
  - prefs.sortMode
  - prefs.selectedFolderId

Public API (see PUBLIC_INTERFACE markers):
- NotesProvider: React provider wrapping the app
- useNotes(): Access notes, folders, preferences, and CRUD methods

Sort modes:
- 'updated' (default), 'created', 'title'
