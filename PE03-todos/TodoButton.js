import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default function TodoButton({ title, onPress, complete, danger }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#eeeeee"
      style={styles.button}
    >
      <Text style={[
        styles.text,
        complete && styles.complete,
        danger && styles.danger,
      ]}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: { padding: 10 },
  text: { color: '#555555' },
  complete: { color: 'green', fontWeight: 'bold' },
  danger: { color: '#cc3333' },
});
