import { http } from "@/lib/http";
import type { User } from "../types";
export const signin = async (credentials: {
  username: string;
  password: string;
}) => (await http.post<User>("/api/users/signin", credentials)).data;
export const signup = async (user: Partial<User>) =>
  (await http.post<User>("/api/users/signup", user)).data;
export const profile = async () =>
  (await http.get<User>("/api/users/profile")).data;
export const signout = async () => {
  await http.post("/api/users/signout");
};
export const findAllUsers = async () =>
  (await http.get<User[]>("/api/users")).data;
export const saveUser = async (user: User) =>
  (user._id
    ? await http.put<User>(`/api/users/${user._id}`, user)
    : await http.post<User>("/api/users", user)
  ).data;
