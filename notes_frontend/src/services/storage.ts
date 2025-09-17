import AsyncStorage from '@react-native-async-storage/async-storage';
import { Note, Folder } from '../types';

const KEYS = {
  NOTES: 'notes.data.v1',
  FOLDERS: 'folders.data.v1',
};

/**
 * Read a JSON value from AsyncStorage with a fallback if parsing fails or the key is missing.
 */
async function getJSON<T>(key: string, fallback: T): Promise<T> {
  try {
    const v = await AsyncStorage.getItem(key);
    if (!v) return fallback;
    return JSON.parse(v) as T;
  } catch {
    return fallback;
  }
}

/**
 * Persist a JSON-serializable value into AsyncStorage.
 */
async function setJSON<T>(key: string, value: T): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

// PUBLIC_INTERFACE
export async function loadNotes(): Promise<Note[]> {
  /**
   * Load all notes from local storage.
   * Returns:
   *  - Promise<Note[]>: An array of notes or an empty array if none exist.
   */
  return getJSON<Note[]>(KEYS.NOTES, []);
}

// PUBLIC_INTERFACE
export async function saveNotes(notes: Note[]): Promise<void> {
  /**
   * Save the provided notes array to local storage.
   * Params:
   *  - notes: Note[] — The list of notes to persist.
   */
  return setJSON(KEYS.NOTES, notes);
}

// PUBLIC_INTERFACE
export async function loadFolders(): Promise<Folder[]> {
  /**
   * Load all folders from local storage.
   * Returns:
   *  - Promise<Folder[]>: An array of folders or an empty array if none exist.
   */
  return getJSON<Folder[]>(KEYS.FOLDERS, []);
}

// PUBLIC_INTERFACE
export async function saveFolders(folders: Folder[]): Promise<void> {
  /**
   * Save the provided folders array to local storage.
   * Params:
   *  - folders: Folder[] — The list of folders to persist.
   */
  return setJSON(KEYS.FOLDERS, folders);
}
