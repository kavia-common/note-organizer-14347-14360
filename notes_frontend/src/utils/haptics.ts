import { FEATURES } from '../constants';

// PUBLIC_INTERFACE
export function tapLight(): void {
  /** Trigger a light haptic tap if enabled via features. */
  if (!FEATURES.haptics) return;
  // To enable: install expo-haptics and uncomment below.
  // import * as Haptics from 'expo-haptics';
  // void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}
