import { readdir } from "node:fs/promises";
import os from "node:os";

export default async function ServerDemo() {
  const entries = await readdir(process.cwd(), { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort();

  const info = {
    platform: os.platform(),
    arch: os.arch(),
    node: process.version,
  };

  return (
    <section>
      <h3>Server Component</h3>
      <h4>Files read on the server</h4>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <h4>Server Information</h4>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </section>
  );
}