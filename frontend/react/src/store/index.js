import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from './reducers/authReducer';
import todoReducer from './reducers/todoReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});

export default store;
