"use client";
import { useState } from "react";
import Link from "next/link";
export default function UrlEncoding() {
  const [a, setA] = useState("2");
  const [b, setB] = useState("3");
  const [c, setC] = useState("4");
  return (
    <section id="wd-url-encoding">
      <h2>Encoding State in the URL</h2>
      <label>
        A
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </label>
      <label>
        B
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </label>
      <label>
        C
        <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
      </label>
      <p>
        <Link
          href={`/labs/lab4/url-encoding/query-params?a=${Number(a)}&b=${Number(b)}&c=${Number(c)}`}
        >
          Query parameters
        </Link>
      </p>
      <p>
        <Link
          href={`/labs/lab4/url-encoding/path-params/${Number(a)}/${Number(b)}`}
        >
          Path parameters (A + B)
        </Link>
      </p>
      <p>
        <Link
          href={`/labs/lab4/url-encoding/path-params/${Number(a)}/${Number(b)}/${Number(c)}`}
        >
          Path parameters (A + B + C)
        </Link>
      </p>
    </section>
  );
}
