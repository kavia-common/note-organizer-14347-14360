import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  message: string;
  visible: boolean;
  duration?: number;
  onHide?: () => void;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function Toast({ message, visible, duration = 1800, onHide, style }: Props) {
  /** Minimal toast that animates in/out. */
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, { toValue: 1, duration: 180, useNativeDriver: true }).start(() => {
        const t = setTimeout(() => {
          Animated.timing(opacity, { toValue: 0, duration: 180, useNativeDriver: true }).start(() => onHide?.());
        }, duration);
        return () => clearTimeout(t);
      });
    }
  }, [visible, duration, onHide, opacity]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toast, { opacity }, style]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: Spacing.xl,
    right: Spacing.xl,
    bottom: 32,
    backgroundColor: Colors.text,
    borderRadius: Radii.lg,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  text: { color: '#fff', textAlign: 'center', fontWeight: '700' },
});
