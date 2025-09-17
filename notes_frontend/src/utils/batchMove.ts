import { Note } from '../types';

// PUBLIC_INTERFACE
export function batchMoveToFolder(notes: Note[], targetFolderId: string | null): Note[] {
  /** Returns a new notes array where all notes are assigned to targetFolderId (or unassigned when null). */
  const now = Date.now();
  return notes.map((n) => ({ ...n, folderId: targetFolderId, updatedAt: now }));
}
