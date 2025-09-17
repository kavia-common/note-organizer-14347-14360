export type Tag = string;

// PUBLIC_INTERFACE
export function normalizeTag(input: string): Tag {
  /** Normalizes a tag string: trims, lowercases, replaces spaces with hyphens. */
  return (input || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .slice(0, 32);
}

// PUBLIC_INTERFACE
export function addTag(tags: Tag[], tag: string): Tag[] {
  /** Adds a normalized tag if not present. */
  const t = normalizeTag(tag);
  if (!t) return tags;
  return Array.from(new Set([...tags, t]));
}

// PUBLIC_INTERFACE
export function removeTag(tags: Tag[], tag: string): Tag[] {
  /** Removes a tag by normalized key. */
  const key = normalizeTag(tag);
  return tags.filter((t) => t !== key);
}

// PUBLIC_INTERFACE
export function hasTag(tags: Tag[], tag: string): boolean {
  /** Checks if a tag exists (normalized). */
  const key = normalizeTag(tag);
  return tags.includes(key);
}
