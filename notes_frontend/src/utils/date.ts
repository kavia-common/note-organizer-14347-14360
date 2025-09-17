 // PUBLIC_INTERFACE
export function formatDateTime(ts: number): string {
  /** Locale-friendly date time display with fallback. */
  try {
    return new Date(ts).toLocaleString();
  } catch {
    return `${ts}`;
  }
}
