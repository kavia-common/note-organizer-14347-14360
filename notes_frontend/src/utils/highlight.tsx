import React from 'react';
import { Text, TextProps } from 'react-native';
import { Colors } from '../theme/colors';

// PUBLIC_INTERFACE
export function Highlighted({
  text,
  query,
  textProps,
}: {
  text: string;
  query: string;
  textProps?: TextProps;
}) {
  /** Renders text with substrings matching 'query' highlighted. */
  if (!query) return <Text {...textProps}>{text}</Text>;
  const q = query.toLowerCase();
  const parts: Array<{ t: string; match: boolean }> = [];
  let i = 0;
  while (i < text.length) {
    const j = text.toLowerCase().indexOf(q, i);
    if (j === -1) {
      parts.push({ t: text.slice(i), match: false });
      break;
    }
    if (j > i) parts.push({ t: text.slice(i, j), match: false });
    parts.push({ t: text.slice(j, j + q.length), match: true });
    i = j + q.length;
  }
  return (
    <Text {...textProps}>
      {parts.map((p, idx) =>
        p.match ? (
          <Text key={idx} style={{ backgroundColor: '#FEF3C7', color: Colors.text }}>
            {p.t}
          </Text>
        ) : (
          <Text key={idx}>{p.t}</Text>
        ),
      )}
    </Text>
  );
}
