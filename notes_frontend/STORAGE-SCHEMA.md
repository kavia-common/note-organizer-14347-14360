# Storage Schema

Keys:
- notes.data.v1 — Array<Note>
- folders.data.v1 — Array<Folder>

Versioning:
- Increment suffix (v2, v3, ...) when breaking changes to the data shape are introduced.
- Provide a migration step that reads old keys, transforms data, writes to new keys, then removes old keys.

Notes:
- Keep notes/folders small and local. For sync/multi-device, integrate a backend service in the future.
