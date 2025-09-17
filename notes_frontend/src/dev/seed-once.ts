import { seedDemoData } from '../utils/seed';

// PUBLIC_INTERFACE
export async function seedOnce() {
  /** Seeds demo data if storage is empty. Safe to call on app start in dev. */
  try {
    await seedDemoData();
  } catch {
    // ignore in production or restricted environments
  }
}

/**
 * Usage (optional):
 * In App.tsx, inside NotesProvider effect or early boot:
 *   import { seedOnce } from './src/dev/seed-once';
 *   useEffect(() => { seedOnce(); }, []);
 */
