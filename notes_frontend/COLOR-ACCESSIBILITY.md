# Color Accessibility

Guidelines
- Aim for WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text.
- Ocean Professional defaults:
  - Text (#111827) on Surface (#ffffff) — passes AA
  - Muted text (#6B7280) for secondary content on light backgrounds
  - Primary (#2563EB) for buttons with white text
  - Secondary (#F59E0B) for accents; ensure legible text (prefer dark text)

Helpers
- src/utils/contrast.ts — `contrastRatio(fg, bg)` and `meetsWcagAA(fg, bg, largeText?)`
- Verify custom colors (e.g., note color tints) before adopting

Tips
- Avoid using color alone to convey state; pair with text or icons
- Keep background tints subtle to maintain readability
