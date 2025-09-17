import { Note } from '../types';

export type SortMode = 'updated' | 'created' | 'title';

function buildSorter(mode: SortMode) {
  switch (mode) {
    case 'title':
      return (a: Note, b: Note) => a.title.localeCompare(b.title);
    case 'created':
      return (a: Note, b: Note) => b.createdAt - a.createdAt;
    case 'updated':
    default:
      return (a: Note, b: Note) => {
        // Pinned first, then most recently updated
        if ((a.pinned ? 1 : 0) !== (b.pinned ? 1 : 0)) return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
        return b.updatedAt - a.updatedAt;
      };
  }
}

// PUBLIC_INTERFACE
export function filterAndSortNotes(
  notes: Note[],
  opts: { query?: string; folderId?: string | null; sortMode?: SortMode } = {}
): Note[] {
  /** Returns a filtered/sorted list of notes for display based on query, folder and sort mode. */
  const q = (opts.query || '').trim().toLowerCase();
  const folderId = opts.folderId ?? null;
  const sorter = buildSorter(opts.sortMode || 'updated');

  return notes
    .filter(n => {
      const matchesFolder = folderId ? n.folderId === folderId : true;
      if (!q) return matchesFolder;
      const inTitle = (n.title || '').toLowerCase().includes(q);
      const inContent = (n.content || '').toLowerCase().includes(q);
      return matchesFolder && (inTitle || inContent);
    })
    .sort(sorter);
}
