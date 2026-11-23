import {
  Environment,
  Parameters,
  RemoteObjects,
  RemoteArrays,
} from "./Examples";
import {
  HttpClient,
  RemoteObjectsAsync,
  RemoteArraysAsync,
  NextRoutes,
} from "./AsyncExamples";
import "./lab5.css";
export default function Lab5() {
  return (
    <main id="wd-lab5">
      <h1>Lab 5 — RESTful Web APIs</h1>
      <p>
        Explore HTTP requests, remote data, and asynchronous clients. Link
        exercises open server responses in a new tab.
      </p>
      <Environment />
      <Parameters />
      <RemoteObjects />
      <RemoteArrays />
      <HttpClient />
      <RemoteObjectsAsync />
      <RemoteArraysAsync />
      <NextRoutes />
    </main>
  );
}
