import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Item = {
  key: string;
  label: string;
  onPress: () => void;
};

type Props = {
  items: Item[];
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function ShortcutButtons({ items, style }: Props) {
  /** Lightweight row of small header buttons for secondary actions. */
  return (
    <View style={[styles.row, style]}>
      {items.map((it) => (
        <TouchableOpacity key={it.key} onPress={it.onPress} style={styles.btn} accessibilityRole="button" accessibilityLabel={it.label}>
          <Text style={styles.text}>{it.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm },
  btn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
    borderWidth: 1,
  },
  text: { color: Colors.primary, fontWeight: '800' },
});
