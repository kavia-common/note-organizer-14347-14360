import { Note } from '../types';

export type SortMode = 'updated' | 'created' | 'title';

// PUBLIC_INTERFACE
export function sortNotes(notes: Note[], mode: SortMode = 'updated'): Note[] {
  /** Return a new array of notes sorted by mode; pinned notes first for 'updated' mode. */
  const arr = [...notes];
  if (mode === 'title') {
    return arr.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  }
  if (mode === 'created') {
    return arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }
  // updated (default) with pinned priority
  return arr.sort((a, b) => {
    const p = (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
    if (p !== 0) return p;
    return (b.updatedAt || 0) - (a.updatedAt || 0);
  });
}

// PUBLIC_INTERFACE
export function groupPinned(notes: Note[]): { pinned: Note[]; others: Note[] } {
  /** Split notes into pinned and others. */
  const pinned = notes.filter((n) => !!n.pinned);
  const others = notes.filter((n) => !n.pinned);
  return { pinned, others };
}
