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

const KEYS = {
  NOTES: 'notes.data.v1',
};

async function main() {
  const raw = await AsyncStorage.getItem(KEYS.NOTES);
  const notes: Note[] = raw ? (JSON.parse(raw) as Note[]) : [];
  const now = Date.now();
  const updated = notes.map((n) => ({ ...n, pinned: true, updatedAt: now }));
  await AsyncStorage.setItem(KEYS.NOTES, JSON.stringify(updated));
  console.log(`Pinned ${updated.length} notes.`);
}

main().catch((e) => {
  console.error('Seed+pin failed', e);
  process.exit(1);
});
