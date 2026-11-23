"use client";
import * as client from "../client";
import { errorMessage } from "@/lib/http";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  return (
    <form
      id="wd-signin-screen"
      className="a4-form w-full max-w-sm"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        try {
          const user = await client.signin({
            username: username.trim(),
            password,
          });
          setCurrentUser(user);
          router.push("/dashboard");
        } catch (e) {
          setError(errorMessage(e));
        }
      }}
    >
      <h1>Sign in</h1>
      <p>Demo users: rahul, alex, sam, or faculty. Password: 123.</p>
      <label>
        Username
        <input
          id="wd-username"
          className="wd-username"
          autoComplete="username"
          required
          placeholder="username"
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
          autoComplete="current-password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Sample note
        <input id="wd-ai-signin-note" placeholder="sample note" />
      </label>
      {error && (
        <p role="alert" className="text-red-600">
          {error}
        </p>
      )}
      <button id="wd-signin-btn" className="a4-primary" type="submit">
        Sign in
      </button>{" "}
      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </form>
  );
}
