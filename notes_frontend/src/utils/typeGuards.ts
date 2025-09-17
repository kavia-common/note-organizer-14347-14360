import type { Note, Folder } from '../types';

function isString(v: unknown): v is string {
  return typeof v === 'string';
}

function isNumber(v: unknown): v is number {
  return typeof v === 'number' && Number.isFinite(v);
}

// PUBLIC_INTERFACE
export function isNote(v: unknown): v is Note {
  /** Runtime guard to validate a Note structure. */
  if (!v || typeof v !== 'object') return false;
  const n = v as any;
  return (
    isString(n.id) &&
    isNumber(n.createdAt) &&
    isNumber(n.updatedAt) &&
    typeof n.title === 'string' &&
    typeof n.content === 'string'
  );
}

// PUBLIC_INTERFACE
export function isFolder(v: unknown): v is Folder {
  /** Runtime guard to validate a Folder structure. */
  if (!v || typeof v !== 'object') return false;
  const f = v as any;
  return isString(f.id) && isString(f.name) && isNumber(f.createdAt) && isNumber(f.updatedAt);
}
