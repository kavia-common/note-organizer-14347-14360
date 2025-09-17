# Screen Enhancements

This app includes optional enhanced variants of some screens. They are not enabled by default to keep the base experience minimal.

- FolderManagerScreen.enhanced.tsx
  - Adds note counts per folder and delete confirmation.
  - To enable: import and use `FolderManagerScreenEnhanced` instead of `FolderManagerScreen`.

Example change in `App.tsx`:
```
import { FolderManagerScreenEnhanced as FolderManagerScreen } from './src/screens/FolderManagerScreen.enhanced.index';
```
