"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { initialTodos, type TodoActions } from "../TodoList";
const TodosContext = createContext<TodoActions | null>(null);
export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState(initialTodos);
  const value: TodoActions = {
    todos,
    addTodo: (title) =>
      setTodos((s) => [...s, { id: crypto.randomUUID(), title, done: false }]),
    updateTodo: (todo) =>
      setTodos((s) => s.map((t) => (t.id === todo.id ? { ...todo } : t))),
    deleteTodo: (id) => setTodos((s) => s.filter((t) => t.id !== id)),
    toggleDone: (id) =>
      setTodos((s) =>
        s.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
      ),
  };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) throw new Error("Missing TodosProvider");
  return value;
}
