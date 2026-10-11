import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>Rahul Jauhari</p>

      <p>
        <a
          id="wd-github"
          href="https://github.com/rahuljauhari3/webdev-client"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub repository
        </a>
      </p>

      <ul>
        <li>
          <Link href="/labs/lab1">
            Lab 1: HTML Examples
          </Link>
        </li>

        <li>
          <Link href="/labs/lab2">
            Lab 2: CSS Basics
          </Link>
        </li>

        <li>
          <Link href="/labs/lab3">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>

        <li>
          <Link href="/labs/lab4">
            Lab 4
          </Link>
        </li>

        <li>
          <Link href="/labs/lab5">
            Lab 5
          </Link>
        </li>

        <li>
          <Link href="/">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}