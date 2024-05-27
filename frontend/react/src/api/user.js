import axios from 'axios';

export const register = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/user/register', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/user/login', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
