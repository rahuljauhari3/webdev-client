"use client";
import { useState, type ReactNode } from "react";
import { HTTP_SERVER } from "@/lib/http";
export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function RemoteLink({
  path,
  id,
  children,
}: {
  path: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <a
      id={id}
      href={HTTP_SERVER ? `${HTTP_SERVER}${path}` : undefined}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
export function Environment() {
  return (
    <Section title="5.2.1 Environment Variables">
      <p>
        HTTP server:{" "}
        <code>
          {HTTP_SERVER || "NEXT_PUBLIC_HTTP_SERVER is not configured"}
        </code>
      </p>
      <RemoteLink id="wd-welcome-link" path="/lab5/welcome">
        Welcome
      </RemoteLink>
    </Section>
  );
}
export function Parameters() {
  const [a, setA] = useState("12"),
    [b, setB] = useState("30");
  const operations = ["add", "subtract", "multiply", "divide"];
  return (
    <>
      <Section title="5.2.2.1 Path Parameters">
        <div className="lab-fields">
          <label>
            A
            <input
              id="wd-path-parameter-a"
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
          </label>
          <label>
            B
            <input
              id="wd-path-parameter-b"
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </label>
        </div>
        <div className="lab-actions">
          {operations.map((op) => (
            <RemoteLink
              key={op}
              id={`wd-path-parameter-${op}`}
              path={`/lab5/${op}/${encodeURIComponent(a)}/${encodeURIComponent(b)}`}
            >
              {op}
            </RemoteLink>
          ))}
        </div>
      </Section>
      <Section title="5.2.2.2 Query Parameters">
        <p>Uses A and B above, encoded in the query string.</p>
        <div className="lab-actions">
          {operations.map((op) => (
            <RemoteLink
              key={op}
              id={`wd-query-parameter-${op}`}
              path={`/lab5/calculator?${new URLSearchParams({ operation: op, a, b })}`}
            >
              {op}
            </RemoteLink>
          ))}
        </div>
      </Section>
    </>
  );
}
export function RemoteObjects() {
  const [title, setTitle] = useState("NodeJS Assignment"),
    [score, setScore] = useState("0"),
    [completed, setCompleted] = useState(false),
    [name, setName] = useState("Node.js"),
    [description, setDescription] = useState("Creating HTTP servers");
  return (
    <>
      <Section title="5.2.3.1 Retrieving Objects">
        <RemoteLink id="wd-retrieve-assignments" path="/lab5/assignment">
          Get Assignment
        </RemoteLink>
      </Section>
      <Section title="5.2.3.2 Retrieving Properties">
        <RemoteLink
          id="wd-retrieve-assignment-title"
          path="/lab5/assignment/title"
        >
          Get Title
        </RemoteLink>
      </Section>
      <Section title="5.2.3.3 Modifying Object Properties">
        <label>
          Assignment title
          <input
            id="wd-assignment-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <RemoteLink
          id="wd-update-assignment-title"
          path={`/lab5/assignment/title/${encodeURIComponent(title)}`}
        >
          Update Title
        </RemoteLink>
        <label>
          Score
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </label>
        <RemoteLink
          path={`/lab5/assignment/score/${encodeURIComponent(score)}`}
        >
          Update Score
        </RemoteLink>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />{" "}
          Completed
        </label>
        <RemoteLink path={`/lab5/assignment/completed/${completed}`}>
          Update Completed
        </RemoteLink>
      </Section>
      <Section title="5.2.3.4 Module Object — On Your Own">
        <div className="lab-actions">
          <RemoteLink path="/lab5/module">Get Module</RemoteLink>
          <RemoteLink path="/lab5/module/name">Get Module Name</RemoteLink>
        </div>
        <label>
          Module name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <RemoteLink path={`/lab5/module/name/${encodeURIComponent(name)}`}>
          Update Module Name
        </RemoteLink>
        <label>
          Module description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <RemoteLink
          path={`/lab5/module/description/${encodeURIComponent(description)}`}
        >
          Update Module Description
        </RemoteLink>
      </Section>
    </>
  );
}
export function RemoteArrays() {
  const [id, setId] = useState("1"),
    [title, setTitle] = useState("Updated task"),
    [description, setDescription] = useState("Task description"),
    [completed, setCompleted] = useState(true);
  const base = `/lab5/todos/${encodeURIComponent(id)}`;
  return (
    <>
      <Section title="5.2.4.1 Retrieving Arrays">
        <RemoteLink id="wd-retrieve-todos" path="/lab5/todos">
          Get Todos
        </RemoteLink>
      </Section>
      <Section title="5.2.4.2 Retrieving by Primary Key">
        <label>
          Todo ID
          <input
            id="wd-todo-id"
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <RemoteLink id="wd-retrieve-todo-by-id" path={base}>
          Get Todo by ID
        </RemoteLink>
      </Section>
      <Section title="5.2.4.3 Filtering Array Items">
        <RemoteLink
          id="wd-retrieve-completed-todos"
          path="/lab5/todos?completed=true"
        >
          Get Completed Todos
        </RemoteLink>
      </Section>
      <Section title="5.2.4.4 Creating Array Items">
        <RemoteLink id="wd-create-todo" path="/lab5/todos/create">
          Create Todo
        </RemoteLink>
      </Section>
      <Section title="5.2.4.5 Removing Array Items">
        <RemoteLink id="wd-remove-todo" path={`${base}/delete`}>
          Remove Todo with ID = {id}
        </RemoteLink>
      </Section>
      <Section title="5.2.4.6 Updating Array Items">
        <label>
          Todo title
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <RemoteLink
          id="wd-update-todo-title"
          path={`${base}/title/${encodeURIComponent(title)}`}
        >
          Update Todo
        </RemoteLink>
      </Section>
      <Section title="5.2.4.7 Completed and Description — On Your Own">
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />{" "}
          Completed
        </label>
        <RemoteLink path={`${base}/completed/${completed}`}>
          Complete Todo ID = {id}
        </RemoteLink>
        <label>
          Description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <RemoteLink
          path={`${base}/description/${encodeURIComponent(description)}`}
        >
          Describe Todo ID = {id}
        </RemoteLink>
      </Section>
    </>
  );
}
