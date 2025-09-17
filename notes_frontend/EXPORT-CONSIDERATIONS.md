# Export Considerations

- Markdown export: use `noteToMarkdown` (src/utils/markdown.ts)
- Filenames: sanitize note titles using `safeFilename` (src/utils/filename.ts)
- Batch export: consider zipping multiple notes; ensure platform permissions for filesystem APIs
- Sharing: on mobile, prefer Share API or Clipboard (expo-clipboard)
