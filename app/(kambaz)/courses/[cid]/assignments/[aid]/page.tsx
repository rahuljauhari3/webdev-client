import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />

      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
      />

      <br />
      <br />

      <label htmlFor="wd-description">
        Description
      </label>
      <br />

      <textarea
        id="wd-description"
        rows={5}
        cols={50}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      />

      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">
                Points
              </label>
            </td>

            <td>
              <input
                id="wd-points"
                type="number"
                defaultValue={100}
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">
                Assignment Group
              </label>
            </td>

            <td>
              <select
                id="wd-group"
                defaultValue="ASSIGNMENTS"
              >
                <option value="ASSIGNMENTS">
                  ASSIGNMENTS
                </option>
                <option value="QUIZZES">
                  QUIZZES
                </option>
                <option value="EXAMS">
                  EXAMS
                </option>
                <option value="PROJECT">
                  PROJECT
                </option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">
                Display Grade as
              </label>
            </td>

            <td>
              <select
                id="wd-display-grade-as"
                defaultValue="Percentage"
              >
                <option value="Percentage">
                  Percentage
                </option>
                <option value="Points">
                  Points
                </option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">
                Submission Type
              </label>
            </td>

            <td>
              <select
                id="wd-submission-type"
                defaultValue="Online"
              >
                <option value="Online">
                  Online
                </option>
                <option value="Paper">
                  On Paper
                </option>
                <option value="None">
                  No Submission
                </option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              Online Entry Options
            </td>

            <td>
              <input
                id="wd-text-entry"
                type="checkbox"
              />
              <label htmlFor="wd-text-entry">
                Text Entry
              </label>
              <br />

              <input
                id="wd-website-url"
                type="checkbox"
                defaultChecked
              />
              <label htmlFor="wd-website-url">
                Website URL
              </label>
              <br />

              <input
                id="wd-media-recordings"
                type="checkbox"
              />
              <label htmlFor="wd-media-recordings">
                Media Recordings
              </label>
              <br />

              <input
                id="wd-student-annotation"
                type="checkbox"
              />
              <label htmlFor="wd-student-annotation">
                Student Annotation
              </label>
              <br />

              <input
                id="wd-file-upload"
                type="checkbox"
              />
              <label htmlFor="wd-file-upload">
                File Uploads
              </label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">
                Assign to
              </label>
            </td>

            <td>
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">
                Due
              </label>
            </td>

            <td>
              <input
                id="wd-due-date"
                type="date"
                defaultValue="2026-10-01"
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">
                Available from
              </label>
            </td>

            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2026-09-20"
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">
                Until
              </label>
            </td>

            <td>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2026-10-08"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <Link
        href={`/courses/${cid}/assignments`}
        id="wd-cancel"
      >
        Cancel
      </Link>

      {" "}

      <Link
        href={`/courses/${cid}/assignments`}
        id="wd-save"
      >
        Save
      </Link>
    </div>
  );
}