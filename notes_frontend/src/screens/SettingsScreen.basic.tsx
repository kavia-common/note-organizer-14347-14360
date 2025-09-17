import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import Toggle from '../components/Toggle';

type Props = { onBack: () => void };

// PUBLIC_INTERFACE
export default function SettingsScreenBasic({ onBack }: Props) {
  /** Minimal settings screen placeholder with a theme-aligned toggle. */
  const [useHints, setUseHints] = useState(true);
  return (
    <View style={styles.container}>
      <AppBar title="Settings" right={<Text onPress={onBack} style={styles.done}>Done</Text>} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Hints</Text>
          <Toggle value={useHints} onValueChange={setUseHints} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.lg },
  row: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: { color: Colors.text, fontWeight: '700' },
  done: { color: Colors.primary, fontWeight: '800' },
});
