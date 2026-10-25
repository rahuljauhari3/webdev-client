"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/labs", label: "Home" },
  { href: "/labs/lab1", label: "Lab 1" },
  { href: "/labs/lab2", label: "Lab 2" },
  { href: "/labs/lab3", label: "Lab 3" },
  { href: "/labs/lab4", label: "Lab 4" },
  { href: "/labs/lab5", label: "Lab 5" },
  { href: "/dashboard", label: "Kambaz" },
];

export default function TOC() {
  const pathname = usePathname();

  return (
    <nav aria-label="Labs navigation" className="p-2">
      <p className="font-semibold">Rahul Manish Jauhari</p>
      <a
        href="https://github.com/rahuljauhari3/webdev-client"
        className="text-blue-700 underline"
      >
        GitHub repository
      </a>

      <ul className="mt-4 space-y-2">
        {links.map(({ href, label }) => {
          const active =
            pathname === href ||
            (href !== "/labs" && pathname.startsWith(`${href}/`));

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "block rounded bg-red-600 p-2 text-white"
                    : "block rounded p-2 text-blue-700"
                }
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}