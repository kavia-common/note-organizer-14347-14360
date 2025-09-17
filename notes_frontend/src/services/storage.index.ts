export { loadNotes, saveNotes, loadFolders, saveFolders } from './storage';

// PUBLIC_INTERFACE
export type StorageEntities = 'notes' | 'folders';

/**
 * PUBLIC_INTERFACE
 * Minimal runtime validators to prevent corrupted storage from crashing the app.
 */
export function isRecordLike(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}
