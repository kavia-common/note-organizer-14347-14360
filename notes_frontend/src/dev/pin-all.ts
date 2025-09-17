import { loadNotes, saveNotes } from '../services/storage';
import { Note } from '../types';

// PUBLIC_INTERFACE
export async function pinAllNotes(): Promise<number> {
  /** Pins all notes in storage; returns the number of notes updated. */
  const notes: Note[] = await loadNotes();
  let changed = 0;
  const updated = notes.map(n => {
    if (!n.pinned) {
      changed += 1;
      return { ...n, pinned: true, updatedAt: Date.now() };
    }
    return n;
  });
  await saveNotes(updated);
  return changed;
}
