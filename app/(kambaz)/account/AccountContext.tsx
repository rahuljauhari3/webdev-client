"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import seed from "../database/users.json";
export type User = (typeof seed)[number] & {
  password: string;
  email: string;
  dob: string;
  loginId: string;
  section: string;
};
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
const initialUsers: User[] = seed.map((u) => ({
  ...emptyUser,
  ...u,
  password: "123",
  email: `${u.username}@example.com`,
}));
initialUsers.push({
  ...emptyUser,
  _id: "U4",
  username: "faculty",
  password: "123",
  firstName: "Demo",
  lastName: "Faculty",
  role: "FACULTY",
});
type AccountValue = {
  currentUser: User | null;
  users: User[];
  setCurrentUser: (user: User | null) => void;
  saveUser: (user: User) => void;
};
const AccountContext = createContext<AccountValue | null>(null);
export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState(initialUsers);
  const saveUser = (user: User) => {
    setUsers((previous) =>
      previous.some((u) => u._id === user._id)
        ? previous.map((u) => (u._id === user._id ? { ...user } : u))
        : [...previous, { ...user }],
    );
    if (currentUser?._id === user._id) setCurrentUser({ ...user });
  };
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
