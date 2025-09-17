import { Note } from '../types';

// PUBLIC_INTERFACE
export function batchSetPinned(notes: Note[], folderId: string | null, pinned: boolean): Note[] {
  /** Returns a new notes array with all notes in folderId (or all when null) set to given pinned state. */
  const predicate = (n: Note) => (folderId ? n.folderId === folderId : true);
  const now = Date.now();
  return notes.map((n) => (predicate(n) ? { ...n, pinned, updatedAt: now } : n));
}
