"use client";
import { useState } from "react";
import { useModulesStore } from "@/app/(kambaz)/store/modulesStore";
import Module from "./Module";
import ModuleEditor from "./ModuleEditor";
export default function ModuleList({ cid }: { cid: string }) {
  const modules = useModulesStore((s) => s.modules);
  const [showEditor, setShowEditor] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        <button className="a4-danger" onClick={() => setShowEditor(true)}>
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules
          .filter((m) => m.course === cid)
          .map((m) => (
            <Module key={m._id} module={m} collapsed={collapsed} />
          ))}
      </ul>
      {showEditor && (
        <ModuleEditor cid={cid} onClose={() => setShowEditor(false)} />
      )}
    </div>
  );
}
