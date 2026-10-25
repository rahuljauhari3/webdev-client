import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { courses } from "../../database";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = courses.find((item) => item._id === cid);

  if (!course) notFound();

  return (
    <div id="wd-courses">
      <Breadcrumb name={course.name} />
      <hr />

      <div className="flex gap-4 pt-4">
        <div className="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}