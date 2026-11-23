"use client";
import * as client from "../client";
import { errorMessage } from "@/lib/http";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
function ProfileForm({ user }: { user: User }) {
  const [profile, setProfile] = useState({ ...user, password: "" });
  const [message, setMessage] = useState("");
  const { users, saveUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  const fields = [
    { key: "username", label: "Username", type: "text" },
    { key: "password", label: "Password", type: "password" },
    { key: "firstName", label: "First Name", type: "text" },
    { key: "lastName", label: "Last Name", type: "text" },
    { key: "dob", label: "Date of Birth", type: "date" },
    { key: "email", label: "Email", type: "email" },
  ] as const;
  return (
    <form
      id="wd-profile-screen"
      className="a4-form w-full max-w-sm"
      onSubmit={async (e) => {
        e.preventDefault();
        if (
          users.some(
            (u) =>
              u._id !== profile._id && u.username === profile.username.trim(),
          )
        ) {
          setMessage("Username already exists.");
          return;
        }
        try {
          await saveUser({ ...profile, username: profile.username.trim() });
          setMessage("Profile updated.");
        } catch (e) {
          setMessage(errorMessage(e));
        }
      }}
    >
      <h1>Profile</h1>
      {fields.map((f) => (
        <label key={f.key}>
          {f.label}
          <input
            id={`wd-${f.key.toLowerCase()}`}
            className={`wd-${f.key}`}
            type={f.type}
            required={f.key === "username"}
            value={profile[f.key]}
            onChange={(e) =>
              setProfile({ ...profile, [f.key]: e.target.value })
            }
          />
        </label>
      ))}
      <label>
        Role
        <select
          id="wd-role"
          disabled={!["FACULTY", "ADMIN"].includes(user.role)}
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          {["USER", "ADMIN", "FACULTY", "STUDENT", "TA"].map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>
      <p role="status">{message}</p>
      <button id="wd-update-profile" className="a4-primary">
        Update
      </button>{" "}
      <button
        id="wd-signout-btn"
        className="a4-danger"
        type="button"
        onClick={async () => {
          try {
            await client.signout();
            setCurrentUser(null);
            router.push("/account/signin");
          } catch (e) {
            setMessage(errorMessage(e));
          }
        }}
      >
        Sign out
      </button>
    </form>
  );
}
export default function Profile() {
  const { currentUser } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) router.replace("/account/signin");
  }, [currentUser, router]);
  return currentUser ? (
    <ProfileForm key={currentUser._id} user={currentUser} />
  ) : null;
}
