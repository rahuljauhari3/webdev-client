"use client";
import { create } from "zustand";
import TodoList from "../TodoList";
import { useTodoStore } from "./todoStore";
import { ZustandProfileForm } from "../profile/ProfileExamples";
const useCounterStore = create<{
  count: number;
  change: (n: number) => void;
  reset: () => void;
}>((set) => ({
  count: 7,
  change: (n) => set((s) => ({ count: s.count + n })),
  reset: () => set({ count: 7 }),
}));
export default function ZustandExamples() {
  const { count, change, reset } = useCounterStore();
  const todos = useTodoStore();
  return (
    <section id="wd-zustand-examples">
      <h2>Zustand</h2>
      <section id="wd-zustand-counter">
        <h3>Zustand Counter: {count}</h3>
        <button onClick={() => change(1)}>Up</button>
        <button onClick={() => change(-1)}>Down</button>
        <button onClick={reset}>Reset</button>
      </section>
      <TodoList
        title="Zustand Todo List"
        prefix="wd-zustand-todo-list"
        {...todos}
      />
      <ZustandProfileForm />
    </section>
  );
}
