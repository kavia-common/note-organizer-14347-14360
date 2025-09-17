// PUBLIC_INTERFACE
export function slugify(input: string, fallback = 'note'): string {
  /** Create a URL-safe slug from a string, with ASCII normalization. */
  const base = (input || '').trim().toLowerCase();
  const normalized = base
    .normalize('NFKD')
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-_\.]+|[-_\.]+$/g, '');
  return normalized || fallback;
}
