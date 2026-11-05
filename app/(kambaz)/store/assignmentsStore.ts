import { create } from "zustand";
import seed from "../database/assignments.json";
export type Assignment = (typeof seed)[number] & {
  availableFrom: string;
  availableUntil: string;
  group: string;
  gradeAs: string;
  submissionType: string;
  entryOptions: string[];
  assignTo: string;
  notes: string;
};
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
type AssignmentsState = {
  assignments: Assignment[];
  addAssignment: (a: Assignment) => void;
  updateAssignment: (a: Assignment) => void;
  deleteAssignment: (id: string, course: string) => void;
};
export const useAssignmentsStore = create<AssignmentsState>((set) => ({
  assignments: seed.map((a) => ({ ...emptyAssignment, ...a })),
  addAssignment: (a) =>
    set((s) => ({
      assignments: [...s.assignments, { ...a, _id: crypto.randomUUID() }],
    })),
  updateAssignment: (a) =>
    set((s) => ({
      assignments: s.assignments.map((row) =>
        row._id === a._id && row.course === a.course ? { ...a } : row,
      ),
    })),
  deleteAssignment: (id, course) =>
    set((s) => ({
      assignments: s.assignments.filter(
        (a) => !(a._id === id && a.course === course),
      ),
    })),
}));
