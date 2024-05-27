import React, { useState } from 'react';

const CreateTodo = ({ onCreateTodo }) => {
  const [todoData, setTodoData] = useState({ title: '', description: '', dueDate: '', importance: '', urgency: '' });

  const handleChange = (e) => {
    setTodoData({ ...todoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(todoData);
    setTodoData({ title: '', description: '', dueDate: '', importance: '', urgency: '' });
  };

  return (
    <div>
      <h3>Create To-Do Item</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={todoData.title} onChange={handleChange} placeholder="Title" required />
        <input type="text" name="description" value={todoData.description} onChange={handleChange} placeholder="Description" />
        <input type="datetime-local" name="dueDate" value={todoData.dueDate} onChange={handleChange} placeholder="Due Date" />
        <input type="number" name="importance" value={todoData.importance} onChange={handleChange} placeholder="Importance (1-5)" />
        <input type="number" name="urgency" value={todoData.urgency} onChange={handleChange} placeholder="Urgency (1-5)" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
