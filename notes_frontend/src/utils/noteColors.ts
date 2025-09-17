export const NoteColors = {
  default: null as string | null,
  ocean: '#DBEAFE', // blue-100
  amber: '#FEF3C7', // amber-100
  gray: '#F3F4F6',  // gray-100
  mint: '#DCFCE7',  // green-100
  rose: '#FFE4E6',  // rose-100
};

export type NoteColorKey = keyof typeof NoteColors;

// PUBLIC_INTERFACE
export function colorKeyToHex(key: NoteColorKey): string | null {
  /** Returns a hex color for a given note color key or null for default. */
  return NoteColors[key] ?? null;
}
