# Testing Strategy

Scope
- This app uses local persistence only and focuses on UI/UX correctness.

Approach
- Unit tests (future): utils (filtering, tags, date, i18n, templates)
- Component tests (future): snapshot and interaction for NoteCard, AppBar, ConfirmDialog
- Manual tests: core flows and edge cases (see QA-TEST-PLAN.md, EDGE-CASES.md)

Environments
- Expo Go (devices)
- Android emulator
- Web (optional)

Data
- Use seed utilities for consistent test data (src/utils/seed.ts, src/dev/seed-once.ts)
- Export/import helpers for reproducible states

CI
- Prefer native build via preflight script or use web export fallback
