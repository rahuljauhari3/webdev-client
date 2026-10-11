import type { ReactNode } from "react";
import {
  FaEllipsisV,
  FaGripVertical,
} from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0">
      <div className="wd-title flex items-center justify-between gap-3 bg-neutral-200 p-3 text-lg">
        <span className="flex items-center gap-2">
          <FaGripVertical
            aria-hidden="true"
            className="shrink-0 text-neutral-500"
          />

          {title}
        </span>

        <span className="flex shrink-0 items-center gap-3">
          <GreenCheckmark />

          <FaEllipsisV aria-label="Module options" />
        </span>
      </div>

      <ul className="wd-lessons m-0 list-none p-0">
        {children}
      </ul>
    </li>
  );
}