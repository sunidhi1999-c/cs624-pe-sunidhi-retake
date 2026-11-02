import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

export default function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{todo.title}</Text>
      <TodoButton
        title="Done"
        complete={todo.complete}
        onPress={() => toggleComplete(todo.todoIndex)}
      />
      <TodoButton
        title="Delete"
        danger
        onPress={() => deleteTodo(todo.todoIndex)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 2,
    padding: 10,
  },
  title: { flex: 1, fontSize: 16, color: '#333333' },
});
