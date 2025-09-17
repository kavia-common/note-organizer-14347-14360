import { Note } from '../types';

export type TemplateKey = 'blank' | 'meeting' | 'todo' | 'journal';

// PUBLIC_INTERFACE
export function getTemplate(key: TemplateKey): Pick<Note, 'title' | 'content'> {
  /** Returns starter title/content for a given template key. */
  switch (key) {
    case 'meeting':
      return {
        title: 'Meeting Notes',
        content: [
          '# Meeting',
          '',
          '- Date:',
          '- Attendees:',
          '',
          '## Agenda',
          '- ',
          '',
          '## Notes',
          '- ',
          '',
          '## Action Items',
          '- [ ] Owner — Task',
        ].join('\n'),
      };
    case 'todo':
      return {
        title: 'Todo',
        content: ['# Todo', '', '- [ ] ', '- [ ] ', '- [ ] '].join('\n'),
      };
    case 'journal':
      return {
        title: 'Journal',
        content: ['# Journal', '', 'Mood:', '', 'Highlights:', '', 'Notes:'].join('\n'),
      };
    case 'blank':
    default:
      return { title: '', content: '' };
  }
}
