"use client";
import { useEffect, useRef, useState } from "react";
import { useModulesStore } from "@/app/(kambaz)/store/modulesStore";
export default function ModuleEditor({
  cid,
  onClose,
}: {
  cid: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const addModule = useModulesStore((s) => s.addModule);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);
  return (
    <dialog
      ref={dialog}
      onCancel={onClose}
      aria-labelledby="wd-module-dialog-title"
      className="a4-dialog"
    >
      <form
        className="a4-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim()) return;
          addModule(cid, name);
          onClose();
        }}
      >
        <h2 id="wd-module-dialog-title">Add Module</h2>
        <label>
          Module name
          <input
            id="wd-module-name"
            placeholder="Module name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
          />
        </label>
        <div className="flex gap-2">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="a4-danger" disabled={!name.trim()}>
            Add Module
          </button>
        </div>
      </form>
    </dialog>
  );
}
