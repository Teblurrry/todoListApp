//component for displaying a single todo item and deleteing its deletion
import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      <span>{todo.description} - {todo.name}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;