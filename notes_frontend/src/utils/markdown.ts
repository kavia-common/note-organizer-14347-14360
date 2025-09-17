/**
 * Utilities to convert notes to Markdown-friendly strings.
 */

// PUBLIC_INTERFACE
export function noteToMarkdown({
  title,
  content,
  updatedAt,
}: {
  title: string;
  content: string;
  updatedAt: number | Date;
}): string {
  /** Convert a note to a Markdown document with title and timestamp. */
  const ts = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
  const header = `# ${title || 'Untitled'}\n\n_Last updated: ${ts.toLocaleString()}_\n\n`;
  return header + (content || '').trim() + '\n';
}
