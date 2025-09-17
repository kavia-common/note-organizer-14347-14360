import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../theme/colors';

/**
 PUBLIC_INTERFACE
 Renders a very small subset of Markdown for preview:
 - Headings: lines starting with #, ##, ###
 - Unordered lists: lines starting with - or * (one level)
 - Paragraphs: plain text lines
 Note: This is intentionally minimal and dependency-free.
*/
export function MiniMarkdown({ text }: { text: string }) {
  const lines = (text || '').split(/\r?\n/);
  return (
    <View>
      {lines.map((line, idx) => {
        const t = line.trim();
        if (t.startsWith('### ')) {
          return (
            <Text key={idx} style={{ fontSize: 16, fontWeight: '800', color: Colors.text, marginTop: 8 }}>
              {t.replace(/^###\s+/, '')}
            </Text>
          );
        }
        if (t.startsWith('## ')) {
          return (
            <Text key={idx} style={{ fontSize: 18, fontWeight: '800', color: Colors.text, marginTop: 10 }}>
              {t.replace(/^##\s+/, '')}
            </Text>
          );
        }
        if (t.startsWith('# ')) {
          return (
            <Text key={idx} style={{ fontSize: 20, fontWeight: '800', color: Colors.text, marginTop: 12 }}>
              {t.replace(/^#\s+/, '')}
            </Text>
          );
        }
        if (t.startsWith('- ') || t.startsWith('* ')) {
          return (
            <View key={idx} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: 4 }}>
              <Text style={{ color: Colors.text }}>•</Text>
              <Text style={{ color: Colors.text }}>{t.replace(/^[-*]\s+/, '')}</Text>
            </View>
          );
        }
        return (
          <Text key={idx} style={{ color: Colors.text, marginTop: 6, lineHeight: 20 }}>
            {line}
          </Text>
        );
      })}
    </View>
  );
}
