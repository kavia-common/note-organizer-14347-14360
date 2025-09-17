# Dev Tools Hub

Optional Screens
- Theme demo: `ThemeDemoScreen`
- Bulk pin/unpin: `DevBulkPinScreen`
- JSON transfer (export/import): `DevTransferScreen`

Import via:
- `src/screens/variants-and-dev.index.ts`
- `src/screens/devtools.index.ts`
- `src/screens/themedemo.index.ts`

List Variants
- Pinned grouping: `NotesListScreen.withPinned`
- Folder count badge: `NotesListScreen.folderCount`
- Quick folder creation: `NotesListScreen.withQuickFolder`

Enable in App.tsx by swapping the import, or use `App.withPinnedList.tsx` during development.

Docs
- GETTING-STARTED.md — local run & theme
- ARCHITECTURE.md — data flow & structure
- FOLDERS.md — organizing notes
- ENABLE-VARIANTS.md — list variants
- VARIANTS-AND-DEV-TOOLS.md — variants & tools overview
