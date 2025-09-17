import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing } from '../theme/colors';

type Props = {
  text: string;
  style?: ViewStyle;
};

// PUBLIC_INTERFACE
export default function SubtitleLine({ text, style }: Props) {
  /** Small, muted subtitle line to sit under titles in headers or sections. */
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 2 },
  text: { color: Colors.textMuted, fontSize: 12, lineHeight: 16, marginLeft: Spacing.xs },
});
