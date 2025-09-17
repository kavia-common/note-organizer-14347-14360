# Export Utility

You can export data to the clipboard using:
  import { exportNotesToClipboard } from './src/utils/export';
  import { useNotes } from './src/store/NotesContext';

  const { notes, folders } = useNotes();
  await exportNotesToClipboard({ notes, folders });

This copies a JSON string to your clipboard for quick backup or transfers.
