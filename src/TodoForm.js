//component for adding a new todo
import React, {useState} from 'react';
import axios from 'axios';

const TodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/todos/bulk', [{description, name, completed}])
    .then(response => {
      addTodo(response.data[0]);//response.data[] is an array with one todo item
      setDescription('');
      setName('');
      setCompleted(false);
    })
    .catch(error => console.error(error));
  };

  const handleCompletedToogle = () => {
    setCompleted(!completed);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Add a new todo"
      />
      <input 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Name"
      />
      <button type="button" onClick={handleCompletedToogle}>
        {completed ? 'Completed' : 'Not Completed'}
      </button>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;