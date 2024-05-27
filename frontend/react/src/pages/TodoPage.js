import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, createTodo } from '../api/todo';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleCreateTodo = (todoData) => {
    dispatch(createTodo(todoData));
  };

  return (
    <div>
      <h2>Your To-Do Items</h2>
      <TodoList todos={todos} />
      <CreateTodo onCreateTodo={handleCreateTodo} />
    </div>
  );
};

export default TodoPage;
