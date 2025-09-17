Apply guards from src/utils/typeGuards.ts in storage.safe.ts if you plan to extend schema validation. Current safe loaders already filter; this note documents the intended pattern:
import { isNote, isFolder } from '../utils/typeGuards';
