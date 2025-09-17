# Search UX

Best practices:
- Debounce input (use `useDebouncedValue`) to reduce re-renders on large lists.
- Highlight query matches in titles (see `Highlighted` in `src/utils/highlight.tsx`).
- Combine filters:
  1) Filter by selected folder
  2) Filter by query
  3) Sort by selected mode

Optional UI:
- Show result count next to the folder pill(s) or in the AppBar (see `StatsBadge`).
