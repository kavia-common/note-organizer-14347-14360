function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = hex.replace('#', '');
  const r = parseInt(m.substring(0, 2), 16);
  const g = parseInt(m.substring(2, 4), 16);
  const b = parseInt(m.substring(4, 6), 16);
  return { r, g, b };
}

function luminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const [R, G, B] = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

// PUBLIC_INTERFACE
export function contrastRatio(hex1: string, hex2: string): number {
  /** Returns contrast ratio between two hex colors (e.g., #111827 vs #ffffff). */
  const L1 = luminance(hex1);
  const L2 = luminance(hex2);
  const [lighter, darker] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (lighter + 0.05) / (darker + 0.05);
}

// PUBLIC_INTERFACE
export function meetsWcagAA(hexFg: string, hexBg: string, largeText = false): boolean {
  /** Checks if colors meet WCAG AA contrast (>= 4.5:1 normal, >= 3:1 large). */
  const ratio = contrastRatio(hexFg, hexBg);
  return ratio >= (largeText ? 3.0 : 4.5);
}
