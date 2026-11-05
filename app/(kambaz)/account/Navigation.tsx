"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? [{ href: "/account/profile", label: "Profile" }]
    : [
        { href: "/account/signin", label: "Sign in" },
        { href: "/account/signup", label: "Sign up" },
      ];
  return (
    <nav
      id="wd-account-navigation"
      aria-label="Account navigation"
      className="wd list-group text-lg"
    >
      {currentUser && <p>{currentUser.firstName || currentUser.username}</p>}
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={pathname === l.href ? "page" : undefined}
          className={`list-group-item ${pathname === l.href ? "active" : ""}`}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
