import { Share } from 'react-native';
import { Note, Folder } from '../types';

// PUBLIC_INTERFACE
export async function shareNotes(data: { notes: Note[]; folders: Folder[] }) {
  /** Shares a compact JSON export via the native Share dialog. */
  try {
    const payload = JSON.stringify(data, null, 2);
    await Share.share({
      title: 'Ocean Notes Export',
      message: payload,
    });
    return true;
  } catch {
    return false;
  }
}
