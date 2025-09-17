import { Note, Folder } from '../types';
import { loadFolders, loadNotes, saveFolders, saveNotes } from '../services/storage';

// PUBLIC_INTERFACE
export async function seedDemoData(): Promise<{ notes: Note[]; folders: Folder[] }> {
  /** Seeds a small set of demo folders and notes if storage is empty. */
  const [existingNotes, existingFolders] = await Promise.all([loadNotes(), loadFolders()]);
  if (existingNotes.length > 0 || existingFolders.length > 0) {
    return { notes: existingNotes, folders: existingFolders };
  }

  const now = Date.now();
  const folders: Folder[] = [
    { id: 'fld-ideas', name: 'Ideas', createdAt: now, updatedAt: now },
    { id: 'fld-work', name: 'Work', createdAt: now, updatedAt: now },
  ];

  const notes: Note[] = [
    {
      id: 'nt-welcome',
      title: 'Welcome to Ocean Notes',
      content:
        'This is your Ocean Professional-themed notes app. Tap + to create a note, use folders to organize, and long-press actions on items to pin or delete.',
      folderId: 'fld-ideas',
      createdAt: now - 100000,
      updatedAt: now - 100000,
      pinned: true,
    },
    {
      id: 'nt-meeting',
      title: 'Meeting Outline',
      content: '- Intro\n- Goals\n- Timeline\n- Risks\n- Next steps',
      folderId: 'fld-work',
      createdAt: now - 50000,
      updatedAt: now - 45000,
    },
    {
      id: 'nt-brainstorm',
      title: 'Brainstorm',
      content: 'Blue & amber accent palette; rounded corners; subtle gradients; smooth transitions.',
      folderId: 'fld-ideas',
      createdAt: now - 25000,
      updatedAt: now - 20000,
    },
  ];

  await Promise.all([saveFolders(folders), saveNotes(notes)]);
  return { notes, folders };
}
