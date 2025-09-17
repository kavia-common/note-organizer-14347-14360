# Quick Folder Variant

This variant of the Notes list screen includes an inline "New Folder" quick action so users can create folders right from the list.

File:
- `src/screens/NotesListScreen.withQuickFolder.tsx`

Export:
- `src/screens/quick-folder.index.ts` (NotesListScreenWithQuickFolder)

How to enable in App.tsx:
1) Import the variant:
```
import { NotesListScreenWithQuickFolder as NotesListScreen } from './src/screens/quick-folder.index';
```
2) Use it in the 'home' route where NotesListScreen is rendered.

This keeps the default screen lean, while allowing a more proactive folder creation flow when desired.
