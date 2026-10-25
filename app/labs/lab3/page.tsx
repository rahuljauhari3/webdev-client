import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import math from "./math";
import * as operations from "./math";
import { add, subtract, multiply, divide } from "./math";
import todos from "./todos.json";
import ClientDemo from "./ClientDemo";
import ServerDemo from "./ServerDemo";
import Add from "./Add";
import "./lab3.css";

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return <div className="rounded border border-blue-600 p-4">{children}</div>;
}

type House = {
  address: { city: string; street: string };
  bedrooms: number;
  bathrooms: number;
  owners: string[];
  garage?: { cars: number };
};

interface Student {
  name: string;
  score: number;
}

type Status = "pending" | "complete";
type BinaryOperation = (a: number, b: number) => number;

enum Direction {
  North = "North",
  South = "South",
}

function legacyAdd(a: number, b: number) {
  return a + b;
}

const arrowAdd = (a: number, b: number) => {
  return a + b;
};

const square = (value: number) => value * value;

function fullName({ first, last }: { first: string; last: string }) {
  return `${first} ${last}`;
}

async function DelayedMessage() {
  const message = await Promise.resolve("Async Server Component resolved.");
  return <p>{message}</p>;
}

export default function Lab3() {
  let counter = 1;
  counter += 1;

  const course = "Web Development";
  const true1 = true;
  const false1 = false;
  const hour = 9;
  const signedIn = false;
  const nullValue: string | null = null;
  const undefinedValue: string | undefined = undefined;

  const numbers = [2, 4, 6, 8];
  const changed = [...numbers];
  changed.push(10);
  changed.pop();
  changed.unshift(0);
  changed.shift();

  const loopOutput: number[] = [];
  for (let index = 0; index < numbers.length; index += 1) {
    loopOutput.push(numbers[index]);
  }

  const house: House = {
    address: { city: "Boston", street: "10 College Road" },
    bedrooms: 3,
    bathrooms: 2,
    owners: ["Rahul", "Alex"],
  };

  const expanded = { ...house, bedrooms: 4 };
  const { bedrooms, bathrooms } = house;
  const [first, second] = numbers;
  const student: Student = { name: "Rahul", score: 95 };
  const status: Status = "complete";
  const operation: BinaryOperation = add;
  const unknownValue: unknown = "A safely narrowed value";
  const partialStudent: Partial<Student> = { score: 98 };
  const scores: Record<string, number> = { Rahul: 95, Alex: 92 };
  const studentKey: keyof Student = "name";

  const importRows = [
    [math.add(2, 3), operations.add(2, 3), add(2, 3)],
    [math.subtract(9, 4), operations.subtract(9, 4), subtract(9, 4)],
    [math.multiply(3, 4), operations.multiply(3, 4), multiply(3, 4)],
    [math.divide(12, 3), operations.divide(12, 3), divide(12, 3)],
    [math.add(10, 20), operations.add(10, 20), add(10, 20)],
  ];

  const bgRed = { backgroundColor: "#b91c1c" };
  const bgBlue = { backgroundColor: "#1d4ed8" };
  const bgPurple = { backgroundColor: "#7e22ce" };
  const bgGreen = { backgroundColor: "#15803d" };

  return (
    <main id="wd-lab3" className="lab3 max-w-5xl p-4">
      <h2 className="text-2xl font-bold">Lab 3</h2>

      <Section title="Variables and Constants">
        <p>counter: {counter}; course: {course}</p>
      </Section>

      <Section title="Variable Types">
        <p>course: {typeof course}</p>
        <p>counter: {typeof counter}</p>
        <p>true1: {typeof true1}</p>
      </Section>

      <Section title="Boolean Variables">
        <p>true1: {String(true1)}</p>
        <p>false1: {String(false1)}</p>
        <p>true1 AND false1: {String(true1 && false1)}</p>
      </Section>

      <Section title="If Else">
        {(() => {
          const lines: string[] = [];
          if (true1) lines.push("true1");
          if (false1) lines.push("false1");
          else lines.push("false1 is false");
          if (!false1) lines.push("not false1");

          return lines.map((line) => <p key={line}>{line}</p>);
        })()}
      </Section>

      <Section title="Ternary Operator">
        <p>{signedIn ? "Welcome" : "Please sign in"}</p>
        <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>
      </Section>

      <Section title="Conditional Output If Else">
        {(() => {
          if (signedIn) return <p>Member</p>;
          return <p>Guest</p>;
        })()}
      </Section>

      <Section title="Conditional Output Inline">
        {signedIn && <p>Member Inline</p>}
        {!signedIn && <p>Guest Inline</p>}
      </Section>

      <Section title="Null vs Undefined">
        <p>null: {String(nullValue)}</p>
        <p>undefined: {String(undefinedValue)}</p>
        <p>{'nullValue ?? "default"'} = {nullValue ?? "default"}</p>
      </Section>

      <Section title="Legacy Functions">
        <p>legacyAdd(4, 5) = {legacyAdd(4, 5)}</p>
      </Section>

      <Section title="Arrow Functions">
        <p>arrowAdd(6, 7) = {arrowAdd(6, 7)}</p>
      </Section>

      <Section title="Implied Return">
        <p>square(5) = {square(5)}</p>
      </Section>

      <Section title="Template Literals">
        <p>{`Welcome to ${course}. Counter is ${counter}.`}</p>
      </Section>

      <Section title="Simple Arrays">
        <p>{JSON.stringify(numbers)}</p>
      </Section>

      <Section title="Array Index and Length">
        <p>First: {numbers[0]}; length: {numbers.length}</p>
      </Section>

      <Section title="Adding and Removing From Arrays">
        <p>After push, pop, unshift, and shift: {changed.join(", ")}</p>
      </Section>

      <Section title="For Loops">
        <p>{loopOutput.join(", ")}</p>
      </Section>

      <Section title="Map Function">
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number} squared = {square(number)}</li>
          ))}
        </ul>
      </Section>

      <Section title="Find Function">
        <p>First greater than 4: {numbers.find((number) => number > 4)}</p>
      </Section>

      <Section title="Find Index">
        <p>Index of 6: {numbers.findIndex((number) => number === 6)}</p>
      </Section>

      <Section title="Filter Function">
        <p>{numbers.filter((number) => number > 4).join(", ")}</p>
      </Section>

      <Section title="Includes, Some, and Every">
        <p>Includes 4: {String(numbers.includes(4))}</p>
        <p>Some greater than 7: {String(numbers.some((n) => n > 7))}</p>
        <p>Every number even: {String(numbers.every((n) => n % 2 === 0))}</p>
      </Section>

      <Section title="Reduce">
        <p>Sum: {numbers.reduce((total, number) => total + number, 0)}</p>
      </Section>

      <Section title="JSON Stringify">
        <pre>{JSON.stringify(house, null, 2)}</pre>
      </Section>

      <Section title="JavaScript Objects">
        <p>City: {house.address.city}</p>
        <h5>bedrooms</h5>
        <p>{house.bedrooms}</p>
        <h5>bathrooms</h5>
        <p>{house.bathrooms}</p>
        <h5>owners</h5>
        <p>{house.owners.join(", ")}</p>
      </Section>

      <Section title="Writing to the Console">
        <p>Run this expression in your browser console:</p>
        <pre>{'console.log("Lab 3", { course: "Web Development" });'}</pre>
      </Section>

      <Section title="Spread Operator">
        <p>Original bedrooms: {house.bedrooms}</p>
        <p>Copied and changed bedrooms: {expanded.bedrooms}</p>
        <p>Expanded array: {[...numbers, 10].join(", ")}</p>
      </Section>

      <Section title="Destructuring">
        <p>Bedrooms: {bedrooms}; bathrooms: {bathrooms}</p>
        <p>First: {first}; second: {second}</p>
      </Section>

      <Section title="Function Destructuring">
        <p>{fullName({ first: "Rahul", last: "Jauhari" })}</p>
      </Section>

      <Section title="Destructing Imports">
        <table>
          <thead>
            <tr>
              <th>Default object</th>
              <th>Namespace</th>
              <th>Named functions</th>
            </tr>
          </thead>
          <tbody>
            {importRows.map((row, index) => (
              <tr key={index}>
                {row.map((value, column) => (
                  <td key={column}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p>The fifth data row evaluates add(10, 20).</p>
      </Section>

      <Section title="Optional Chaining and Nullish Coalescing">
        <p>house.garage?.cars ?? 0 = {house.garage?.cars ?? 0}</p>
      </Section>

      <Section title="Type Annotations">
        <p>Typed numeric score: {student.score}</p>
      </Section>

      <Section title="Object Types and Type Aliases">
        <p>House is described by the House type alias.</p>
      </Section>

      <Section title="Interfaces">
        <p>Student: {student.name}, score: {student.score}</p>
      </Section>

      <Section title="Union and Literal Types">
        <p>Status: {status}</p>
      </Section>

      <Section title="Enums">
        <p>Direction: {Direction.North}</p>
      </Section>

      <Section title="Function Types">
        <p>Typed operation: {operation(8, 2)}</p>
      </Section>

      <Section title="Typing React Props">
        <p>Section accepts a string title and ReactNode children.</p>
      </Section>

      <Section title="Null, Undefined, and Narrowing">
        <p>
          {undefinedValue === undefined
            ? "Value is undefined"
            : undefinedValue}
        </p>
      </Section>

      <Section title="any vs unknown">
        <p>
          {typeof unknownValue === "string"
            ? unknownValue.toUpperCase()
            : "Not a string"}
        </p>
        <p>unknown requires narrowing before using string methods.</p>
      </Section>

      <Section title="Utility Types: Partial, Record, and keyof">
        <pre>{JSON.stringify({ partialStudent, scores, studentKey }, null, 2)}</pre>
      </Section>

      <Section title="Classes">
        {["red", "blue", "green", "purple", "orange", "teal"].map((color) => (
          <div key={color} className={`lab3-box lab3-${color}`}>
            {color}
          </div>
        ))}
      </Section>

      <Section title="Styles">
        <div className="lab3-box" style={bgRed}>Red</div>
        <div className="lab3-box" style={bgBlue}>Blue</div>
        <div className="lab3-box" style={bgPurple}>Purple</div>
        <div className="lab3-box" style={bgGreen}>Green</div>
      </Section>

      <ClientDemo />
      <ServerDemo />

      <Section title="Suspense">
        <Suspense fallback={<p>Loading message...</p>}>
          <DelayedMessage />
        </Suspense>
      </Section>

      <Section title="Parameterizing Components">
        <Add a={3} b={4} />
        <Add a={10} b={20} />
      </Section>

      <Section title="Child Components">
        <Panel>
          <p>This paragraph is passed through children.</p>
        </Panel>
      </Section>

      <Section title="Composing Styles with Children">
        <Panel>
          <strong className="text-blue-700">Styled child content</strong>
        </Panel>
      </Section>

      <Section title="Working with the Pathname">
        <p>Use the Labs navigation to see the active link move.</p>
      </Section>

      <Section title="Path Parameters">
        <ul>
          <li><Link href="/labs/lab3/add/3/4">Add 3 and 4</Link></li>
          <li><Link href="/labs/lab3/add/12/30">Add 12 and 30</Link></li>
          <li><Link href="/labs/lab3/add/10/20">Add 10 and 20</Link></li>
        </ul>
      </Section>

      <Section title="Todo List">
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  className="mr-2"
                />
                {todo.title}
              </label>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}