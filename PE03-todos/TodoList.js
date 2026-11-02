import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

export default function TodoList({
  todos, type, toggleComplete, deleteTodo,
}) {
  const visibleTodos = todos.filter(todo => {
    if (type === 'Active') return !todo.complete;
    if (type === 'Complete') return todo.complete;
    return true;
  });

  return (
    <View>
      {visibleTodos.map(todo => (
        <Todo
          key={todo.todoIndex}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </View>
  );
}
