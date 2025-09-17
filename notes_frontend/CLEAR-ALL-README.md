# Clear All Data

Use this helper to clear local storage during development/testing.

Usage:
  import { clearAllData } from './src/dev/clear-all';
  await clearAllData();

Warning:
- This erases all notes and folders stored locally.
- Intended for development/testing only. Do not expose in production UI.
