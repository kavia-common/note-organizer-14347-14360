import * as Clipboard from 'expo-clipboard';
import { Note, Folder } from '../types';

// PUBLIC_INTERFACE
export async function exportNotesToClipboard(data: { notes: Note[]; folders: Folder[] }) {
  /** Copies a compact JSON export of notes+folders to the system clipboard. */
  try {
    const payload = JSON.stringify(data, null, 2);
    await Clipboard.setStringAsync(payload);
    return true;
  } catch {
    return false;
  }
}
