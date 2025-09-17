# Unpin All Utility

Useful for quickly testing unpinned layouts.

Usage:
  import { unpinAllNotes } from './src/dev/unpin-all';
  await unpinAllNotes(); // Unpins all notes currently in storage

Notes:
- This operation updates all notes and sets `pinned: false`.
- Intended for development/testing only.
