import TodoList from "../TodoList";
import { useTodosContext } from "./todosContext";
export default function ReactContextTodoList() {
  const todos = useTodosContext();
  return (
    <TodoList
      title="Context Todo List"
      prefix="wd-context-todo-list"
      {...todos}
    />
  );
}
