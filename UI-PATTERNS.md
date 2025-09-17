# UI Patterns

Lists
- Use FlatList for notes; show NoteCard with title, preview (2 lines), pin/delete actions
- EmptyState when there are no items

Headers
- AppBar with title, optional right actions (ShortcutButtons, DevMenu) and Add (+)
- SubtitleLine for muted context lines under titles if needed

Actions
- Primary (blue): Save, Add
- Accent (amber): Highlights or secondary emphasis sparingly
- Destructive: Delete in red, requires confirmation dialog (ConfirmDialog)

Chips/Pills
- FolderPill to filter; consider Chips for tags in the future
- Keep chip labels short and legible

Motion
- Subtle transitions only (see ANIMATIONS.md)
- Avoid heavy animations; respect reduced motion in future
