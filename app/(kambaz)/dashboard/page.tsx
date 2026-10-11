import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
      </h1>

      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses (4)
      </h2>

      <hr />

      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-8 py-4"
      >
        {/* On your own: personalize this course subtitle. */}
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Building React interfaces that works"
          image="/images/reactjs.jpg"
        />

        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.jpg"
        />

        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.jpg"
        />

        {/* With AI: a separate fourth sample card. */}
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}