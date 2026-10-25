import { FaUserCircle } from "react-icons/fa";
import { users, enrollments } from "@/app/(kambaz)/database";

export default async function PeopleTable({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const enrolledIds = new Set(
    enrollments
      .filter((enrollment) => enrollment.course === cid)
      .map((enrollment) => enrollment.user),
  );

  const people = users.filter((user) => enrolledIds.has(user._id));

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <h2>People</h2>
      <table className="w-full min-w-[700px] border-collapse text-left text-sm">
        <thead className="border-b border-neutral-300">
          <tr>
            {[
              "Name",
              "Login ID",
              "Section",
              "Role",
              "Last Activity",
              "Total Activity",
            ].map((heading) => (
              <th key={heading} scope="col" className="p-3">
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {people.map((person) => (
            <tr
              key={person._id}
              className="border-b border-neutral-200 odd:bg-neutral-50"
            >
              <td className="p-3">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <FaUserCircle
                    aria-hidden="true"
                    className="text-3xl text-neutral-500"
                  />
                  <span className="font-medium text-blue-700">
                    {person.firstName} {person.lastName}
                  </span>
                </span>
              </td>
              <td className="p-3">{person.username}</td>
              <td className="p-3">{cid}</td>
              <td className="p-3">{person.role}</td>
              <td className="p-3">{person.lastActivity}</td>
              <td className="p-3">{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}