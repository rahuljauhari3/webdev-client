"use client";

import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  home: "Home",
  modules: "Modules",
  assignments: "Assignments",
  people: "People",
  quizzes: "Quizzes",
  grades: "Grades",
  piazza: "Piazza",
  zoom: "Zoom",
};

export default function Breadcrumb({ name }: { name: string }) {
  const pathname = usePathname();
  const section = pathname.split("/")[3] ?? "home";

  return (
    <h2 id="wd-course-breadcrumb">
      {name} &gt; {labels[section] ?? section}
    </h2>
  );
}