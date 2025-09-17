import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'onboarding.completed.v1';

// PUBLIC_INTERFACE
export async function isOnboardingComplete(): Promise<boolean> {
  /** Returns true if onboarding was completed on this device. */
  try {
    const v = await AsyncStorage.getItem(KEY);
    return v === '1';
  } catch {
    return false;
  }
}

// PUBLIC_INTERFACE
export async function setOnboardingComplete(): Promise<void> {
  /** Marks onboarding as completed. */
  try {
    await AsyncStorage.setItem(KEY, '1');
  } catch {
    // ignore
  }
}
