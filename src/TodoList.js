//before -> component => displaying the list of todos 
//now -> handles fetching and deleting todos with authentication
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { AuthContext } from './AutoContext';
import { useContext } from 'react';

const TodoList = ({todos, deleteTodo}) => {
  const [todos, setTodos] = useState([]);
  const {auth, logout} = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/todos', {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then((response) => {
      setTodos(response.data);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        alert('Session expired. Please log in again');
        logout();
        window.location.href='/login';
      } else {
        console.error(error);
      }
    });
  }, [auth, logout]);

  const addTodo = (newTodo) => {
    axios.post('http://localhost:8080/api/v1/todos', newTodo, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then((response) => {
      setTodos([...todos, response.data]);
    })
    .catch((error) => console.error(error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/api/v1/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
    .then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    })
    .catch(error => console.error(error));
  };


  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
    </div>
    
  );
};

export default TodoList;