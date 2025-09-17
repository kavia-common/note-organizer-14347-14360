import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, ViewStyle } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  visible: boolean;
  message: string;
  style?: ViewStyle;
  duration?: number; // ms
  onHide?: () => void;
};

// PUBLIC_INTERFACE
export default function Snackbar({ visible, message, style, duration = 1600, onHide }: Props) {
  /** A simple animated snackbar that shows at the bottom of the screen. */
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 180, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration: 180, useNativeDriver: true }),
      ]).start();

      const t = setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity, { toValue: 0, duration: 180, useNativeDriver: true }),
          Animated.timing(translateY, { toValue: 20, duration: 180, useNativeDriver: true }),
        ]).start(() => onHide && onHide());
      }, duration);

      return () => clearTimeout(t);
    }
  }, [visible, duration, onHide, opacity, translateY]);

  if (!visible) return null;

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.container,
        {
          opacity,
          transform: [{ translateY }],
        },
        style,
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: Spacing.xl,
    right: Spacing.xl,
    bottom: 24,
    backgroundColor: Colors.text,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
  },
  text: { color: '#fff', fontWeight: '700', textAlign: 'center' },
});
