import { create } from "zustand";
import seed from "../database/modules.json";
export type CourseModule = (typeof seed)[number];
type ModulesState = {
  modules: CourseModule[];
  addModule: (course: string, name: string) => void;
  updateModule: (id: string, name: string) => void;
  deleteModule: (id: string) => void;
};
export const useModulesStore = create<ModulesState>((set) => ({
  modules: seed,
  addModule: (course, name) => {
    if (name.trim())
      set((s) => ({
        modules: [
          ...s.modules,
          { _id: crypto.randomUUID(), course, name: name.trim(), lessons: [] },
        ],
      }));
  },
  updateModule: (id, name) => {
    if (name.trim())
      set((s) => ({
        modules: s.modules.map((m) =>
          m._id === id ? { ...m, name: name.trim() } : m,
        ),
      }));
  },
  deleteModule: (id) =>
    set((s) => ({ modules: s.modules.filter((m) => m._id !== id) })),
}));
