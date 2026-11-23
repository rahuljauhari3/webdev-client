"use client";
import { useEffect, useState } from "react";
import useConfirmation from "../components/useConfirmation";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import * as client from "../courses/client";
import useRequest from "../components/useRequest";

import { useAccountContext } from "../account/AccountContext";
export default function Dashboard() {
  const { courses, addCourse, updateCourse, deleteCourse } = useCoursesStore();
  const { enrollments, enroll, unenroll, removeCourse } = useEnrollmentsStore();
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>({ ...emptyCourse });
  const { confirm, confirmation } = useConfirmation();
  const [showAll, setShowAll] = useState(false);
  const enrolled = (id: string) =>
    !!currentUser &&
    enrollments.some((e) => e.user === currentUser._id && e.course === id);
  const { run, pending, feedback } = useRequest();
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  useEffect(() => {
    let active = true;
    void run(async () => {
      const rows = currentUser ? await client.findMyCourses() : [];
      if (active) setMyCourses(rows);
    });
    return () => {
      active = false;
    };
  }, [currentUser, enrollments, courses, run]);
  const visible = !currentUser || showAll ? courses : myCourses;
  const canEdit =
    !!currentUser && ["FACULTY", "ADMIN"].includes(currentUser.role);
  const remove = async (id: string) => {
    await deleteCourse(id);
    removeCourse(id);
    if (course._id === id) setCourse({ ...emptyCourse });
  };
  return (
    <div id="wd-dashboard">
      {confirmation}
      {feedback}
      {pending && <p role="status">Loading courses…</p>}
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            id="wd-enrollments-toggle"
            className="a4-primary"
            onClick={() => setShowAll(!showAll)}
            aria-pressed={showAll}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      {canEdit && (
        <form
          className="a4-form mb-5 max-w-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            if (!course.name.trim()) return;
            void run(async () => {
              await addCourse({ ...course, name: course.name.trim() });
              await useEnrollmentsStore.getState().load();
              setCourse({ ...emptyCourse });
            });
          }}
        >
          <h2>Course form</h2>
          <label>
            Course name
            <input
              id="wd-course-name"
              required
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </label>
          <label>
            Description
            <textarea
              id="wd-course-description"
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </label>
          <label>
            Course number
            <input
              id="wd-course-number"
              value={course.number}
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </label>
          <label>
            Start date
            <input
              id="wd-course-start-date"
              type="date"
              value={course.startDate}
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
          </label>
          <div className="flex gap-2">
            <button
              id="wd-add-course-click"
              className="a4-primary"
              type="submit"
            >
              Add
            </button>
            <button
              id="wd-update-course-click"
              type="button"
              disabled={!course._id || !course.name.trim()}
              onClick={() => {
                void run(async () => {
                  await updateCourse({ ...course, name: course.name.trim() });
                  setCourse({ ...emptyCourse });
                });
              }}
            >
              Update
            </button>
            <button type="button" onClick={() => setCourse({ ...emptyCourse })}>
              Clear
            </button>
          </div>
        </form>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({visible.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-8 py-4"
      >
        {visible.map((c) => (
          <CourseCard
            key={c._id}
            id={c._id}
            title={c.name}
            subtitle={c.description}
            image={c.image}
            number={c.number}
            startDate={c.startDate}
            canEdit={canEdit}
            onEdit={() => {
              setCourse({ ...c });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onDelete={() =>
              confirm(`Delete course "${c.name}"?`, () => {
                void run(() => remove(c._id));
              })
            }
            canOpen={!currentUser || enrolled(c._id)}
            enrolled={enrolled(c._id)}
            onEnroll={
              currentUser
                ? () => {
                    void run(() =>
                      enrolled(c._id)
                        ? unenroll(currentUser._id, c._id)
                        : enroll(currentUser._id, c._id),
                    );
                  }
                : undefined
            }
          />
        ))}
      </div>
      {visible.length === 0 && (
        <p>No enrolled courses. Use Enrollments to browse courses.</p>
      )}
    </div>
  );
}
