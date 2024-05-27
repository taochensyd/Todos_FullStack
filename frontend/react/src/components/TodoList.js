import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.todoId} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
