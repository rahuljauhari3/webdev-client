"use client";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
export function ClickEvent() {
  return (
    <section id="wd-click-event">
      <h2>Click Event</h2>
      <button id="wd-onclick-hello" onClick={() => alert("Hello World!")}>
        Click Hello
      </button>
      <button
        id="wd-onclick-personal"
        onClick={() => alert("Hello, Rahul Manish Jauhari!")}
      >
        Greet Rahul
      </button>
      <button id="wd-onclick-goodbye" onClick={() => alert("Goodbye World!")}>
        Goodbye
      </button>
    </section>
  );
}
const lifeIs = (message: string) => alert(message);
export function PassingDataOnEvent() {
  return (
    <section id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      <button id="wd-pass-data-click" onClick={() => lifeIs("Hello World!")}>
        Pass Data
      </button>
      <button
        id="wd-pass-data-parameter-click"
        onClick={() => lifeIs("Life is Good!")}
      >
        Pass Data Parameter
      </button>
      <button onClick={() => lifeIs("Learning React with Rahul")}>
        Personal message
      </button>
      <button
        id="wd-pass-data-course-click"
        onClick={() => lifeIs("Web Development")}
      >
        Course message
      </button>
    </section>
  );
}
export function PassingFunctions({
  message,
  theFunction,
  personalFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (s: string) => void;
  personalFunction: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <section id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        id="wd-pass-functions-click"
        onClick={() => theFunction(`From parent: ${message}`)}
      >
        Invoke the Function
      </button>
      <button onClick={personalFunction}>Name from parent</button>
      <button id="wd-pass-functions-other-click" onClick={theOtherFunction}>
        Other function
      </button>
    </section>
  );
}
export function CounterBroken() {
  // This exercise deliberately contrasts an ordinary variable with React state.
  let count = 7;
  return (
    <section id="wd-counter-broken">
      <h2>Broken Counter: {count}</h2>
      <button onClick={() => console.log(++count)}>Up</button>
      <button onClick={() => console.log(--count)}>Down</button>
      <p>
        The variable changes in the console; React has no state update to
        render.
      </p>
    </section>
  );
}
export function Counter() {
  const [count, setCount] = useState(7);
  return (
    <section id="wd-counter">
      <h2>Counter: {count}</h2>
      <button id="wd-counter-up-click" onClick={() => setCount((c) => c + 1)}>
        Up
      </button>
      <button id="wd-counter-down-click" onClick={() => setCount((c) => c - 1)}>
        Down
      </button>
      <button id="wd-counter-reset-click" onClick={() => setCount(7)}>
        Reset
      </button>
    </section>
  );
}
export function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  const [urgent, setUrgent] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <section id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label>
        <input
          id="wd-boolean-checkbox"
          type="checkbox"
          checked={done}
          onChange={(e) => setDone(e.target.checked)}
        />
        Done
      </label>
      {done && <p>Yay! Done</p>}
      <label>
        <input
          type="checkbox"
          checked={urgent}
          onChange={(e) => setUrgent(e.target.checked)}
        />
        Urgent
      </label>
      {urgent && <p>Urgent task</p>}
      <label>
        <input
          id="wd-boolean-saved"
          type="checkbox"
          checked={saved}
          onChange={(e) => setSaved(e.target.checked)}
        />
        Saved
      </label>
      {saved && <p>Saved</p>}
    </section>
  );
}
export function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [nickName, setNickName] = useState("JD");
  return (
    <section id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>
        {firstName} {lastName} ({nickName})
      </p>
      <label>
        First name
        <input
          id="wd-first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Nickname
        <input
          id="wd-nick-name"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
      </label>
    </section>
  );
}
export function dateToHtml(date: Date | null) {
  if (!date) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function htmlToDate(value: string) {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}
export function DateStateVariable() {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date(2026, 0, 15),
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 4, 15));
  const [dueDate, setDueDate] = useState<Date | null>(new Date(2026, 0, 22));
  return (
    <section id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <p>
        {dateToHtml(startDate)} – {dateToHtml(endDate)}; Due{" "}
        {dateToHtml(dueDate)}
      </p>
      <label>
        Start date
        <input
          id="wd-start-date"
          type="date"
          value={dateToHtml(startDate)}
          onChange={(e) => setStartDate(htmlToDate(e.target.value))}
        />
      </label>
      <label>
        End date
        <input
          type="date"
          value={dateToHtml(endDate)}
          onChange={(e) => setEndDate(htmlToDate(e.target.value))}
        />
      </label>
      <label>
        Due date
        <input
          id="wd-due-date"
          type="date"
          value={dateToHtml(dueDate)}
          onChange={(e) => setDueDate(htmlToDate(e.target.value))}
        />
      </label>
    </section>
  );
}
export function ObjectStateVariable() {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    city: "Boston",
  });
  return (
    <section id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <label>
        Name
        <input
          id="wd-person-name"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </label>
      <label>
        Age
        <input
          id="wd-person-age"
          type="number"
          value={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: Number(e.target.value) })
          }
        />
      </label>
      <label>
        City
        <input
          id="wd-person-city"
          value={person.city}
          onChange={(e) => setPerson({ ...person, city: e.target.value })}
        />
      </label>
    </section>
  );
}
export function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  return (
    <section id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button
        id="wd-add-element-click"
        onClick={() => setArray((a) => [...a, Math.floor(Math.random() * 100)])}
      >
        Add Element
      </button>
      <button
        id="wd-clear-array-click"
        onClick={() => setArray([1, 2, 3, 4, 5])}
      >
        Clear
      </button>
      <ul>
        {array.map((n, i) => (
          <li key={i}>
            {n}{" "}
            <button
              id={`wd-delete-element-${i}-click`}
              onClick={() => setArray((a) => a.filter((_, j) => j !== i))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
type CounterProps = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};
function ChildStateComponent({ counter, setCounter }: CounterProps) {
  return (
    <div id="wd-child-state">
      <h3>Child Counter: {counter}</h3>
      <button
        id="wd-increment-child-state-click"
        onClick={() => setCounter((c) => c + 1)}
      >
        Up
      </button>
      <button
        id="wd-decrement-child-state-click"
        onClick={() => setCounter((c) => c - 1)}
      >
        Down
      </button>
      <button id="wd-reset-child-state-click" onClick={() => setCounter(123)}>
        Reset
      </button>
    </div>
  );
}
export function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
    <section id="wd-parent-state">
      <h2>Parent Counter: {counter}</h2>
      <ChildStateComponent counter={counter} setCounter={setCounter} />
    </section>
  );
}
function Grandchild({ counter, setCounter }: CounterProps) {
  return (
    <div>
      <h4>Grandchild: {counter}</h4>
      <button onClick={() => setCounter((c) => c + 1)}>
        Increment in grandchild
      </button>
    </div>
  );
}
function Middle(props: CounterProps) {
  return (
    <div>
      <h4>Middle</h4>
      <Grandchild {...props} />
    </div>
  );
}
function Child(props: CounterProps) {
  return (
    <div>
      <h4>Child</h4>
      <Middle {...props} />
    </div>
  );
}
export function PropDrilling() {
  const [counter, setCounter] = useState(0);
  return (
    <section id="wd-prop-drilling">
      <h2>Prop Drilling</h2>
      <p>Parent count: {counter}</p>
      <Child counter={counter} setCounter={setCounter} />
    </section>
  );
}
export function Effect() {
  const [name, setName] = useState("Rahul");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const previous = document.title;
    document.title = `${name}: ${count}`;
    console.log(name, count);
    return () => {
      document.title = previous;
    };
  }, [name, count]);
  return (
    <section id="wd-effect">
      <h2>Side Effects with useEffect</h2>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment effect count
      </button>
      <p>The browser tab title follows the name and count.</p>
    </section>
  );
}
