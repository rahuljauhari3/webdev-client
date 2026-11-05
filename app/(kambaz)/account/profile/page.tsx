"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
function ProfileForm({ user }: { user: User }) {
  const [profile, setProfile] = useState({ ...user });
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
      onSubmit={(e) => {
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
        saveUser({ ...profile, username: profile.username.trim() });
        setMessage("Profile updated.");
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
            required={f.key === "username" || f.key === "password"}
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
        onClick={() => {
          setCurrentUser(null);
          router.push("/account/signin");
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
