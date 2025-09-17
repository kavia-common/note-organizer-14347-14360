import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  onClose: () => void;
  onAbout: () => void;
  onBuildHelp: () => void;
};

// PUBLIC_INTERFACE
export default function HelpScreenWithBuildLink({ onClose, onAbout, onBuildHelp }: Props) {
  /** Help screen with links to About and in-app Build Help to guide CI setup. */
  return (
    <View style={styles.container}>
      <AppBar title="Help" right={<CloseBtn onPress={onClose} />} />
      <View style={styles.content}>
        <Text style={styles.title}>Getting Started</Text>
        <Text style={styles.text}>
          Create a note with the + button. Tap a note to view, edit, and pin. Organize with folders.
        </Text>
        <TouchableOpacity style={styles.cta} onPress={onAbout}>
          <Text style={styles.ctaText}>About this app</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cta, styles.linkCta]} onPress={() => Linking.openURL('https://docs.expo.dev')}>
          <Text style={[styles.ctaText, styles.linkText]}>Open Expo Docs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cta, styles.buildCta]} onPress={onBuildHelp}>
          <Text style={[styles.ctaText, styles.buildText]}>Build Help (Gradle Wrapper)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CloseBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.closeBtn}>
      <Text style={styles.closeText}>Done</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.xl, gap: Spacing.md },
  title: { color: Colors.text, fontSize: 18, fontWeight: '800' },
  text: { color: Colors.text, opacity: 0.8, lineHeight: 20 },
  cta: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.secondary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
  },
  ctaText: { color: Colors.text, fontWeight: '800' },
  linkCta: { backgroundColor: '#EFF6FF', borderWidth: 1, borderColor: '#DBEAFE' },
  linkText: { color: Colors.primary },
  buildCta: { backgroundColor: '#F3F4F6', borderWidth: 1, borderColor: '#E5E7EB' },
  buildText: { color: Colors.text },
  closeBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  closeText: { color: Colors.primary, fontWeight: '800' },
});
