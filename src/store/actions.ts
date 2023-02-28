
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: {
    id: Math.random(),
    text,
    completed: false,
  }
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const deleteTodo = (id: number) => ({
  type: 'DELETE_TODO',
  payload: id,
});