# Accessibility Checklist

General
- Text contrast meets WCAG AA (primary text #111827 on #ffffff/#f9fafb; muted #6B7280 for secondary).
- Touch targets ≥ 44x44 dp.
- Focus order is logical; actions are reachable with screen readers.

Components
- AppBar: actionable items have accessibilityRole="button", labels provided.
- FAB: accessibilityRole="button", label "Add note".
- NoteCard: title announced, actions (Pin/Delete) have labels.
- Folder pills: role button, selected state conveyed via styling; consider accessibilityState.selected.
- Inputs: placeholders and labels use clear language; errors are announced if any.

Motion
- Provide reduced-motion preference (see `src/utils/reducedMotion.ts`) and consider minimizing transitions when enabled.

Testing
- Use screen reader (TalkBack/VoiceOver) to verify labels and order.
- Verify large text scaling does not break layout.
