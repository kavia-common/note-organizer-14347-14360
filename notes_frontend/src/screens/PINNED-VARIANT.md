# Pinned Variant

This list screen variant groups pinned notes at the top with a section header.

Files
- `src/screens/NotesListScreen.withPinned.tsx`
- `src/screens/pinned.index.ts` (export)

Enable in `App.tsx`:
1) Replace the default list import:
   import { NotesListScreenWithPinned as NotesListScreen } from './src/screens/pinned.index';
2) Use `<NotesListScreen ... />` where the home route renders the list.

This keeps the default list simple while enabling grouped pinned notes when desired.
