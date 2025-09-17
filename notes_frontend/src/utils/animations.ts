import { Animated } from 'react-native';

// PUBLIC_INTERFACE
export function fadeIn(duration = 200) {
  /** Returns { value, start } to perform a simple fade-in animation. */
  const value = new Animated.Value(0);
  const start = () => Animated.timing(value, { toValue: 1, duration, useNativeDriver: true }).start();
  return { value, start };
}

// PUBLIC_INTERFACE
export function slideUp(duration = 220, distance = 12) {
  /** Returns { value, start, style } to perform a slide-up + fade-in combo. */
  const value = new Animated.Value(0);
  const start = () =>
    Animated.timing(value, { toValue: 1, duration, useNativeDriver: true }).start();
  const style = {
    opacity: value,
    transform: [
      {
        translateY: value.interpolate({ inputRange: [0, 1], outputRange: [distance, 0] }),
      },
    ],
  };
  return { value, start, style };
}
