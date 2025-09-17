# Note Colors (Optional)

Purpose:
- Add a subtle color accent to notes for quick visual grouping.

Palette (Ocean-friendly):
- ocean (blue-100), amber (amber-100), gray (gray-100), mint (green-100), rose (rose-100)

Usage (future):
- In the editor, allow choosing a color key and store it in `note.color`.
- In NoteCard, render a tiny ColorDot near the title and/or tint the card background lightly.

Helpers:
- src/utils/noteColors.ts — `colorKeyToHex(key)` and `NoteColors` map
- src/components/ColorDot.tsx — small circular indicator
