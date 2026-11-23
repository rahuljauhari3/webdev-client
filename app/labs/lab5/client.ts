import { http } from "@/lib/http";
export type LabAssignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description: string;
};
export const fetchWelcomeMessage = async () =>
  (await http.get<string>("/lab5/welcome")).data;
export const fetchAssignment = async () =>
  (await http.get<LabAssignment>("/lab5/assignment")).data;
export const updateAssignment = async (
  field: "title" | "score" | "completed",
  value: string | number | boolean,
) =>
  (
    await http.get<LabAssignment>(
      `/lab5/assignment/${field}/${encodeURIComponent(String(value))}`,
    )
  ).data;
export const fetchTodos = async () =>
  (await http.get<Todo[]>("/lab5/todos")).data;
export const createNewTodo = async () =>
  (await http.get<Todo[]>("/lab5/todos/create")).data;
export const removeTodo = async (id: number) =>
  (await http.get<Todo[]>(`/lab5/todos/${id}/delete`)).data;
export const postNewTodo = async (todo: Omit<Todo, "id">) =>
  (await http.post<Todo>("/lab5/todos", todo)).data;
export const deleteTodo = async (id: number) => {
  await http.delete(`/lab5/todos/${id}`);
};
export const updateTodo = async (todo: Todo) =>
  (await http.put<Todo>(`/lab5/todos/${todo.id}`, todo)).data;
export async function fetchHello() {
  const response = await fetch("/api/lab5/hello");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json() as Promise<{ message: string }>;
}
export async function calculate(a: string, b: string, operation: string) {
  const response = await fetch(
    `/api/lab5/calculator?${new URLSearchParams({ a, b, operation })}`,
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data as { result: number };
}
