# Sorting & Filtering

Helpers:
- `filterAndSortNotes(notes, { query, folderId, sortMode })`

Sort modes:
- updated (default, with pinned first)
- created
- title

Usage:
  import { filterAndSortNotes } from './src/utils/filtering';
  const list = filterAndSortNotes(notes, { query, folderId: selectedFolderId, sortMode });

Notes:
- Always filter by folder first, then query, then sort for consistent UX.
- Keep search case-insensitive and trim whitespace from query.
