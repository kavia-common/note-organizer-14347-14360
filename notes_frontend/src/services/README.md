# Services

- storage.ts — AsyncStorage-based persistence for notes and folders.
- Keys are versioned; see STORAGE_KEYS.md for details.

Design:
- Keep services lightweight and side-effect free (JSON read/write only).
- Perform validation and defaults at the store layer.
