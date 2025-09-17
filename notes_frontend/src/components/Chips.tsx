import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

export type ChipItem = {
  key: string;
  label: string;
  active?: boolean;
};

type Props = {
  items: ChipItem[];
  onToggle?: (key: string) => void;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function Chips({ items, onToggle, style }: Props) {
  /** Renders a row of selectable chips. */
  return (
    <View style={[styles.row, style]}>
      {items.map((it) => {
        const active = !!it.active;
        return (
          <TouchableOpacity
            key={it.key}
            onPress={() => onToggle?.(it.key)}
            style={[styles.chip, active ? styles.active : undefined]}
          >
            <Text style={[styles.text, active ? styles.activeText : undefined]}>{it.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  chip: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.xl,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  active: { backgroundColor: '#DBEAFE', borderColor: Colors.primary },
  text: { color: Colors.textMuted, fontWeight: '700' },
  activeText: { color: Colors.primary },
});
