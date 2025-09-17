import type { Note } from '../types';

// PUBLIC_INTERFACE
export function countNotesByFolder(notes: Note[]): Record<string, number> {
  /** Returns a map from folderId to note count. */
  const counts: Record<string, number> = {};
  for (const n of notes) {
    if (n.folderId) counts[n.folderId] = (counts[n.folderId] ?? 0) + 1;
  }
  return counts;
}
