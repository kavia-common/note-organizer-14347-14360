# Navigation Notes

This project uses a lightweight in-app router (state in App.tsx). To try list variants:

- Default:
  import NotesListScreen from './src/screens/NotesListScreen';

- Pinned grouping:
  import { NotesListScreenWithPinned as NotesListScreen } from './src/screens/pinned.index';

- Quick folder creation:
  import { NotesListScreenWithQuickFolder as NotesListScreen } from './src/screens/quick-folder.index';

- Folder count badge:
  import { NotesListScreenWithFolderCount as NotesListScreen } from './src/screens/NotesListScreen.folderCount';

Switch the import then rebuild/start.
