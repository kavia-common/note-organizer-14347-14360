# Pin All Utility

Useful for quickly testing pinned note layouts.

Usage:
  import { pinAllNotes } from './src/dev/pin-all';
  await pinAllNotes(); // Pins all notes currently in storage

Notes:
- This operation updates all notes and sets `pinned: true`.
- Intended for development/testing only.
