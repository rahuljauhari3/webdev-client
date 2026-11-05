"use client";
import { useState } from "react";
export type Todo = { id: string; title: string; done: boolean };
export const initialTodos: Todo[] = [
  "Learn HTML",
  "Learn CSS",
  "Learn JavaScript",
].map((title, i) => ({ id: String(i + 1), title, done: false }));
export type TodoActions = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleDone: (id: string) => void;
};
export function TodoForm({
  prefix,
  editing,
  onSave,
  onCancel,
}: {
  prefix: string;
  editing: Todo | null;
  onSave: (title: string) => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(editing?.title ?? "");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSave(title.trim());
        setTitle("");
      }}
    >
      <label htmlFor={`${prefix}-title`}>Todo title</label>
      <input
        id={`${prefix}-title`}
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{editing ? "Update" : "Add"}</button>
      {editing && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
export function TodoItem({
  todo,
  onEdit,
  onDelete,
  onToggle,
}: {
  todo: Todo;
  onEdit: () => void;
  onDelete: () => void;
  onToggle: () => void;
}) {
  return (
    <li>
      <label style={{ display: "inline" }}>
        <input type="checkbox" checked={todo.done} onChange={onToggle} />{" "}
        <span
          style={{ textDecoration: todo.done ? "line-through" : undefined }}
        >
          {todo.title}
        </span>
      </label>{" "}
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
export default function TodoList({
  title,
  prefix,
  ...actions
}: TodoActions & { title: string; prefix: string }) {
  const [editing, setEditing] = useState<Todo | null>(null);
  const current = actions.todos.find((t) => t.id === editing?.id) ?? null;
  return (
    <section id={prefix}>
      <h3>{title}</h3>
      <TodoForm
        key={current?.id ?? "new"}
        prefix={prefix}
        editing={current}
        onSave={(title) => {
          if (current) actions.updateTodo({ ...current, title });
          else actions.addTodo(title);
          setEditing(null);
        }}
        onCancel={() => setEditing(null)}
      />
      <ul>
        {actions.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={() => setEditing(todo)}
            onDelete={() => {
              actions.deleteTodo(todo.id);
              if (editing?.id === todo.id) setEditing(null);
            }}
            onToggle={() => actions.toggleDone(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}
