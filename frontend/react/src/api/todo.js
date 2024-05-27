import axios from 'axios';

export const fetchTodos = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const response = await axios.get('/api/todo/view', {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: 'SET_TODOS', payload: response.data.todos });
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = (todoData) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const response = await axios.post('/api/todo/create', todoData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: 'ADD_TODO', payload: response.data.todo });
  } catch (error) {
    console.error(error);
  }
};
