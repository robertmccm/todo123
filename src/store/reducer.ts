import { Reducer } from 'redux';


const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const reducer: Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo: any) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo: any) => todo.id !== action.payload)
        };
    default:
      return state;
  }
}