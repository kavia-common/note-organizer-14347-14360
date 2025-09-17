# Note Templates

Use templates to quickly scaffold common notes.

Examples:
- Meeting
- Todo
- Journal
- Blank

How to use (developer hint):
  import { getTemplate } from './src/utils/templates';
  const tpl = getTemplate('meeting'); // { title, content }
  // pass into createNote({ title: tpl.title, content: tpl.content })

Consider adding a small picker in the editor to choose a template when creating a note.
