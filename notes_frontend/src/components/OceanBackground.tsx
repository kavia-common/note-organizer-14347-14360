import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../theme/colors';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

/**
 PUBLIC_INTERFACE
 A subtle gradient-like background using layered views (dependency-free).
 This avoids external gradient packages while giving Ocean depth.
*/
export default function OceanBackground({ children, style }: Props) {
  return (
    <View style={[styles.root, style]}>
      <View style={styles.layerBlue} />
      <View style={styles.layerSoft} />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  layerBlue: {
    position: 'absolute',
    top: -120,
    left: -80,
    right: -80,
    height: 240,
    backgroundColor: '#2563EB1A', // blue-600 with low alpha
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
  },
  layerSoft: {
    position: 'absolute',
    top: 120,
    left: -40,
    right: -40,
    height: 160,
    backgroundColor: '#D1D5DB26', // gray with alpha
    borderRadius: 120,
  },
  content: { flex: 1 },
});
