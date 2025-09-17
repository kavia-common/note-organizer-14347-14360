# Troubleshooting (App)

Notes not appearing
- Pull to refresh the list or reopen the app.
- Verify you are not filtering by a folder with no notes.

Edits not saving
- Ensure you tapped Save in the editor.
- If the app was killed abruptly, reopen and re-save changes.

Search not finding results
- Check the selected folder; clear the folder filter (tap "All").
- Clear the search query to reset results.

Accidental delete
- Deletion shows a confirmation dialog; confirm only if intended.
- If you exported recently, restore via Import.

Slow performance
- Large lists can be filtered with folders first, then search.
- Close other heavy apps on low-end devices.

Export/Import issues
- Export: Check clipboard contents after copying.
- Import: Ensure JSON structure includes "notes" and/or "folders" arrays.

If issues persist
- Clear all local data (dev/testing only) and re-import from a backup JSON.
- Contact project maintainers (see SUPPORT.md).
