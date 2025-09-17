# QA Test Plan

Environments
- Expo Go (iOS/Android)
- Android emulator (Debug)
- Web (optional): expo start --web

Core Flows
1) Create Note
   - Tap +, enter title and content, save
   - Verify note appears at top with Recent sort
2) Edit Note
   - Open note, edit content, save
   - Verify updated timestamp reflects change
3) Pin/Unpin
   - Pin a note; verify it stays at top even after others update
   - Unpin; verify order reverts by recency
4) Delete Note
   - Tap Delete on card, confirm in dialog
   - Verify note removed from list
5) Folders
   - Add folder, rename, delete
   - Assign a note to a folder in editor
   - Filter by folder via pills
6) Search & Sort
   - Search by title and content (case-insensitive)
   - Switch sort modes: Recent, Created, Title
7) Persistence
   - Close app; reopen and verify data persists
8) Export/Import (optional)
   - Export to clipboard; clear all; import JSON; verify data restored

Accessibility
- Buttons have labels and roles
- Large fonts do not hide primary actions
- Screen reader announces titles and actions in a sensible order

Performance
- Scroll through long lists smoothly
- Typing in search is responsive
