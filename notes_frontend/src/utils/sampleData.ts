import { Note, Folder } from '../types';

const now = Date.now();

// PUBLIC_INTERFACE
export function generateSampleFolders(): Folder[] {
  /** Returns a small list of sample folders for demos. */
  return [
    { id: 'f1', name: 'Personal', color: null, createdAt: now - 60000, updatedAt: now - 60000 },
    { id: 'f2', name: 'Work', color: null, createdAt: now - 120000, updatedAt: now - 120000 },
  ];
}

// PUBLIC_INTERFACE
export function generateSampleNotes(folders: Folder[]): Note[] {
  /** Returns a small list of sample notes for demos. */
  const folderId = folders[0]?.id ?? null;
  return [
    {
      id: 'n1',
      title: 'Welcome to Ocean Pro',
      content: 'Tap + to create notes. Use folders to organize.',
      folderId,
      createdAt: now - 50000,
      updatedAt: now - 50000,
      pinned: true,
      color: null,
    },
    {
      id: 'n2',
      title: 'Tips',
      content: 'Pin important notes. Sort by title for alphabetical order.',
      folderId: null,
      createdAt: now - 40000,
      updatedAt: now - 40000,
      pinned: false,
      color: null,
    },
  ];
}
