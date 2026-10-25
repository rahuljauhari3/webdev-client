"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaCalendarAlt, FaFlask, FaInbox } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";

const links = [
  {
    label: "Account",
    href: "/account",
    prefix: "/account",
    icon: FaRegCircleUser,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    prefix: "/dashboard",
    icon: AiOutlineDashboard,
  },
  {
    label: "Courses",
    href: "/dashboard",
    prefix: "/courses",
    icon: LiaBookSolid,
  },
  {
    label: "Calendar",
    href: "/calendar",
    prefix: "/calendar",
    icon: FaCalendarAlt,
  },
  {
    label: "Inbox",
    href: "/inbox",
    prefix: "/inbox",
    icon: FaInbox,
  },
  {
    label: "Labs",
    href: "/labs",
    prefix: "/labs",
    icon: FaFlask,
  },
];

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <nav
      id="wd-kambaz-navigation"
      aria-label="Kambaz navigation"
      className="fixed inset-y-0 left-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      <a
        id="wd-neu-link"
        href="https://www.northeastern.edu/"
        target="_blank"
        rel="noreferrer"
        className="block py-3"
      >
        <Image
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>

      {links.map(({ label, href, prefix, icon: Icon }) => {
        const active =
          pathname === prefix || pathname.startsWith(`${prefix}/`);

        return (
          <Link
            key={label}
            id={`wd-${label.toLowerCase()}-link`}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`block py-3 text-center no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className="mx-auto mb-1 block text-3xl text-red-600" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}