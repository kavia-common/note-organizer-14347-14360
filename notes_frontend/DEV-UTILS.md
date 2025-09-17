# Developer Utilities

Screens (import as needed, e.g. from `src/screens/dev.index.ts`):
- DevBulkPinScreen — pin/unpin all notes quickly from the UI
- DevTransferScreen — export/import notes+folders JSON
- DevMarkdownPreviewScreen — preview/copy a note as Markdown

Usage example:
```
import { DevBulkPinScreen } from './src/screens/dev.index';
```

Notes:
- These screens are optional and intended for development/demo. They are not wired into App.tsx by default.
- The utilities use the same storage keys and NotesProvider state as the main app.
