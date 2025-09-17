import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Colors, Radii, Spacing } from '../theme/colors';

type Props = {
  value: string;
  onSubmit: (next: string) => void;
  onCancel: () => void;
  placeholder?: string;
};

// PUBLIC_INTERFACE
export default function InlineEdit({ value, onSubmit, onCancel, placeholder = 'Rename' }: Props): JSX.Element {
  /** Lightweight inline text editor overlay for quick edits. */
  const [text, setText] = useState(value);
  const ref = useRef<TextInput>(null);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.focus(), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <TextInput
            ref={ref}
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => {
              onSubmit(text.trim());
              Keyboard.dismiss();
            }}
            onBlur={() => onCancel()}
            placeholder={placeholder}
            placeholderTextColor={Colors.textMuted}
            style={styles.input}
            returnKeyType="done"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(17,24,39,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radii.lg,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: Spacing.md,
    width: '100%',
  },
  input: {
    backgroundColor: Colors.surface,
    color: Colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
});
