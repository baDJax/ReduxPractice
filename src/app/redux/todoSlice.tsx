import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  name: string;
}

const getIntitialTodos = (): { todos: Todo[] } => {
  if (typeof window === undefined) {
    return { todos: [] };
  }
  const todoLocal = localStorage.getItem("todos");
  const initialState = {
    todos: todoLocal ? JSON.parse(todoLocal) : [],
  };
  return initialState;
};

const initialState = getIntitialTodos();

const slice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (slice, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      slice.todos.push(data);
      localStorage.setItem("todos", JSON.stringify(slice.todos));
    },
    removeTodo: (slice, action) => {
      const filteredUsers = slice.todos.filter((val) => val.id !== action.payload);
      slice.todos = filteredUsers;
      localStorage.setItem("todos", JSON.stringify(filteredUsers));
    },
  },
});

export const { addTodo, removeTodo } = slice.actions;
export default slice.reducer;
