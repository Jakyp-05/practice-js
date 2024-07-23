import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: {
    todos: [],
  },
  reducers: {
    AddTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggled = state.todos.find((todo) => todo.id === action.payload.id);
      toggled.completed = !toggled.completed;
    },
  },
});

export const { AddTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
