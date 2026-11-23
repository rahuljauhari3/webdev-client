"use client";
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import * as client from "./client";
import { errorMessage } from "@/lib/http";
import { useCoursesStore } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import type { User } from "../types";
export type { User } from "../types";
export const emptyUser: User = {
  _id: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};
type AccountValue = {
  currentUser: User | null;
  users: User[];
  setCurrentUser: (user: User | null) => void;
  saveUser: (user: User) => Promise<User>;
};
const AccountContext = createContext<AccountValue | null>(null);
export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null),
    [users, setUsers] = useState<User[]>([]),
    [pending, setPending] = useState(true),
    [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const [user, rows] = await Promise.all([
          client.profile().catch((e) => {
            if (axios.isAxiosError(e) && e.response?.status === 401)
              return null;
            throw e;
          }),
          client.findAllUsers(),
          useCoursesStore.getState().load(),
          useEnrollmentsStore.getState().load(),
        ]);
        if (active) {
          setCurrentUser(user);
          setUsers(rows);
        }
      } catch (e) {
        if (active) setError(errorMessage(e));
      } finally {
        if (active) setPending(false);
      }
    };
    void load();
    return () => {
      active = false;
    };
  }, []);
  const saveUser = async (user: User) => {
    const saved = await client.saveUser(user);
    setUsers((rows) => [...rows.filter((u) => u._id !== saved._id), saved]);
    if (currentUser?._id === saved._id) setCurrentUser(saved);
    return saved;
  };
  if (pending)
    return (
      <p role="status" className="p-6">
        Loading Kambaz…
      </p>
    );
  if (error)
    return (
      <div className="p-6">
        <p role="alert">{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  return (
    <AccountContext.Provider
      value={{ currentUser, users, setCurrentUser, saveUser }}
    >
      {children}
    </AccountContext.Provider>
  );
}
export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) throw new Error("useAccountContext requires AccountProvider");
  return value;
}
