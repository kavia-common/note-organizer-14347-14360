import { Note, Folder } from '../types';
import { saveNotes, saveFolders } from '../services/storage';

type ImportPayload = {
  notes?: Note[];
  folders?: Folder[];
};

// PUBLIC_INTERFACE
export async function importNotesFromString(json: string): Promise<{ notes: Note[]; folders: Folder[] }> {
  /**
   * Parses a JSON string and persists notes/folders.
   * Safely falls back to empty arrays on invalid input.
   */
  let data: ImportPayload = {};
  try {
    data = JSON.parse(json);
  } catch {
    data = {};
  }
  const notes = Array.isArray(data.notes) ? (data.notes as Note[]) : [];
  const folders = Array.isArray(data.folders) ? (data.folders as Folder[]) : [];
  await Promise.all([saveNotes(notes), saveFolders(folders)]);
  return { notes, folders };
}
