import AsyncStorage from '@react-native-async-storage/async-storage';

// PUBLIC_INTERFACE
export async function clearAllData(): Promise<void> {
  /** Clears all local AsyncStorage data for this app. Use with caution. */
  try {
    await AsyncStorage.clear();
  } catch {
    // ignore
  }
}
