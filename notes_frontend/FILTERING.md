# Filtering

Behavior
- Folder filter: when a folder is selected, only notes with that `folderId` are shown.
- Search query: case-insensitive match on title or content.

Helper
- `filterNotes({ notes, query, folderId })` from `src/utils/filter.ts`

Usage
- Apply filtering first, then sorting/grouping.
- For performance in large lists, debounce the query (see `useDebouncedValue`).
