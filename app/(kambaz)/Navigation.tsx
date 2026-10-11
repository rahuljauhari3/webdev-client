import Link from "next/link";
import Image from "next/image";

import {
  FaCalendarAlt,
  FaFlask,
  FaInbox,
} from "react-icons/fa";

import {
  FaCircleQuestion,
  FaRegCircleUser,
} from "react-icons/fa6";

import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";

const tile =
  "block bg-black py-3 text-center text-white no-underline";

const icon =
  "mx-auto mb-1 block text-3xl text-red-600";

export default function KambazNavigation() {
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
        className={tile}
      >
        <Image
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto block"
        />
      </a>

      <Link
        id="wd-account-link"
        href="/account"
        className={tile}
      >
        <FaRegCircleUser
          className="mx-auto mb-1 block text-3xl text-white"
        />
        Account
      </Link>

      <Link
        id="wd-dashboard-link"
        href="/dashboard"
        className="block bg-white py-3 text-center text-red-600 no-underline"
      >
        <AiOutlineDashboard className={icon} />
        Dashboard
      </Link>

      <Link
        id="wd-course-link"
        href="/dashboard"
        className={tile}
      >
        <LiaBookSolid className={icon} />
        Courses
      </Link>

      <Link
        id="wd-calendar-link"
        href="/calendar"
        className={tile}
      >
        <FaCalendarAlt className={icon} />
        Calendar
      </Link>

      <Link
        id="wd-inbox-link"
        href="/inbox"
        className={tile}
      >
        <FaInbox className={icon} />
        Inbox
      </Link>

      {/* On your own practice: choose your preferred Labs icon. */}
      <a
        id="wd-labs-link"
        href="/labs"
        className={tile}
      >
        <FaFlask className={icon} />
        Labs
      </a>

      {/* With AI: an additional sample tile. */}
      <a
        id="wd-ai-nav-help"
        href="/labs"
        className={tile}
      >
        <FaCircleQuestion className={icon} />
        Help
      </a>
    </nav>
  );
}