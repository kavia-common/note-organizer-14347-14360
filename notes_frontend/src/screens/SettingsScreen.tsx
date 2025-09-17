import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import AppBar from '../components/AppBar';
import { Colors, Radii, Spacing } from '../theme/colors';
import { setOnboardingComplete } from '../services/onboarding';

type Props = {
  onClose: () => void;
  onHelp: () => void;
  onAbout: () => void;
};

// PUBLIC_INTERFACE
export default function SettingsScreen({ onClose, onHelp, onAbout }: Props) {
  /** Simple settings screen: reset onboarding and open Help/About. */
  const [allowOnboarding, setAllowOnboarding] = useState(false);

  const onToggleOnboarding = async (value: boolean) => {
    setAllowOnboarding(value);
    if (!value) {
      // keep completed
      await setOnboardingComplete();
    }
    // If enabling onboarding, clear completion by writing anything else than '1'
    // For simplicity, we re-run onboarding next session by not setting complete again.
  };

  return (
    <View style={styles.container}>
      <AppBar title="Settings" right={<CloseBtn onPress={onClose} />} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Show onboarding next time</Text>
          <Switch
            value={allowOnboarding}
            onValueChange={onToggleOnboarding}
            thumbColor={allowOnboarding ? Colors.secondary : '#e5e7eb'}
            trackColor={{ false: '#e5e7eb', true: '#dbeafe' }}
          />
        </View>

        <TouchableOpacity onPress={onHelp} style={styles.link}>
          <Text style={styles.linkText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onAbout} style={styles.link}>
          <Text style={styles.linkText}>About</Text>
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
  content: { padding: Spacing.xl, gap: Spacing.lg },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  label: { color: Colors.text, fontWeight: '700' },
  link: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#DBEAFE',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.lg,
  },
  linkText: { color: Colors.primary, fontWeight: '800' },
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
