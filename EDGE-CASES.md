# Edge Cases QA Checklist

Notes
- [ ] Empty title and empty content note (should show defaults and allow save)
- [ ] Very long title (wrap/truncate gracefully in list and viewer)
- [ ] Very long content (list truncates; viewer scrolls)
- [ ] Pinned + recent updates ordering behaves correctly
- [ ] Delete confirmation prevents accidental removals

Folders
- [ ] Create folder with duplicate name (allowed, behaves as separate id)
- [ ] Delete folder with notes (notes retain and folderId becomes null)
- [ ] Switching filters while editing a note does not crash

Search & Sort
- [ ] Query with mixed case matches titles and content
- [ ] Sort by Title ignores case; handles empty titles
- [ ] Sort by Created/Updated shows pinned first then recency

Persistence
- [ ] App relaunch preserves notes and folders
- [ ] Export -> Clear All -> Import restores state

Accessibility
- [ ] Buttons have accessibilityRole and labels
- [ ] Large font sizes do not clip critical actions
- [ ] Screen reader reads titles and actions in sane order
