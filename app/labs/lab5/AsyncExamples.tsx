"use client";
import { useEffect, useState } from "react";
import { FaPlusCircle, FaTrash, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import useRequest from "@/app/(kambaz)/components/useRequest";
import * as client from "./client";
import { Section } from "./Examples";
export function HttpClient() {
  const [click, setClick] = useState(""),
    [load, setLoad] = useState("");
  const { run, feedback } = useRequest();
  useEffect(() => {
    let active = true;
    void run(async () => {
      const message = await client.fetchWelcomeMessage();
      if (active) setLoad(message);
    });
    return () => {
      active = false;
    };
  }, [run]);
  return (
    <>
      <Section title="5.2.5.1–3 Asynchronous Axios, CORS, and Client Library">
        {feedback}
        <button
          onClick={() => {
            void run(async () => setClick(await client.fetchWelcomeMessage()));
          }}
        >
          Fetch Welcome
        </button>
        <p>
          Response on click: <strong>{click}</strong>
        </p>
      </Section>
      <Section title="5.2.5.4 Requesting on Load">
        <p>
          Response on load: <strong>{load}</strong>
        </p>
      </Section>
    </>
  );
}
export function RemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<client.LabAssignment | null>(
    null,
  );
  const { run, pending, feedback } = useRequest();
  useEffect(() => {
    let active = true;
    void run(async () => {
      const data = await client.fetchAssignment();
      if (active) setAssignment(data);
    });
    return () => {
      active = false;
    };
  }, [run]);
  return (
    <Section title="5.2.5.5 Working with Objects Asynchronously">
      {feedback}
      {assignment && (
        <>
          <label>
            Assignment title
            <input
              value={assignment.title}
              onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
              }
            />
          </label>
          <button
            disabled={pending || !assignment.title.trim()}
            onClick={() => {
              void run(async () =>
                setAssignment(
                  await client.updateAssignment("title", assignment.title),
                ),
              );
            }}
          >
            Update Title
          </button>
          <label>
            Score
            <input
              type="number"
              value={assignment.score}
              onChange={(e) =>
                setAssignment({ ...assignment, score: Number(e.target.value) })
              }
            />
          </label>
          <button
            disabled={pending}
            onClick={() => {
              void run(async () =>
                setAssignment(
                  await client.updateAssignment("score", assignment.score),
                ),
              );
            }}
          >
            Update Score
          </button>
          <label>
            <input
              type="checkbox"
              checked={assignment.completed}
              onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
              }
            />{" "}
            Completed
          </label>
          <button
            disabled={pending}
            onClick={() => {
              void run(async () =>
                setAssignment(
                  await client.updateAssignment(
                    "completed",
                    assignment.completed,
                  ),
                ),
              );
            }}
          >
            Update Completed
          </button>
          <pre>{JSON.stringify(assignment, null, 2)}</pre>
        </>
      )}
    </Section>
  );
}
export function RemoteArraysAsync() {
  const [todos, setTodos] = useState<client.Todo[]>([]),
    [title, setTitle] = useState("New Posted Todo"),
    [editing, setEditing] = useState<number | null>(null),
    [draft, setDraft] = useState("");
  const { run, pending, feedback } = useRequest();
  useEffect(() => {
    let active = true;
    void run(async () => {
      const rows = await client.fetchTodos();
      if (active) setTodos(rows);
    });
    return () => {
      active = false;
    };
  }, [run]);
  const save = (todo: client.Todo) =>
    run(async () => {
      const saved = await client.updateTodo(todo);
      setTodos((rows) => rows.map((t) => (t.id === saved.id ? saved : t)));
      setEditing(null);
    });
  return (
    <Section title="5.2.5.6–8 Working with Arrays Asynchronously">
      {feedback && <div id="wd-todo-error-message">{feedback}</div>}
      <div className="lab-actions">
        <button
          disabled={pending}
          onClick={() => {
            void run(async () => setTodos(await client.fetchTodos()));
          }}
        >
          Refresh Todos
        </button>
        <button
          disabled={pending}
          onClick={() => {
            void run(async () => setTodos(await client.createNewTodo()));
          }}
        >
          <FaPlusCircle /> Create with GET
        </button>
      </div>
      <h3>5.2.6.1 Posting JSON with HTTP POST</h3>
      <label>
        New todo title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button
        id="wd-post-todo"
        disabled={pending || !title.trim()}
        onClick={() => {
          void run(async () => {
            const created = await client.postNewTodo({
              title,
              completed: false,
              description: "",
            });
            setTodos((rows) => [...rows, created]);
          });
        }}
      >
        <FaPlusCircle /> Post Todo
      </button>
      <h3>5.2.6.2 Deleting with HTTP DELETE</h3>
      <p>
        The trash button uses the earlier GET route. The × button sends DELETE.
      </p>
      <h3>5.2.6.3 Updating with HTTP PUT</h3>
      <p>
        Edit a title and press Enter, or change a checkbox. Refresh to read the
        saved state.
      </p>
      <ul className="lab-todos">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                disabled={pending}
                onChange={(e) => {
                  void save({ ...todo, completed: e.target.checked });
                }}
              />
              <span className={todo.completed ? "completed" : ""}>
                {editing !== todo.id && todo.title}
              </span>
            </label>
            {editing === todo.id && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (draft.trim()) void save({ ...todo, title: draft });
                }}
              >
                <input
                  aria-label="Edit todo title"
                  autoFocus
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <button disabled={pending || !draft.trim()}>Save</button>
                <button type="button" onClick={() => setEditing(null)}>
                  Cancel
                </button>
              </form>
            )}
            <small>#{todo.id}</small>
            <button
              aria-label={`Edit todo ${todo.id}`}
              onClick={() => {
                setEditing(todo.id);
                setDraft(todo.title);
              }}
            >
              <FaPencilAlt />
            </button>
            <button
              aria-label={`Remove todo ${todo.id} using GET`}
              disabled={pending}
              onClick={() => {
                void run(async () =>
                  setTodos(await client.removeTodo(todo.id)),
                );
              }}
            >
              <FaTrash />
            </button>
            <button
              aria-label={`Delete todo ${todo.id} using DELETE`}
              disabled={pending}
              onClick={() => {
                void run(async () => {
                  await client.deleteTodo(todo.id);
                  setTodos((rows) => rows.filter((t) => t.id !== todo.id));
                });
              }}
            >
              <TiDelete />
            </button>
          </li>
        ))}
      </ul>
      <h3>5.2.6.4 Handling Errors</h3>
      <p>
        Delete a displayed todo with an earlier link in another tab, then use
        its × button here. The server returns 404 and the alert preserves the
        error.
      </p>
      <button
        disabled={pending}
        onClick={() => {
          void run(() => client.deleteTodo(-1));
        }}
      >
        Try deleting missing todo (404)
      </button>
    </Section>
  );
}
export function NextRoutes() {
  const [hello, setHello] = useState(""),
    [a, setA] = useState("12"),
    [b, setB] = useState("30"),
    [op, setOp] = useState("add"),
    [result, setResult] = useState<number | null>(null);
  const { run, pending, feedback } = useRequest();
  useEffect(() => {
    let active = true;
    void run(async () => {
      const data = await client.fetchHello();
      if (active) setHello(data.message);
    });
    return () => {
      active = false;
    };
  }, [run]);
  return (
    <>
      <Section title="5.3 Next.js Route Handlers">
        <a href="/api/lab5/hello" target="_blank" rel="noreferrer">
          Hello JSON API
        </a>
        <p>{hello}</p>
        {feedback}
      </Section>
      <Section title="5.3.1 Next.js Calculator Web API">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void run(async () =>
              setResult((await client.calculate(a, b, op)).result),
            );
          }}
        >
          <div className="lab-fields">
            <label>
              A
              <input
                type="number"
                step="any"
                required
                value={a}
                onChange={(e) => setA(e.target.value)}
              />
            </label>
            <label>
              B
              <input
                type="number"
                step="any"
                required
                value={b}
                onChange={(e) => setB(e.target.value)}
              />
            </label>
            <label>
              Operation
              <select value={op} onChange={(e) => setOp(e.target.value)}>
                {["add", "subtract", "multiply", "divide"].map((op) => (
                  <option key={op}>{op}</option>
                ))}
              </select>
            </label>
          </div>
          <button disabled={pending}>Calculate</button>
          <output aria-live="polite">
            {result !== null && `Result: ${result}`}
          </output>
        </form>
        <a
          href={`/api/lab5/calculator?${new URLSearchParams({ a, b, operation: op })}`}
          target="_blank"
          rel="noreferrer"
        >
          Calculator JSON API
        </a>
      </Section>
    </>
  );
}
