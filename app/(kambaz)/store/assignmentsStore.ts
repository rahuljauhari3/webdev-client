import { create } from "zustand";
import * as client from "../courses/client";
import type { Assignment } from "../types";
export type { Assignment } from "../types";
export const emptyAssignment: Assignment = {
  _id: "",
  course: "",
  title: "",
  description: "",
  points: 100,
  dueDate: "",
  availableFrom: "",
  availableUntil: "",
  group: "ASSIGNMENTS",
  gradeAs: "Percentage",
  submissionType: "Online",
  entryOptions: ["Website URL"],
  assignTo: "Everyone",
  notes: "",
};

type State = {
  assignments: Assignment[];
  load: (cid: string) => Promise<void>;
  addAssignment: (a: Assignment) => Promise<void>;
  updateAssignment: (a: Assignment) => Promise<void>;
  deleteAssignment: (id: string, course: string) => Promise<void>;
};
export const useAssignmentsStore = create<State>((set) => ({
  assignments: [],
  load: async (cid) => {
    const rows = await client.findAssignmentsForCourse(cid);
    set((s) => ({
      assignments: [...s.assignments.filter((a) => a.course !== cid), ...rows],
    }));
  },
  addAssignment: async (a) => {
    const saved = await client.createAssignmentForCourse(a);
    set((s) => ({ assignments: [...s.assignments, saved] }));
  },
  updateAssignment: async (a) => {
    const saved = await client.updateAssignment(a);
    set((s) => ({
      assignments: s.assignments.map((row) =>
        row._id === saved._id ? saved : row,
      ),
    }));
  },
  deleteAssignment: async (id) => {
    await client.deleteAssignment(id);
    set((s) => ({ assignments: s.assignments.filter((a) => a._id !== id) }));
  },
}));
