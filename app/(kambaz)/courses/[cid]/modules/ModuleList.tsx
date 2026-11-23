"use client";
import { useEffect, useState } from "react";
import { useModulesStore } from "@/app/(kambaz)/store/modulesStore";
import useRequest from "@/app/(kambaz)/components/useRequest";
import { useAccountContext } from "@/app/(kambaz)/account/AccountContext";
import Module from "./Module";
import ModuleEditor from "./ModuleEditor";
export default function ModuleList({ cid }: { cid: string }) {
  const { run, pending, feedback } = useRequest();
  const { currentUser } = useAccountContext();
  const canEdit =
    !!currentUser && ["FACULTY", "ADMIN"].includes(currentUser.role);
  useEffect(() => {
    void run(() => useModulesStore.getState().load(cid));
  }, [cid, run]);
  const modules = useModulesStore((s) => s.modules);
  const [showEditor, setShowEditor] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      {feedback}
      {pending && <p role="status">Loading modules…</p>}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        {canEdit && (
          <button className="a4-danger" onClick={() => setShowEditor(true)}>
            + Module
          </button>
        )}
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
