import { FaUserCircle } from "react-icons/fa";

const people = [
  // Course examples
  [
    "Tony Stark",
    "001234561",
    "SS101",
    "STUDENT",
    "2020-10-01",
    "10:21:32",
  ],
  [
    "Bruce Wayne",
    "001234562",
    "SS101",
    "STUDENT",
    "2020-11-02",
    "23:32:23",
  ],
  [
    "Steve Rogers",
    "001234563",
    "SS101",
    "STUDENT",
    "2020-10-02",
    "13:21:32",
  ],
  [
    "Natasha Romanoff",
    "001234564",
    "SS101",
    "TA",
    "2020-11-05",
    "11:22:33",
  ],

  [
    "Raj Kumar",
    "practice-1",
    "SS101",
    "STUDENT",
    "2026-10-01",
    "01:15:00",
  ],
  [
    "Mohan Patel",
    "practice-2",
    "SS101",
    "STUDENT",
    "2026-10-02",
    "02:10:00",
  ],
  [
    "Sita Sharma",
    "practice-3",
    "SS101",
    "STUDENT",
    "2026-10-03",
    "03:05:00",
  ],

  // With AI: three separate sample rows.
  [
    "Jane Sample",
    "ai-1",
    "SS101",
    "STUDENT",
    "2026-10-04",
    "01:00:00",
  ],
  [
    "Alex Sample",
    "ai-2",
    "SS101",
    "STUDENT",
    "2026-10-05",
    "02:00:00",
  ],
  [
    "Sam Sample",
    "ai-3",
    "SS101",
    "STUDENT",
    "2026-10-06",
    "03:00:00",
  ],
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <h2>People</h2>

      <table className="w-full min-w-[700px] border-collapse text-left text-sm">
        <thead className="border-b border-neutral-300">
          <tr>
            <th scope="col" className="p-3">
              Name
            </th>

            <th scope="col" className="p-3">
              Login ID
            </th>

            <th scope="col" className="p-3">
              Section
            </th>

            <th scope="col" className="p-3">
              Role
            </th>

            <th scope="col" className="p-3">
              Last Activity
            </th>

            <th scope="col" className="p-3">
              Total Activity
            </th>
          </tr>
        </thead>

        <tbody>
          {people.map(
            ([name, login, section, role, lastActivity, totalActivity]) => (
              <tr
                key={login}
                className="border-b border-neutral-200 odd:bg-neutral-50"
              >
                <td className="p-3">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <FaUserCircle
                      aria-hidden="true"
                      className="shrink-0 text-3xl text-neutral-500"
                    />

                    <span className="font-medium text-blue-700">
                      {name}
                    </span>
                  </span>
                </td>

                <td className="p-3">
                  {login}
                </td>

                <td className="p-3">
                  {section}
                </td>

                <td className="p-3">
                  {role}
                </td>

                <td className="whitespace-nowrap p-3">
                  {lastActivity}
                </td>

                <td className="p-3">
                  {totalActivity}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}