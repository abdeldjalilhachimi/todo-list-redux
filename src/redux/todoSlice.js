import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: false },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ],
  isAuth: false,
  isEdit: null,
};
const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: new Date().toString(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { todos: filteredTodos, isAuth: true };
    },
    updatedTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !action.payload.completed;
        }
      });
    },
    editedTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      });
    },
    login: (state, action) => {
      return { todos: state.todos, isAuth: action.payload.isAuth };
    },
    logout: (state, action) => {
      return { todos: state.todos, isAuth: action.payload.isAuth };
    },
  },
});

export const { addtodo, deleteTodo, updatedTodo, editedTodo, login, logout } =
  todoslice.actions;

export default todoslice.reducer;
