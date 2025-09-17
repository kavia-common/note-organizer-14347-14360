import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';

// PUBLIC_INTERFACE
export default function WebHelpScreen({ onClose }: { onClose: () => void }) {
  /** Guidance about using the web export and CI bootstrap scripts. */
  return (
    <View style={styles.container}>
      <AppBar title="Web Help" right={<Text style={styles.done} onPress={onClose}>Done</Text>} />
      <View style={styles.content}>
        <Text style={styles.title}>Alternate Web Build</Text>
        <Text style={styles.text}>
          If native Android builds are unavailable in your environment, you can export the Expo app to the web:
        </Text>
        <View style={styles.card}>
          <Text style={styles.mono}>bash note-organizer-14347-14360/build-web.sh</Text>
        </View>
        <Text style={styles.title}>CI Bootstrap</Text>
        <Text style={styles.text}>
          To run Gradle checks reliably in CI, use the bootstrap script which generates the native wrapper and runs check:
        </Text>
        <View style={styles.card}>
          <Text style={styles.mono}>bash note-organizer-14347-14360/ci-gradle-check.sh</Text>
        </View>
        <Text style={styles.text}>
          Learn more about Expo at{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://docs.expo.dev')}>
            docs.expo.dev
          </Text>.
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
  text: { color: Colors.text, opacity: 0.85, lineHeight: 20 },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.lg,
  },
  mono: { fontFamily: 'monospace', color: Colors.text },
  link: { color: Colors.primary, fontWeight: '800' },
});
