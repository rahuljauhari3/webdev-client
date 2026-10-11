"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({
  cid,
}: {
  cid: string;
}) {
  const pathname = usePathname();

  const links = [
    {
      path: "home",
      label: "Home",
      id: "wd-course-home-link",
    },
    {
      path: "modules",
      label: "Modules",
      id: "wd-course-modules-link",
    },
    {
      path: "piazza",
      label: "Piazza",
      id: "wd-course-piazza-link",
    },
    {
      path: "zoom",
      label: "Zoom",
      id: "wd-course-zoom-link",
    },
    {
      path: "assignments",
      label: "Assignments",
      id: "wd-course-assignments-link",
    },
    {
      path: "quizzes",
      label: "Quizzes",
      id: "wd-course-quizzes-link",
    },
    {
      path: "grades",
      label: "Grades",
      id: "wd-course-grades-link",
    },
    {
      path: "people/table",
      label: "People",
      id: "wd-course-people-link",
    },
  ];

  return (
    <nav
      id="wd-courses-navigation"
      aria-label="Course navigation"
      className="wd list-group text-lg"
    >
      {/* On your own: apply the pattern to every course link. */}
      {links.map((link) => {
        const href = `/courses/${cid}/${link.path}`;

        const active =
          pathname === href ||
          pathname.startsWith(`${href}/`);

        return (
          <Link
            key={link.id}
            id={link.id}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`list-group-item${active ? " active" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}

      {/* With AI: an additional sample link. */}
      <Link
        id="wd-course-ai-link"
        href={`/courses/${cid}/home`}
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </nav>
  );
}