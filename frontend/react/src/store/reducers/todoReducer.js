const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TODOS':
        return { ...state, todos: action.payload };
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.todoId === action.payload.todoId ? action.payload : todo
          ),
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.todoId !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  