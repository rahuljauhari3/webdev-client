"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [error, setError] = useState("");
  const { users, saveUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  return (
    <form
      id="wd-signup-screen"
      className="a4-form w-full max-w-sm"
      onSubmit={(e) => {
        e.preventDefault();
        if (password !== verify) {
          setError("Passwords must match.");
          return;
        }
        if (users.some((u) => u.username === username.trim())) {
          setError("Username already exists.");
          return;
        }
        const user = {
          ...emptyUser,
          _id: crypto.randomUUID(),
          username: username.trim(),
          password,
        };
        saveUser(user);
        setCurrentUser(user);
        router.push("/account/profile");
      }}
    >
      <h1>Sign up</h1>
      <label>
        Username
        <input
          id="wd-username"
          className="wd-username"
          placeholder="username"
          required
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          id="wd-password"
          className="wd-password"
          type="password"
          required
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Verify password
        <input
          className="wd-password-verify"
          type="password"
          required
          autoComplete="new-password"
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
        />
      </label>
      {error && <p role="alert">{error}</p>}
      <button id="wd-signup-btn" className="a4-primary">
        Sign up
      </button>{" "}
      <Link href="/account/signin">Sign in</Link>
    </form>
  );
}
