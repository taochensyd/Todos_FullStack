import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Due Date: {new Date(todo.dueDate).toLocaleString()}</p>
      <p>Importance: {todo.importance}</p>
      <p>Urgency: {todo.urgency}</p>
      <p>Status: {todo.status}</p>
    </div>
  );
};

export default TodoItem;
