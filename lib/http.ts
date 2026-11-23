import axios from "axios";
export const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER?.replace(/\/$/, "") ?? "";
export const http = axios.create({
  baseURL: HTTP_SERVER,
  withCredentials: true,
  timeout: 60000,
});
http.interceptors.request.use((config) => {
  if (!HTTP_SERVER)
    throw new Error("Set NEXT_PUBLIC_HTTP_SERVER to your Express server URL.");
  return config;
});
export function errorMessage(error: unknown): string {
  if (axios.isAxiosError(error))
    return error.response?.data?.message || error.message;
  return error instanceof Error
    ? error.message
    : "Request failed. Please try again.";
}
