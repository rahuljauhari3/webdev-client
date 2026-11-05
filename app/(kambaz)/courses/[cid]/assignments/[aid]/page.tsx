"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  useAssignmentsStore,
  emptyAssignment,
  type Assignment,
} from "@/app/(kambaz)/store/assignmentsStore";
import { useAccountContext } from "@/app/(kambaz)/account/AccountContext";
function EditorForm({
  initial,
  isNew,
}: {
  initial: Assignment;
  isNew: boolean;
}) {
  const [assignment, setAssignment] = useState({ ...initial });
  const { addAssignment, updateAssignment } = useAssignmentsStore();
  const router = useRouter();
  const cid = assignment.course;
  const change = (field: keyof Assignment, value: string | number | string[]) =>
    setAssignment((previous) => ({ ...previous, [field]: value }));
  const fieldClass =
    "block w-full min-w-0 rounded border border-neutral-300 " +
    "bg-white px-3 py-2 text-base text-neutral-900 " +
    "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  const labelClass = "mb-2 block font-medium";

  const rowClass =
    "grid items-start gap-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4";

  const rowLabelClass = "block font-medium sm:pt-2 sm:text-right";

  const entryOptions = [
    { id: "wd-text-entry", label: "Text Entry" },
    { id: "wd-website-url", label: "Website URL" },
    { id: "wd-media-recordings", label: "Media Recordings" },
    { id: "wd-student-annotation", label: "Student Annotation" },
    { id: "wd-file-upload", label: "File Uploads" },
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!assignment.title.trim()) return;
        const saved = { ...assignment, title: assignment.title.trim() };
        if (isNew) addAssignment(saved);
        else updateAssignment(saved);
        router.push(`/courses/${cid}/assignments`);
      }}
      id="wd-assignments-editor"
      className="w-full max-w-3xl pb-8"
    >
      <div className="mb-5">
        <label htmlFor="wd-name" className={labelClass}>
          Assignment Name
        </label>

        <input
          key={`${assignment._id}-name`}
          id="wd-name"
          required
          type="text"
          value={assignment.title}
          onChange={(e) => change("title", e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-description" className={labelClass}>
          Description
        </label>

        <textarea
          key={`${assignment._id}-description`}
          id="wd-description"
          rows={5}
          value={assignment.description}
          onChange={(e) => change("description", e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="space-y-5">
        <div className={rowClass}>
          <label htmlFor="wd-points" className={rowLabelClass}>
            Points
          </label>

          <input
            key={`${assignment._id}-points`}
            id="wd-points"
            min="0"
            type="number"
            value={assignment.points}
            onChange={(e) => change("points", Number(e.target.value))}
            className={fieldClass}
          />
        </div>

        <div className={rowClass}>
          <label htmlFor="wd-group" className={rowLabelClass}>
            Assignment Group
          </label>

          <select
            id="wd-group"
            value={assignment.group}
            onChange={(e) => change("group", e.target.value)}
            className={fieldClass}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        <div className={rowClass}>
          <label htmlFor="wd-display-grade-as" className={rowLabelClass}>
            Display Grade as
          </label>

          <select
            id="wd-display-grade-as"
            value={assignment.gradeAs}
            onChange={(e) => change("gradeAs", e.target.value)}
            className={fieldClass}
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </select>
        </div>

        <div className={rowClass}>
          <label htmlFor="wd-submission-type" className={rowLabelClass}>
            Submission Type
          </label>

          <div className="rounded border border-neutral-300 p-4">
            <select
              id="wd-submission-type"
              value={assignment.submissionType}
              onChange={(e) => change("submissionType", e.target.value)}
              className={fieldClass}
            >
              <option value="Online">Online</option>
              <option value="Paper">On Paper</option>
              <option value="None">No Submission</option>
            </select>

            <fieldset className="m-0 mt-5 min-w-0 border-0 p-0">
              <legend className="mb-3 font-semibold">
                Online Entry Options
              </legend>

              <div className="space-y-3">
                {entryOptions.map(({ id, label }) => (
                  <div key={id} className="flex items-center gap-2">
                    <input
                      id={id}
                      type="checkbox"
                      checked={assignment.entryOptions.includes(label)}
                      onChange={(e) =>
                        change(
                          "entryOptions",
                          e.target.checked
                            ? [...assignment.entryOptions, label]
                            : assignment.entryOptions.filter(
                                (option) => option !== label,
                              ),
                        )
                      }
                      className="h-4 w-4 accent-blue-600"
                    />

                    <label htmlFor={id}>{label}</label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <div className={rowClass}>
          <span className={rowLabelClass}>Assign</span>

          <div className="rounded border border-neutral-300 p-4">
            <div className="mb-4">
              <label htmlFor="wd-assign-to" className={labelClass}>
                Assign to
              </label>

              <input
                id="wd-assign-to"
                type="text"
                value={assignment.assignTo}
                onChange={(e) => change("assignTo", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="wd-due-date" className={labelClass}>
                Due
              </label>

              <input
                key={`${assignment._id}-due`}
                id="wd-due-date"
                type="date"
                value={assignment.dueDate}
                onChange={(e) => change("dueDate", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <label htmlFor="wd-available-from" className={labelClass}>
                  Available from
                </label>

                <input
                  id="wd-available-from"
                  type="date"
                  value={assignment.availableFrom}
                  onChange={(e) => change("availableFrom", e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="wd-available-until" className={labelClass}>
                  Until
                </label>

                <input
                  id="wd-available-until"
                  type="date"
                  value={assignment.availableUntil}
                  onChange={(e) => change("availableUntil", e.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="wd-ai-editor-notes" className={labelClass}>
          Sample notes
        </label>

        <textarea
          id="wd-ai-editor-notes"
          value={assignment.notes}
          onChange={(e) => change("notes", e.target.value)}
          rows={3}
          placeholder="Add sample assignment notes"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="mt-6 flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          id="wd-cancel"
          href={`/courses/${cid}/assignments`}
          className="
            rounded border border-neutral-300
            bg-neutral-100 px-4 py-2
            text-neutral-900 no-underline
            hover:bg-neutral-200
          "
        >
          Cancel
        </Link>

        <button
          type="submit"
          id="wd-save"
          className="
            rounded border border-red-600
            bg-red-600 px-4 py-2
            text-white no-underline
            hover:bg-red-700
          "
        >
          Save
        </button>
      </div>
    </form>
  );
}
export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignments = useAssignmentsStore((s) => s.assignments);
  const { currentUser } = useAccountContext();
  const initial =
    aid === "new"
      ? { ...emptyAssignment, course: cid }
      : assignments.find((a) => a._id === aid && a.course === cid);
  if (currentUser && !["FACULTY", "ADMIN"].includes(currentUser.role))
    return (
      <p>
        Only faculty can edit assignments.{" "}
        <Link href={`/courses/${cid}/assignments`}>Back to assignments</Link>
      </p>
    );
  if (!initial)
    return (
      <p>
        Assignment not found.{" "}
        <Link href={`/courses/${cid}/assignments`}>Back to assignments</Link>
      </p>
    );
  return (
    <EditorForm key={`${cid}-${aid}`} initial={initial} isNew={aid === "new"} />
  );
}
