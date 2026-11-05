"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useCoursesStore } from "../../store/coursesStore";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import { useAccountContext } from "../../account/AccountContext";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const course = useCoursesStore((s) => s.courses.find((c) => c._id === cid));
  const enrollments = useEnrollmentsStore((s) => s.enrollments);
  const { currentUser } = useAccountContext();
  const [showNavigation, setShowNavigation] = useState(true);
  const router = useRouter();
  const blocked =
    !!currentUser &&
    !enrollments.some((e) => e.user === currentUser._id && e.course === cid);
  useEffect(() => {
    if (blocked) router.replace("/dashboard");
  }, [blocked, router]);
  if (!course)
    return (
      <>
        <h1>Course not found</h1>
        <Link href="/dashboard">Dashboard</Link>
      </>
    );
  if (blocked) return null;
  return (
    <div id="wd-courses">
      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle Course Navigation"
          aria-expanded={showNavigation}
          onClick={() => setShowNavigation(!showNavigation)}
        >
          <FaBars />
        </button>
        <Breadcrumb name={course.name} />
      </div>
      <hr />
      <div className="flex flex-col gap-4 pt-4 md:flex-row">
        {showNavigation && (
          <aside className="w-full shrink-0 md:w-[140px]">
            <CourseNavigation cid={cid} />
          </aside>
        )}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
