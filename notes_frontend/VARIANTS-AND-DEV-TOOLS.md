# Variants & Dev Tools

List variants (swap in App.tsx import):
- Pinned grouping:
  import { NotesListScreenWithPinned as NotesListScreen } from './src/screens/pinned.index';

- Folder count badge:
  import { NotesListScreenWithFolderCount as NotesListScreen } from './src/screens/NotesListScreen.folderCount';

- Quick folder creation:
  import { NotesListScreenWithQuickFolder as NotesListScreen } from './src/screens/quick-folder.index';

Dev tools screens (import on demand from variants-and-dev.index):
- Theme demo:
  import { ThemeDemoScreen } from './src/screens/variants-and-dev.index';

- Bulk pin/unpin:
  import { DevBulkPinScreen } from './src/screens/variants-and-dev.index';
