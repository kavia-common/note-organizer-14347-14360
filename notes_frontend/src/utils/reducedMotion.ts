import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'prefs.reducedMotion.v1';

// PUBLIC_INTERFACE
export async function setReducedMotion(enabled: boolean) {
  /** Persist reduced motion preference. */
  await AsyncStorage.setItem(KEY, JSON.stringify(!!enabled));
}

// PUBLIC_INTERFACE
export async function getReducedMotion(): Promise<boolean> {
  /** Read reduced motion preference (default false). */
  try {
    const v = await AsyncStorage.getItem(KEY);
    if (!v) return false;
    return JSON.parse(v) as boolean;
  } catch {
    return false;
  }
}
