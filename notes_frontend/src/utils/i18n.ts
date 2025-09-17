type Dict = Record<string, string>;

const en: Dict = {
  'app.title': 'Notes',
  'actions.add': 'Add',
  'actions.edit': 'Edit',
  'actions.delete': 'Delete',
  'actions.pin': 'Pin',
  'actions.unpin': 'Unpin',
  'actions.save': 'Save',
  'actions.back': 'Back',
  'empty.title': 'No notes yet',
  'empty.caption': 'Tap the + button to create your first note.',
};

// PUBLIC_INTERFACE
export function t(key: string, dict: Dict = en): string {
  /** Minimal translation helper with English fallback. */
  return dict[key] ?? key;
}
