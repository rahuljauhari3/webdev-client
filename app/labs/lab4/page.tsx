"use client";
import Link from "next/link";
import {
  ClickEvent,
  PassingDataOnEvent,
  PassingFunctions,
  CounterBroken,
  Counter,
  BooleanStateVariables,
  StringStateVariables,
  DateStateVariable,
  ObjectStateVariable,
  ArrayStateVariable,
  ParentStateComponent,
  PropDrilling,
  Effect,
} from "./StateExercises";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import UrlEncoding from "./url-encoding/UrlEncoding";
import { LocalProfileForm } from "./profile/ProfileExamples";
import "./lab4.css";
export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h1>Lab 4 — Managing Client State</h1>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={(message) => alert(message)}
        personalFunction={() => alert("Rahul Manish Jauhari")}
        theOtherFunction={() => alert("Sample from parent")}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <LocalProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
      <section>
        <h2>Writing Your Own Hooks</h2>
        <Link href="/labs/lab4/hooks">Custom hooks examples</Link>
      </section>
    </div>
  );
}
