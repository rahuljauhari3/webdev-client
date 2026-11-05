import { create } from "zustand";
import { initialTodos, type TodoActions } from "../TodoList";
export const useTodoStore = create<TodoActions>((set) => ({
  todos: initialTodos,
  addTodo: (title) =>
    set((s) => ({
      todos: [...s.todos, { id: crypto.randomUUID(), title, done: false }],
    })),
  updateTodo: (todo) =>
    set((s) => ({
      todos: s.todos.map((t) => (t.id === todo.id ? { ...todo } : t)),
    })),
  deleteTodo: (id) =>
    set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
  toggleDone: (id) =>
    set((s) => ({
      todos: s.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    })),
}));
