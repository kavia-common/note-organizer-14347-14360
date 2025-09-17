# Settings Screen (Optional)

Provides a basic settings UI with:
- Toggle to show onboarding again on next launch
- Quick links to Help and About

To enable in App.tsx:
1) Import:
```
import { SettingsScreen } from './src/screens/settings.index';
```
2) Add a route (e.g., `{ name: 'settings' }`) to your Route union if desired, and switch-case to render it.
3) Add an entry point (e.g., a button in NotesListScreen AppBar's right actions) to navigate to settings.
