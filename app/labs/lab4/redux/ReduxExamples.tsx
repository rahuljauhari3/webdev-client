"use client";
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  makeStore,
  up,
  down,
  reset,
  add,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleDone,
  type RootState,
} from "./store";
import TodoList from "../TodoList";
function ReduxTodos() {
  const todos = useSelector((s: RootState) => s.todosReducer.todos);
  const dispatch = useDispatch();
  return (
    <TodoList
      title="Redux Todo List"
      prefix="wd-redux-todo-list"
      todos={todos}
      addTodo={(title) =>
        dispatch(addTodo({ id: crypto.randomUUID(), title, done: false }))
      }
      updateTodo={(t) => dispatch(updateTodo(t))}
      deleteTodo={(id) => dispatch(deleteTodo(id))}
      toggleDone={(id) => dispatch(toggleDone(id))}
    />
  );
}
function ReduxContent() {
  const message = useSelector((s: RootState) => s.helloReducer.message);
  const count = useSelector((s: RootState) => s.counterReducer.count);
  const sum = useSelector((s: RootState) => s.addReducer.sum);
  const dispatch = useDispatch();
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  return (
    <section id="wd-redux-examples">
      <h2>Redux Toolkit</h2>
      <section>
        <h3>Hello Redux</h3>
        <p>{message}</p>
      </section>
      <section id="wd-redux-counter">
        <h3>Redux Counter: {count}</h3>
        <button id="wd-redux-up-click" onClick={() => dispatch(up())}>
          Up
        </button>
        <button id="wd-redux-down-click" onClick={() => dispatch(down())}>
          Down
        </button>
        <button id="wd-redux-reset-click" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </section>
      <section id="wd-add-redux">
        <h3>Add Redux</h3>
        <label>
          A
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </label>
        <label>
          B
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
          />
        </label>
        <button onClick={() => dispatch(add({ a, b }))}>Add Redux</button>
        <p>Sum: {sum}</p>
      </section>
      <ReduxTodos />
    </section>
  );
}
export default function ReduxExamples() {
  const [store] = useState(makeStore);
  return (
    <Provider store={store}>
      <ReduxContent />
    </Provider>
  );
}
