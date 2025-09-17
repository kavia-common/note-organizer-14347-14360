import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';

// PUBLIC_INTERFACE
export default function CreditsScreen({ onClose }: { onClose: () => void }) {
  /** Minimal credits screen acknowledging core libraries and theme. */
  return (
    <View style={styles.container}>
      <AppBar title="Credits" right={<Text style={styles.done} onPress={onClose}>Done</Text>} />
      <View style={styles.content}>
        <Text style={styles.title}>Thanks</Text>
        <View style={styles.card}>
          <Text style={styles.item} onPress={() => Linking.openURL('https://expo.dev')}>Expo</Text>
          <Text style={styles.item} onPress={() => Linking.openURL('https://reactnative.dev')}>React Native</Text>
          <Text style={styles.item} onPress={() => Linking.openURL('https://github.com/react-native-async-storage/async-storage')}>AsyncStorage</Text>
        </View>
        <Text style={styles.note}>
          Theme: Ocean Professional — blue & amber accents, subtle gradients, rounded corners, smooth transitions.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  done: { color: Colors.primary, fontWeight: '800' },
  title: { fontSize: 20, fontWeight: '800', color: Colors.text },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.lg,
    gap: 6,
  },
  item: { color: Colors.primary, fontWeight: '700' },
  note: { color: Colors.textMuted, marginTop: Spacing.lg },
});
