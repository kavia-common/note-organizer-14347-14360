# Tags (Optional)

Objective:
- Allow lightweight tagging of notes for ad-hoc organization.

Suggested shape:
- Extend Note with: `tags?: string[]`
- Normalize tags to lowercase, hyphenated strings (e.g., "Project A" -> "project-a")

Helpers:
- src/utils/tags.ts: `normalizeTag`, `addTag`, `removeTag`, `hasTag`

UI (future):
- Chip input in editor to add/remove tags
- Quick filters: show popular tags as pills alongside folders
