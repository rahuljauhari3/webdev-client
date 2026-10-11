import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  const fieldClass =
    "block w-full min-w-0 rounded border border-neutral-300 " +
    "bg-white px-3 py-2 text-base text-neutral-900 " +
    "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  const labelClass = "mb-2 block font-medium";

  const rowClass =
    "grid items-start gap-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4";

  const rowLabelClass =
    "block font-medium sm:pt-2 sm:text-right";

  const entryOptions = [
    { id: "wd-text-entry", label: "Text Entry" },
    { id: "wd-website-url", label: "Website URL" },
    { id: "wd-media-recordings", label: "Media Recordings" },
    { id: "wd-student-annotation", label: "Student Annotation" },
    { id: "wd-file-upload", label: "File Uploads" },
  ];

  return (
    <div
      id="wd-assignments-editor"
      className="w-full max-w-3xl pb-8"
    >
      <div className="mb-5">
        <label htmlFor="wd-name" className={labelClass}>
          Assignment Name
        </label>

        <input
          id="wd-name"
          type="text"
          defaultValue="A1 - ENV + HTML"
          className={fieldClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wd-description" className={labelClass}>
          Description
        </label>

        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="space-y-5">
        <div className={rowClass}>
          <label htmlFor="wd-points" className={rowLabelClass}>
            Points
          </label>

          <input
            id="wd-points"
            type="number"
            defaultValue={100}
            className={fieldClass}
          />
        </div>

        <div className={rowClass}>
          <label htmlFor="wd-group" className={rowLabelClass}>
            Assignment Group
          </label>

          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className={fieldClass}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        <div className={rowClass}>
          <label
            htmlFor="wd-display-grade-as"
            className={rowLabelClass}
          >
            Display Grade as
          </label>

          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            className={fieldClass}
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </select>
        </div>

        <div className={rowClass}>
          <label
            htmlFor="wd-submission-type"
            className={rowLabelClass}
          >
            Submission Type
          </label>

          <div className="rounded border border-neutral-300 p-4">
            <select
              id="wd-submission-type"
              defaultValue="Online"
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
                      defaultChecked={id === "wd-website-url"}
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
                defaultValue="Everyone"
                className={fieldClass}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="wd-due-date" className={labelClass}>
                Due
              </label>

              <input
                id="wd-due-date"
                type="date"
                defaultValue="2026-10-01"
                className={fieldClass}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="wd-available-from"
                  className={labelClass}
                >
                  Available from
                </label>

                <input
                  id="wd-available-from"
                  type="date"
                  defaultValue="2026-09-20"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="wd-available-until"
                  className={labelClass}
                >
                  Until
                </label>

                <input
                  id="wd-available-until"
                  type="date"
                  defaultValue="2026-10-08"
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

        <Link
          id="wd-save"
          href={`/courses/${cid}/assignments`}
          className="
            rounded border border-red-600
            bg-red-600 px-4 py-2
            text-white no-underline
            hover:bg-red-700
          "
        >
          Save
        </Link>
      </div>
    </div>
  );
}