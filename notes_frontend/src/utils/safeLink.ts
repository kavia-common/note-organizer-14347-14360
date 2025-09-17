import { Alert, Linking } from 'react-native';

// PUBLIC_INTERFACE
export async function openExternal(url: string) {
  /** Safely attempt to open an external URL; alerts on failure. */
  try {
    const can = await Linking.canOpenURL(url);
    if (!can) {
      Alert.alert('Cannot open link', url);
      return;
    }
    await Linking.openURL(url);
  } catch (e) {
    Alert.alert('Failed to open link', String(e));
  }
}
