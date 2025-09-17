import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  onClose: () => void;
  onAbout: () => void;
  onCredits: () => void;
  onWebHelp: () => void;
};

// PUBLIC_INTERFACE
export default function HelpScreen({ onClose, onAbout, onCredits, onWebHelp }: Props) {
  /** Basic Help screen with links to About, Credits, and Web Help. */
  return (
    <View style={styles.container}>
      <AppBar title="Help" right={<Text style={styles.done} onPress={onClose}>Done</Text>} />
      <View style={styles.content}>
        <Text style={styles.title}>Getting Started</Text>
        <Text style={styles.text}>Use the + button to create notes. Tap a note to view, edit, and pin.</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.cta} onPress={onAbout}>
            <Text style={styles.ctaText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cta} onPress={onCredits}>
            <Text style={styles.ctaText}>Credits</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cta} onPress={onWebHelp}>
            <Text style={styles.ctaText}>Web Help</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>
          Learn more about Expo at{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://docs.expo.dev')}>
            docs.expo.dev
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  done: { color: Colors.primary, fontWeight: '800' },
  title: { fontSize: 18, fontWeight: '800', color: Colors.text },
  text: { color: Colors.text, opacity: 0.85 },
  row: { flexDirection: 'row', gap: Spacing.sm },
  cta: {
    backgroundColor: '#EFF6FF',
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#DBEAFE',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  ctaText: { color: Colors.primary, fontWeight: '800' },
  link: { color: Colors.primary, fontWeight: '800' },
});
