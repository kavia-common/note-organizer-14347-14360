//
// PUBLIC_INTERFACE
export function formatDateTime(ts: number | Date): string {
  /** Format a timestamp or Date into a readable local string. */
  const d = ts instanceof Date ? ts : new Date(ts);
  try {
    return d.toLocaleString();
  } catch {
    return d.toISOString();
  }
}
