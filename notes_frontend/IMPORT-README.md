# Import Utility

Paste JSON (e.g., from EXPORT-README.md) and import it:

Example:
  import { importNotesFromString } from './src/utils/import';

  const json = '{ "notes": [...], "folders": [...] }';
  const { notes, folders } = await importNotesFromString(json);

Notes:
- The import function overwrites storage with provided arrays.
- Use with caution. Consider a backup via export before importing.
