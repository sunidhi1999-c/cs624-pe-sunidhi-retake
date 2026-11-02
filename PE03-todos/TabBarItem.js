import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default function TabBarItem({ title, type, setType }) {
  const selected = type === title;
  return (
    <TouchableHighlight
      onPress={setType}
      underlayColor="#eeeeee"
      style={[styles.tab, selected && styles.selected]}
    >
      <Text style={[styles.text, selected && styles.bold]}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tab: { flex: 1, padding: 18, alignItems: 'center' },
  selected: { backgroundColor: '#eadde5' },
  text: { color: '#444444' },
  bold: { fontWeight: 'bold' },
});
