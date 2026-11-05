"use client";
import Link from "next/link";
import useToggle from "./useToggle";
import useWindowSize from "./useWindowSize";
import useLocalStorage from "./useLocalStorage";
import useProfileForm from "./useProfileForm";
import ProfileFields from "../profile/ProfileFields";
import "../lab4.css";
function Lamp({ label }: { label: string }) {
  const [on, toggle] = useToggle();
  return (
    <button onClick={toggle}>
      {label}: {on ? "on" : "off"}
    </button>
  );
}
export default function HooksPage() {
  const size = useWindowSize();
  const [shown, toggle] = useToggle();
  const [tab, setTab] = useLocalStorage("wd-hooks-tab", "Monday");
  const { profile, setProfile, errors, submitted, save } = useProfileForm();
  return (
    <div id="wd-lab4-hooks">
      <h1>Writing Your Own Hooks</h1>
      <Link href="/labs/lab4">Back to Lab 4</Link>
      <section id="wd-window-size-demo">
        <h2>useWindowSize</h2>
        <p>
          {size
            ? `Window size: ${size.width} x ${size.height}`
            : "Loading window size..."}
        </p>
      </section>
      <section id="wd-toggle-demo">
        <h2>useToggle</h2>
        <button id="wd-toggle-demo-click" onClick={toggle}>
          {shown ? "Hide" : "Show"} details
        </button>
        {shown && <p>These details are visible because shown is true.</p>}
      </section>
      <section id="wd-local-storage-demo">
        <h2>useLocalStorage</h2>
        {["Monday", "Tuesday", "Wednesday"].map((t) => (
          <button key={t} aria-pressed={tab === t} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
        <p>Selected: {tab}. Reload the page and it stays selected.</p>
      </section>
      <section id="wd-independent-toggles">
        <h2>Each caller gets its own state</h2>
        <Lamp label="Kitchen" />
        <Lamp label="Porch" />
      </section>
      <section>
        <h2>useProfileForm</h2>
        <form id="wd-hook-profile-form" onSubmit={save} noValidate>
          {submitted && (
            <p role="alert">
              {Object.keys(errors).length
                ? `Fix ${Object.keys(errors).length} fields.`
                : "Profile saved."}
            </p>
          )}
          <ProfileFields
            prefix="wd-hook-profile"
            profile={profile}
            setProfile={setProfile}
            errors={errors}
          />
          <button id="wd-hook-profile-save">Save</button>
        </form>
      </section>
    </div>
  );
}
