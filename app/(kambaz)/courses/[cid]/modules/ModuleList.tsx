import { modules } from "@/app/(kambaz)/database";
import Module from "./Module";
import Lesson from "./Lesson";

export default function ModuleList({ cid }: { cid: string }) {
  const courseModules = modules.filter((module) => module.course === cid);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button className="rounded border px-3 py-1.5" type="button">
          Collapse All
        </button>
        <button className="rounded border px-3 py-1.5" type="button">
          View Progress
        </button>
        <select
          aria-label="Publish modules"
          defaultValue="all"
          className="rounded border px-3 py-1.5"
        >
          <option value="all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded bg-red-600 px-3 py-1.5 text-white"
        >
          + Module
        </button>
      </div>

      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                {lesson.items.map((item) => (
                  <li key={item} className="wd-content-item">
                    {item}
                  </li>
                ))}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}