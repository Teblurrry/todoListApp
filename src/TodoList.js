//component => displaying the list of todos
import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, deleteTodo}) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;