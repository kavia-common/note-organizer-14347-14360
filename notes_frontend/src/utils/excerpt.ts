// PUBLIC_INTERFACE
export function makeExcerpt(text: string, max = 140): string {
  /** Returns a trimmed, single-line excerpt up to 'max' characters. */
  const oneLine = (text || '').replace(/\s+/g, ' ').trim();
  if (oneLine.length <= max) return oneLine;
  return oneLine.slice(0, Math.max(0, max - 1)).trimEnd() + '…';
}
