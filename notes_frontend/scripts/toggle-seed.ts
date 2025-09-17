/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  NOTES: 'notes.data.v1',
  FOLDERS: 'folders.data.v1',
};

async function main() {
  const current = await AsyncStorage.getItem(KEYS.NOTES);
  if (current && current !== '[]') {
    await AsyncStorage.setItem(KEYS.NOTES, '[]');
    await AsyncStorage.setItem(KEYS.FOLDERS, '[]');
    console.log('Cleared notes and folders to show empty state.');
  } else {
    const now = Date.now();
    const folders = [
      { id: 'work', name: 'Work', color: null, createdAt: now, updatedAt: now },
      { id: 'life', name: 'Personal', color: null, createdAt: now, updatedAt: now },
    ];
    const notes = [
      {
        id: 'welcome',
        title: 'Welcome to Ocean Notes',
        content: 'Create, edit, pin, search, and organize notes.',
        folderId: 'work',
        createdAt: now - 10000,
        updatedAt: now - 5000,
        pinned: true,
        color: null,
      },
      {
        id: 'todo',
        title: 'Groceries',
        content: '- Milk\n- Eggs\n- Coffee',
        folderId: 'life',
        createdAt: now - 20000,
        updatedAt: now - 15000,
        pinned: false,
        color: null,
      },
    ];
    await AsyncStorage.setItem(KEYS.FOLDERS, JSON.stringify(folders));
    await AsyncStorage.setItem(KEYS.NOTES, JSON.stringify(notes));
    console.log('Seeded demo notes and folders.');
  }
}

main().catch((e) => {
  console.error('toggle-seed failed', e);
  process.exit(1);
});
