import Link from "next/link";
import {
  FaEllipsisV,
  FaGripVertical,
  FaRegFileAlt,
} from "react-icons/fa";
import GreenCheckmark from "../modules/GreenCheckmark";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li
      className="
        wd-assignment-list-item
        flex items-center gap-3
        border-b border-neutral-300
        border-l-[3px] border-l-green-600
        bg-white p-4
      "
    >
      <FaGripVertical
        aria-hidden="true"
        className="shrink-0 text-neutral-500"
      />

      <FaRegFileAlt
        aria-hidden="true"
        className="shrink-0 text-xl text-green-600"
      />

      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="
            wd-assignment-link
            font-semibold text-neutral-900
            no-underline hover:underline
          "
        >
          {title}
        </Link>

        <p className="m-0 mt-1 text-sm text-neutral-600">
          {details}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <GreenCheckmark />

        <button
          type="button"
          aria-label={`More options for ${title}`}
          className="border-0 bg-transparent p-1 text-neutral-600"
        >
          <FaEllipsisV aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}