# Gradients — Ocean Professional

Guidance for subtle gradients used in the app:

- Header/Card gradient (very subtle):
  - From: `#2563EB1A` (blue with 10% opacity)
  - To: `#f9fafb` (background)

Implementation:
- Gradients are tokenized in `src/theme/colors.ts` as `Gradients.header` and `Gradients.card`.
- In React Native, we keep usage subtle, primarily via shadows and light tints; a full gradient component (e.g., expo-linear-gradient) can be introduced later if needed.

Design Notes:
- Keep gradients minimal to retain the modern, minimalist aesthetic.
- Use rounded corners and subtle shadows for depth (Elevation tokens).
