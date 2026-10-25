import { FaEllipsisV, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { assignments } from "@/app/(kambaz)/database";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <label
          className="
            flex items-center gap-2
            rounded border border-neutral-300
            bg-white px-3 py-2
            focus-within:ring-2 focus-within:ring-blue-500
          "
        >
          <FaSearch aria-hidden="true" className="text-neutral-500" />

          <span className="sr-only">Search assignments</span>

          <input
            id="wd-search-assignment"
            type="search"
            placeholder="Search for Assignments"
            className="
              min-w-0 border-0 bg-transparent
              text-base outline-none
            "
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="
              rounded border border-neutral-300
              bg-neutral-100 px-4 py-2
              text-neutral-900 hover:bg-neutral-200
            "
          >
            + Group
          </button>

          <button
            id="wd-add-assignment"
            type="button"
            className="
              rounded border border-red-600
              bg-red-600 px-4 py-2
              text-white hover:bg-red-700
            "
          >
            + Assignment
          </button>
        </div>
      </div>

      <div className="overflow-hidden border border-neutral-300">
        <div
          className="
            flex flex-wrap items-center justify-between gap-3
            border-b border-neutral-300
            bg-neutral-200 p-4
          "
        >
          <h3
            id="wd-assignments-title"
            className="m-0 text-lg font-semibold"
          >
            ASSIGNMENTS
          </h3>

          <div className="flex items-center gap-3">
            <span
              className="
                rounded-full border border-neutral-400
                px-3 py-1 text-sm
              "
            >
              40% of Total
            </span>

            <button
              type="button"
              aria-label="Add assignment to group"
              className="border-0 bg-transparent px-1 text-xl"
            >
              +
            </button>

            <button
              type="button"
              aria-label="Assignment group options"
              className="border-0 bg-transparent p-1"
            >
              <FaEllipsisV aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <AssignmentItem
              key={assignment._id}
              cid={cid}
              aid={assignment._id}
              title={assignment.title}
              details={`Due ${assignment.dueDate} | ${assignment.points} pts`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}