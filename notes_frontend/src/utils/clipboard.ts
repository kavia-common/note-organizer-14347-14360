import * as Clipboard from 'expo-clipboard';

// PUBLIC_INTERFACE
export async function copyToClipboard(text: string): Promise<void> {
  /** Copy text to the system clipboard. */
  try {
    await Clipboard.setStringAsync(text);
  } catch {
    // no-op fallback
  }
}
