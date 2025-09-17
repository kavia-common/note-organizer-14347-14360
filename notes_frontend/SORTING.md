# Sorting

Modes:
- updated (default): pinned first, then by updatedAt desc
- created: by createdAt desc
- title: alphabetical by title

Helpers:
- sortNotes(notes, mode)
- groupPinned(notes)

These are in `src/utils/sort.ts` and are used by list variants to ensure consistent behavior.
