# Slugs

`slugify(text: string, fallback?: string)` converts titles into URL-safe slugs.

Use cases:
- Future web export (e.g., linking to a note by slug)
- Deep-linking or shareable identifiers
- Complement to `safeFilename` (which targets filesystem-safe names)

Differences:
- `slugify` targets URL safety and readability
- `safeFilename` targets filesystem naming
