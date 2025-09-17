# Storage Keys

The app persists data locally using AsyncStorage.

- notes.data.v1 — Array<Note>
- folders.data.v1 — Array<Folder>

Notes:
- Keys are versioned to allow future migrations.
- See src/services/storage.ts for read/write helpers.
