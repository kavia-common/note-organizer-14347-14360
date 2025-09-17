# Quality Checklist

Code
- [ ] Clear, readable, and follows project style
- [ ] Public interfaces documented with PUBLIC_INTERFACE and docstrings
- [ ] No unused imports or dead code
- [ ] Errors handled gracefully; edge cases considered

UI/UX
- [ ] Ocean Professional tokens used consistently
- [ ] Buttons and inputs have accessibility roles and labels
- [ ] Touch targets >= 44x44 dp
- [ ] Subtle transitions; avoid excessive motion

State & Data
- [ ] Context CRUD methods used for notes/folders
- [ ] Persistence via services/storage only
- [ ] Search and sort behave consistently with filtering rules

Testing
- [ ] Manual tests run through QA-TEST-PLAN.md
- [ ] Edge cases verified (see EDGE-CASES.md)

Docs
- [ ] Feature additions reflected in README/CHANGELOG
- [ ] Any new utilities documented under notes_frontend/
