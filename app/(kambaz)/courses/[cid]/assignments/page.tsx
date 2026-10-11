import { FaEllipsisV, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";

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
          <AssignmentItem
            cid={cid}
            aid="A1"
            title="A1 - ENV + HTML"
            details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="A2"
            title="A2 - CSS + TAILWIND"
            details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="A3"
            title="A3 - JAVASCRIPT + REACT"
            details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="practice-css"
            title="Practice - Responsive layout review"
            details="Multiple Modules | Not available until May 27 at 12:00am | Due June 3 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="ai-a"
            title="A9 - Sample assignment"
            details="Multiple Modules | Not available until June 3 at 12:00am | Due June 10 at 11:59pm | 100 pts"
          />
        </ul>
      </div>
    </div>
  );
}