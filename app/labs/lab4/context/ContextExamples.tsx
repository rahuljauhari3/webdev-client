"use client";
import { createContext, useContext, useState } from "react";
import { TodosProvider } from "./todosContext";
import ReactContextTodoList from "./ReactContextTodoList";
import { ContextProfileForm } from "../profile/ProfileExamples";
const CounterContext = createContext<{
  count: number;
  setCount: (n: number) => void;
} | null>(null);
function ContextCounter() {
  const context = useContext(CounterContext);
  if (!context) throw new Error("Missing CounterContext");
  const { count, setCount } = context;
  return (
    <section id="wd-context-counter">
      <h3>Context Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(7)}>Reset</button>
    </section>
  );
}
export default function ContextExamples() {
  const [count, setCount] = useState(7);
  return (
    <section id="wd-context-examples">
      <h2>React Context</h2>
      <CounterContext.Provider value={{ count, setCount }}>
        <ContextCounter />
        <p>Another context consumer sees {count}</p>
      </CounterContext.Provider>
      <TodosProvider>
        <ReactContextTodoList />
      </TodosProvider>
      <ContextProfileForm />
    </section>
  );
}
