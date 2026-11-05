"use client";
import { useState } from "react";
import {
  FaEllipsisV,
  FaGripVertical,
  FaPencilAlt,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import {
  useModulesStore,
  type CourseModule,
} from "@/app/(kambaz)/store/modulesStore";
import GreenCheckmark from "./GreenCheckmark";
import Lesson from "./Lesson";
export default function Module({
  module,
  collapsed,
}: {
  module: CourseModule;
  collapsed: boolean;
}) {
  const { updateModule, deleteModule } = useModulesStore();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(module.name);
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0">
      <div className="wd-title flex flex-wrap items-center justify-between gap-3 bg-neutral-200 p-3 text-lg">
        <span className="flex items-center gap-2">
          <FaGripVertical aria-hidden />
          {editing ? (
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!name.trim()) return;
                updateModule(module._id, name);
                setEditing(false);
              }}
            >
              <input
                aria-label="Module name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setEditing(false);
                }}
                autoFocus
              />
              <button disabled={!name.trim()}>Save</button>
              <button type="button" onClick={() => setEditing(false)}>
                Cancel
              </button>
            </form>
          ) : (
            module.name
          )}
        </span>
        <span className="flex shrink-0 items-center gap-3">
          <button
            aria-label={`Edit module ${module.name}`}
            title="Edit module"
            onClick={() => {
              setName(module.name);
              setEditing(true);
            }}
          >
            <FaPencilAlt className="text-blue-600" />
          </button>
          <button
            title="Delete module"
            aria-label={`Delete module ${module.name}`}
            onClick={() => deleteModule(module._id)}
          >
            <FaTrash className="text-red-600" />
          </button>
          <GreenCheckmark />
          <FaPlus aria-hidden />
          <FaEllipsisV aria-label="Module options" />
        </span>
      </div>
      {!collapsed && (
        <ul className="wd-lessons m-0 list-none p-0">
          {module.lessons.map((l) => (
            <Lesson key={l._id} title={l.name}>
              {l.items.map((i) => (
                <li key={i} className="wd-content-item">
                  {i}
                </li>
              ))}
            </Lesson>
          ))}
        </ul>
      )}
    </li>
  );
}
