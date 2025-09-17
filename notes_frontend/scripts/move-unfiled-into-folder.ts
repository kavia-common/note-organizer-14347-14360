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
  const rawNotes = await AsyncStorage.getItem(KEYS.NOTES);
  const rawFolders = await AsyncStorage.getItem(KEYS.FOLDERS);
  const notes: Note[] = rawNotes ? (JSON.parse(rawNotes) as Note[]) : [];
  const folders: Folder[] = rawFolders ? (JSON.parse(rawFolders) as Folder[]) : [];

  const folderName = process.argv[2] || 'Inbox';
  let folder = folders.find((f) => f.name.toLowerCase() === folderName.toLowerCase());
  const now = Date.now();

  if (!folder) {
    folder = { id: uid(), name: folderName, createdAt: now, updatedAt: now, color: null };
    folders.unshift(folder);
  }

  const updatedNotes = notes.map((n) => (n.folderId ? n : { ...n, folderId: folder!.id, updatedAt: now }));

  await AsyncStorage.setItem(KEYS.FOLDERS, JSON.stringify(folders));
  await AsyncStorage.setItem(KEYS.NOTES, JSON.stringify(updatedNotes));

  const moved = updatedNotes.filter((n) => n.folderId === folder!.id).length;
  console.log(`Moved ${moved} notes into folder "${folder!.name}".`);
}

main().catch((e) => {
  console.error('Move failed', e);
  process.exit(1);
});
