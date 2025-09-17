import { Note } from '../types';

// PUBLIC_INTERFACE
export function filterNotes({
  notes,
  query,
  folderId,
}: {
  notes: Note[];
  query: string;
  folderId: string | null;
}): Note[] {
  /** Filter notes by folder (when provided) and case-insensitive query across title/content. */
  const q = (query || '').trim().toLowerCase();
  return notes.filter((n) => {
    const folderOk = folderId ? n.folderId === folderId : true;
    if (!folderOk) return false;
    if (!q) return true;
    const t = (n.title || '').toLowerCase();
    const c = (n.content || '').toLowerCase();
    return t.includes(q) || c.includes(q);
  });
}
