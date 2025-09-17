/**
 * Color tag utilities — future-friendly mapping for note color labels.
 */

export type ColorTag = 'default' | 'blue' | 'amber' | 'red' | 'green' | 'purple';

// PUBLIC_INTERFACE
export function tagToHex(tag: ColorTag | string | null | undefined): string {
  /** Map a tag to a hex color aligned with Ocean Professional palette. */
  switch ((tag || 'default').toLowerCase()) {
    case 'blue':
      return '#2563EB';
    case 'amber':
      return '#F59E0B';
    case 'red':
      return '#EF4444';
    case 'green':
      return '#10B981';
    case 'purple':
      return '#8B5CF6';
    case 'default':
    default:
      return '#E5E7EB';
  }
}
