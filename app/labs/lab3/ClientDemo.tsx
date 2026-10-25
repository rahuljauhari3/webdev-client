"use client";

import { usePathname } from "next/navigation";

export default function ClientDemo() {
  const pathname = usePathname();

  return (
    <section>
      <h3>Client Component</h3>
      <p>Pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
    </section>
  );
}