# Shortcut Buttons

A minimal component for secondary header actions (e.g., Help, About, Dev).

Usage:
  import ShortcutButtons from './src/components/ShortcutButtons';

  <AppBar
    title="Notes"
    right={
      <ShortcutButtons
        items={[
          { key: 'help', label: 'Help', onPress: () => {/* navigate to help */} },
          { key: 'about', label: 'About', onPress: () => {/* navigate to about */} },
        ]}
      />
    }
    onAdd={onCreate}
  />

Styling:
- Aligned with Ocean Professional: blue text, soft blue background.
