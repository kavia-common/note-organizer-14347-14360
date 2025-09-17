// PUBLIC_INTERFACE
export function safeFilename(input: string, fallback = 'untitled'): string {
  /** Convert a string into a safe filename: lowercase, spaces to dashes, remove unsafe chars. */
  const base = (input || '').trim().toLowerCase();
  const cleaned = base
    .normalize('NFKD')
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-_\.]+|[-_\.]+$/g, '');
  return cleaned || fallback;
}
