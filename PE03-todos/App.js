import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView,
  TouchableHighlight, StyleSheet,
} from 'react-native';
import TodoList from './TodoList';
import TabBar from './TabBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', todos: [], type: 'All' };
    this.todoIndex = 0;
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  logTodos() {
    console.log('Todos:', JSON.stringify(this.state.todos, null, 2));
  }

  submitTodo() {
    const title = this.state.inputValue.trim();
    if (!title) return;

    const todo = {
      title,
      todoIndex: this.todoIndex++,
      complete: false,
    };

    this.setState(previous => ({
      todos: [...previous.todos, todo],
      inputValue: '',
    }), () => this.logTodos());
  }

  toggleComplete(todoIndex) {
    this.setState(previous => ({
      todos: previous.todos.map(todo =>
        todo.todoIndex === todoIndex
          ? { ...todo, complete: !todo.complete }
          : todo
      ),
    }), () => this.logTodos());
  }

  deleteTodo(todoIndex) {
    this.setState(previous => ({
      todos: previous.todos.filter(
        todo => todo.todoIndex !== todoIndex
      ),
    }), () => this.logTodos());
  }

  setType(type) {
    this.setState({ type }, () => console.log('Filter:', type));
  }

  render() {
    const { inputValue, todos, type } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.heading}>todos</Text>
          <TextInput
            style={styles.input}
            placeholder="What needs to be done?"
            value={inputValue}
            onChangeText={text => this.setState({ inputValue: text })}
            onSubmitEditing={this.submitTodo}
          />
          <TodoList
            todos={todos}
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor="#eeeeee"
            onPress={this.submitTodo}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1 },
  heading: {
    fontSize: 64,
    color: '#d8b8c8',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300',
  },
  input: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    margin: 20,
    alignSelf: 'flex-end',
    minWidth: 100,
  },
  buttonText: { textAlign: 'center', color: '#333333' },
});
