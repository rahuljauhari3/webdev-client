import CourseCard from "./CourseCard";
import { courses } from "../database";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-8 py-4"
      >
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            title={course.name}
            subtitle={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}