import type { Note, Folder } from '../types';

export type SortMode = 'updated' | 'created' | 'title';

export type NotesContextShape = {
  notes: Note[];
  folders: Folder[];
  selectedFolderId: string | null;
  sortMode: SortMode;
  loading: boolean;

  createNote: (data?: Partial<Note>) => Note;
  updateNote: (id: string, data: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  togglePin: (id: string) => void;

  createFolder: (name: string, color?: string | null) => Folder;
  updateFolder: (id: string, data: Partial<Folder>) => void;
  deleteFolder: (id: string) => void;

  setSelectedFolderId: (id: string | null) => void;
  setSortMode: (mode: SortMode) => void;
};
