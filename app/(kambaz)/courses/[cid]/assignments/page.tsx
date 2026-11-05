"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import useConfirmation from "@/app/(kambaz)/components/useConfirmation";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "@/app/(kambaz)/store/assignmentsStore";
import { useAccountContext } from "@/app/(kambaz)/account/AccountContext";
export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const { assignments, deleteAssignment } = useAssignmentsStore();
  const { currentUser } = useAccountContext();
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const { confirm, confirmation } = useConfirmation();
  const [search, setSearch] = useState("");
  return (
    <div id="wd-assignments">
      {confirmation}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <label>
          Search assignments{" "}
          <input
            id="wd-search-assignment"
            type="search"
            placeholder="Search for Assignments"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        {canEdit && (
          <Link
            className="a4-primary"
            id="wd-add-assignment"
            href={`/courses/${cid}/assignments/new`}
          >
            + Assignment
          </Link>
        )}
      </div>
      <div className="overflow-hidden border border-neutral-300">
        <h3 id="wd-assignments-title" className="m-0 bg-neutral-200 p-4">
          ASSIGNMENTS
        </h3>
        <ul id="wd-assignment-list" className="m-0 list-none p-0">
          {assignments
            .filter(
              (a) =>
                a.course === cid &&
                a.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map((a) => (
              <AssignmentItem
                key={a._id}
                cid={cid}
                aid={a._id}
                title={a.title}
                details={`Due ${a.dueDate || "not set"} | ${a.points} pts`}
                canEdit={canEdit}
                onDelete={() =>
                  confirm(`Delete assignment "${a.title}"?`, () =>
                    deleteAssignment(a._id, cid),
                  )
                }
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
