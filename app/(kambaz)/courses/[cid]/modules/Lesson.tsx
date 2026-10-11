import type { ReactNode } from "react";
import {
  FaEllipsisV,
  FaGripVertical,
} from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson border-b border-neutral-200 border-l-[3px] border-l-green-600 p-3">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2">
          <FaGripVertical
            aria-hidden="true"
            className="shrink-0 text-neutral-500"
          />

          <span className="wd-title font-semibold">
            {title}
          </span>
        </span>

        <span className="flex shrink-0 items-center gap-3">
          <GreenCheckmark />

          <FaEllipsisV aria-label="Lesson options" />
        </span>
      </div>

      <ul className="wd-content mt-2 list-disc pl-6">
        {children}
      </ul>
    </li>
  );
}