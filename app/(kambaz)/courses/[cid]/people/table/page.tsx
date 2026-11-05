"use client";
import useConfirmation from "@/app/(kambaz)/components/useConfirmation";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  emptyUser,
  useAccountContext,
} from "@/app/(kambaz)/account/AccountContext";
import { useEnrollmentsStore } from "@/app/(kambaz)/store/enrollmentsStore";
export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { users, saveUser, currentUser } = useAccountContext();
  const { enrollments, enroll, unenroll } = useEnrollmentsStore();
  const { confirm, confirmation } = useConfirmation();
  const [person, setPerson] = useState({ ...emptyUser });
  const canEdit =
    !currentUser || ["FACULTY", "ADMIN"].includes(currentUser.role);
  const people = users.filter((u) =>
    enrollments.some((e) => e.course === cid && e.user === u._id),
  );
  return (
    <div id="wd-people-table">
      {confirmation}
      <h2>People</h2>
      {canEdit && (
        <form
          className="a4-form max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            const existing = users.find(
              (u) => u.username === person.username.trim(),
            );
            const user = {
              ...person,
              username: person.username.trim(),
              _id: person._id || existing?._id || crypto.randomUUID(),
              password: person.password || existing?.password || "123",
            };
            saveUser(user);
            enroll(user._id, cid);
            setPerson({ ...emptyUser });
          }}
        >
          <h3>{person._id ? "Edit person" : "Add person"}</h3>
          {(["username", "firstName", "lastName"] as const).map((k) => (
            <label key={k}>
              {k}
              <input
                required
                value={person[k]}
                onChange={(e) => setPerson({ ...person, [k]: e.target.value })}
              />
            </label>
          ))}
          <label>
            Role
            <select
              value={person.role}
              onChange={(e) => setPerson({ ...person, role: e.target.value })}
            >
              {["STUDENT", "TA", "FACULTY", "ADMIN", "USER"].map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <button>Save person</button>{" "}
          <button type="button" onClick={() => setPerson({ ...emptyUser })}>
            Cancel
          </button>
        </form>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              {[
                "Name",
                "Login ID",
                "Section",
                "Role",
                "Last Activity",
                "Total Activity",
                ...(canEdit ? ["Actions"] : []),
              ].map((h) => (
                <th key={h} className="p-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {people.map((p) => (
              <tr key={p._id} className="border-b border-neutral-200">
                <td className="p-3">
                  {p.firstName} {p.lastName}
                </td>
                <td>{p.username}</td>
                <td>{p.section || cid}</td>
                <td>{p.role}</td>
                <td>{p.lastActivity}</td>
                <td>{p.totalActivity}</td>
                {canEdit && (
                  <td>
                    <button onClick={() => setPerson({ ...p })}>Edit</button>{" "}
                    <button
                      onClick={() => {
                        confirm("Remove this person from the course?", () =>
                          unenroll(p._id, cid),
                        );
                      }}
                    >
                      Remove
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
