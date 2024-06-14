//main component for rendering the todoList component
import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { useState } from 'react';
import TodoForm from './TodoForm';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/api/v1/todos/${id}`)
    .then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    })
    .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
