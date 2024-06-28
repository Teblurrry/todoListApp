//before -> component => displaying the list of todos 
//now -> handles fetching and deleting todos with authentication
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
// import TodoItem from './TodoItem';
// import TodoForm from './TodoForm';
import { AuthContext } from './AutoContext';

const TodoList = ({ deleteTodo }) => {
  const [todos, setTodos] = useState([]);
  const {auth, logout} = useContext(AuthContext);

  useEffect(() => {
    const fetchTodos = async() => {
      try {
        const response = await axios.get('/api/todos', {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          }
        });
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos: ', error);
      }
    };
    fetchTodos();
  }, [auth]);
  //   axios.get('http://localhost:8080/api/v1/todos', {

  //   })
  //   .then((response) => {
  //     setTodos(response.data);
  //   })
  //   .catch((error) => {
  //     if (error.response && error.response.status === 401) {
  //       alert('Session expired. Please log in again');
  //       logout();
  //       window.location.href='/login';
  //     } else {
  //       console.error(error);
  //     }
  //   });
  // }, [auth, logout]);

  // const addTodo = (newTodo) => {
  //   axios.post('http://localhost:8080/api/v1/todos', newTodo, {
  //     headers: {
  //       Authorization: `Bearer ${auth}`,
  //     },
  //   })
  //   .then((response) => {
  //     setTodos([...todos, response.data]);
  //   })
  //   .catch((error) => console.error(error));
  // };

  // const deleteTodo = (id) => {
  //   axios.delete(`http://localhost:8080/api/v1/todos/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${auth}`,
  //     },
  //   })
  //   .then(() => {
  //     setTodos(todos.filter(todo => todo.id !== id));
  //   })
  //   .catch(error => console.error(error));
  // };

  return (
    <div>
      <h1>Todo List</h1>
      {/* <TodoForm addTodo={addTodo} /> */}
      <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
        // <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        
      ))}
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
    
  );
      }

export default TodoList;