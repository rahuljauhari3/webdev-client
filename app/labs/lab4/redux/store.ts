import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { initialTodos, type Todo } from "../TodoList";
const helloSlice = createSlice({
  name: "hello",
  initialState: { message: "Hello Redux" },
  reducers: {},
});
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 7 },
  reducers: {
    up: (s) => {
      s.count += 1;
    },
    down: (s) => {
      s.count -= 1;
    },
    reset: (s) => {
      s.count = 7;
    },
  },
});
const addSlice = createSlice({
  name: "add",
  initialState: { sum: 0 },
  reducers: {
    add: (s, a: PayloadAction<{ a: number; b: number }>) => {
      s.sum = a.payload.a + a.payload.b;
    },
  },
});
const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: initialTodos },
  reducers: {
    addTodo: (s, a: PayloadAction<Todo>) => {
      s.todos.push(a.payload);
    },
    updateTodo: (s, a: PayloadAction<Todo>) => {
      s.todos = s.todos.map((t) => (t.id === a.payload.id ? a.payload : t));
    },
    deleteTodo: (s, a: PayloadAction<string>) => {
      s.todos = s.todos.filter((t) => t.id !== a.payload);
    },
    toggleDone: (s, a: PayloadAction<string>) => {
      const t = s.todos.find((t) => t.id === a.payload);
      if (t) t.done = !t.done;
    },
  },
});
export const { up, down, reset } = counterSlice.actions;
export const { add } = addSlice.actions;
export const { addTodo, updateTodo, deleteTodo, toggleDone } =
  todosSlice.actions;
export function makeStore() {
  return configureStore({
    reducer: {
      helloReducer: helloSlice.reducer,
      counterReducer: counterSlice.reducer,
      addReducer: addSlice.reducer,
      todosReducer: todosSlice.reducer,
    },
  });
}
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
