import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  onContinue: () => void;
};

// PUBLIC_INTERFACE
export default function OnboardingScreen({ onContinue }: Props) {
  /** First-run onboarding with Ocean Professional branding and quick tips. */
  return (
    <View style={styles.container}>
      <AppBar title="Ocean Notes" />
      <View style={styles.hero}>
        <Text style={styles.wave}>🌊</Text>
        <Text style={styles.title}>Welcome to Ocean Notes</Text>
        <Text style={styles.subtitle}>Write. Organize. Focus.</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.tip}>• Tap + to create a new note</Text>
        <Text style={styles.tip}>• Use folders to organize</Text>
        <Text style={styles.tip}>• Pin important notes</Text>
        <TouchableOpacity onPress={onContinue} style={styles.cta} accessibilityRole="button" accessibilityLabel="Get started">
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  hero: {
    alignItems: 'center',
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  wave: { fontSize: 48 },
  title: { fontSize: 22, fontWeight: '800', color: Colors.text, marginTop: Spacing.sm },
  subtitle: { color: Colors.textMuted, marginTop: 4 },
  content: { padding: Spacing.xl, gap: Spacing.md },
  tip: { color: Colors.text },
  cta: {
    marginTop: Spacing.xl,
    alignSelf: 'flex-start',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
  },
  ctaText: { color: '#fff', fontWeight: '800' },
});
