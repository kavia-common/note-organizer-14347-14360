/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

type Note = {
  id: string;
  title: string;
  content: string;
  folderId?: string | null;
  createdAt: number;
  updatedAt: number;
  pinned?: boolean;
  color?: string | null;
};

type Folder = {
  id: string;
  name: string;
  color?: string | null;
  createdAt: number;
  updatedAt: number;
};

const KEYS = {
  NOTES: 'notes.data.v1',
  FOLDERS: 'folders.data.v1',
};

const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

async function main() {
  const now = Date.now();
  const folders: Folder[] = [
    { id: uid(), name: 'Work', createdAt: now, updatedAt: now, color: null },
    { id: uid(), name: 'Personal', createdAt: now, updatedAt: now, color: null },
  ];

  const notes: Note[] = [
    {
      id: uid(),
      title: 'Welcome to Ocean Notes',
      content:
        'This is a demo note. Create, edit, pin, search, and organize your notes with a modern Ocean Professional theme.',
      folderId: folders[0].id,
      createdAt: now - 1000 * 60 * 30,
      updatedAt: now - 1000 * 60 * 5,
      pinned: true,
      color: null,
    },
    {
      id: uid(),
      title: 'Groceries',
      content: '- Milk\n- Eggs\n- Bread\n- Coffee',
      folderId: folders[1].id,
      createdAt: now - 1000 * 60 * 60 * 2,
      updatedAt: now - 1000 * 60 * 50,
      pinned: false,
      color: null,
    },
    {
      id: uid(),
      title: 'Ideas',
      content: 'Explore RN animations, add color tags, export to Markdown.',
      folderId: null,
      createdAt: now - 1000 * 60 * 60 * 12,
      updatedAt: now - 1000 * 60 * 45,
      pinned: false,
      color: null,
    },
  ];

  await AsyncStorage.setItem(KEYS.FOLDERS, JSON.stringify(folders));
  await AsyncStorage.setItem(KEYS.NOTES, JSON.stringify(notes));

  console.log('Seeded demo folders and notes.');
}

main().catch((e) => {
  console.error('Seed failed', e);
  process.exit(1);
});
