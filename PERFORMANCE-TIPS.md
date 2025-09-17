# Performance Tips

- Use FlatList for rendering lists (already in NotesListScreen) and avoid heavy inline functions.
- Keep note preview to 2 lines to limit layout work on list screens.
- Debounce search input when handling very large datasets.
- Batch state updates where possible (e.g., NotesContext saves on change).
- Avoid unnecessary re-renders by memoizing computed lists and callbacks.
- Use dependency-free UI helpers (e.g., OceanBackground) to avoid extra packages.
