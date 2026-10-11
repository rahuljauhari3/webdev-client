"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/account/signin", label: "Signin" },
    { href: "/account/signup", label: "Signup" },
    { href: "/account/profile", label: "Profile" },
  ];

  return (
    <nav
      id="wd-account-navigation"
      aria-label="Account navigation"
      className="wd list-group text-lg"
    >
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
          className={`list-group-item ${
            pathname === href ? "active" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}