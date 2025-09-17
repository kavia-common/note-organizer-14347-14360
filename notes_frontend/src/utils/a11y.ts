import { AccessibilityInfo } from 'react-native';

// PUBLIC_INTERFACE
export async function announce(message: string) {
  /** Announces a message for screen readers. */
  try {
    await AccessibilityInfo.announceForAccessibility(message);
  } catch {
    // no-op fallback
  }
}
