import { create } from "zustand";
import * as client from "../courses/client";
import type { CourseModule } from "../types";
export type { CourseModule } from "../types";
type State = {
  modules: CourseModule[];
  load: (cid: string) => Promise<void>;
  addModule: (cid: string, name: string) => Promise<void>;
  updateModule: (id: string, name: string) => Promise<void>;
  deleteModule: (id: string) => Promise<void>;
};
export const useModulesStore = create<State>((set) => ({
  modules: [],
  load: async (cid) => {
    const rows = await client.findModulesForCourse(cid);
    set((s) => ({
      modules: [...s.modules.filter((m) => m.course !== cid), ...rows],
    }));
  },
  addModule: async (cid, name) => {
    const saved = await client.createModuleForCourse(cid, name);
    set((s) => ({ modules: [...s.modules, saved] }));
  },
  updateModule: async (id, name) => {
    const saved = await client.updateModule(id, name);
    set((s) => ({ modules: s.modules.map((m) => (m._id === id ? saved : m)) }));
  },
  deleteModule: async (id) => {
    await client.deleteModule(id);
    set((s) => ({ modules: s.modules.filter((m) => m._id !== id) }));
  },
}));
