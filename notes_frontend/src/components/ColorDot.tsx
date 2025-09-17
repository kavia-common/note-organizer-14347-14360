import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Radii } from '../theme/colors';

type Props = {
  size?: number;
  color?: string | null;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function ColorDot({ size = 12, color = null, style }: Props) {
  /** Small circular color indicator. */
  return <View style={[styles.dot, { width: size, height: size, borderRadius: size / 2, backgroundColor: color || 'transparent' }, style]} />;
}

const styles = StyleSheet.create({
  dot: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: Radii.round,
  },
});
