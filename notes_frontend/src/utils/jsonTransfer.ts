import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  NOTES: 'notes.data.v1',
  FOLDERS: 'folders.data.v1',
};

type ExportShape = {
  notes: unknown;
  folders: unknown;
  exportedAt: string;
};

// PUBLIC_INTERFACE
export async function exportAll(): Promise<string> {
  /** Export notes and folders as a JSON string (pretty-printed). */
  const [n, f] = await Promise.all([AsyncStorage.getItem(KEYS.NOTES), AsyncStorage.getItem(KEYS.FOLDERS)]);
  const payload: ExportShape = {
    notes: n ? JSON.parse(n) : [],
    folders: f ? JSON.parse(f) : [],
    exportedAt: new Date().toISOString(),
  };
  return JSON.stringify(payload, null, 2);
}

// PUBLIC_INTERFACE
export async function importAll(json: string): Promise<void> {
  /** Import notes and folders from a JSON string created via exportAll. */
  const data = JSON.parse(json) as Partial<ExportShape>;
  await AsyncStorage.setItem(KEYS.NOTES, JSON.stringify(data.notes ?? []));
  await AsyncStorage.setItem(KEYS.FOLDERS, JSON.stringify(data.folders ?? []));
}
