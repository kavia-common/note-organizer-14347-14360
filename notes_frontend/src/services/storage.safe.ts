import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Note, Folder } from '../types';

const KEYS = {
  NOTES: 'notes.data.v1',
  FOLDERS: 'folders.data.v1',
};

function isString(v: unknown): v is string {
  return typeof v === 'string';
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!isString(raw)) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return parsed as T;
  } catch {
    return fallback;
  }
}

function isNote(v: any): v is Note {
  return v && isString(v.id) && typeof v.createdAt === 'number' && typeof v.updatedAt === 'number';
}

function isFolder(v: any): v is Folder {
  return v && isString(v.id) && isString(v.name) && typeof v.createdAt === 'number' && typeof v.updatedAt === 'number';
}

// PUBLIC_INTERFACE
export async function loadNotesSafe(): Promise<Note[]> {
  /** Load notes with validation; drops malformed entries. */
  const raw = await AsyncStorage.getItem(KEYS.NOTES);
  const list = safeParse<any[]>(raw, []);
  return Array.isArray(list) ? list.filter(isNote) : [];
}

// PUBLIC_INTERFACE
export async function loadFoldersSafe(): Promise<Folder[]> {
  /** Load folders with validation; drops malformed entries. */
  const raw = await AsyncStorage.getItem(KEYS.FOLDERS);
  const list = safeParse<any[]>(raw, []);
  return Array.isArray(list) ? list.filter(isFolder) : [];
}
