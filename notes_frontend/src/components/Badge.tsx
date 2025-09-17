import React from 'react';
import { Text, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Tone = 'info' | 'warn';

type Props = {
  label: string;
  tone?: Tone;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function Badge({ label, tone = 'info', style }: Props) {
  /** Small pill badge for inline statuses. */
  const isWarn = tone === 'warn';
  return (
    <View style={[styles.base, isWarn ? styles.warn : styles.info, style]}>
      <Text style={[styles.text, isWarn ? styles.warnText : styles.infoText]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: Spacing.sm + 4,
    paddingVertical: 4,
    borderRadius: Radii.xl,
    borderWidth: 1,
  },
  info: {
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
  },
  infoText: {
    color: Colors.primary,
    fontWeight: '700',
  },
  warn: {
    backgroundColor: '#FEF3C7',
    borderColor: '#FDE68A',
  },
  warnText: {
    color: '#B45309',
    fontWeight: '700',
  },
});
