import { create } from "zustand";
import seed from "../database/courses.json";
export type Course = (typeof seed)[number] & {
  number: string;
  startDate: string;
};
export const emptyCourse: Course = {
  _id: "",
  name: "",
  description: "",
  image: "/images/reactjs.jpg",
  number: "",
  startDate: "2026-01-15",
};
type CoursesState = {
  courses: Course[];
  addCourse: (course: Course) => string;
  updateCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;
};
export const useCoursesStore = create<CoursesState>((set) => ({
  courses: seed.map((c) => ({ ...c, number: c._id, startDate: "2026-01-15" })),
  addCourse: (course) => {
    const _id = crypto.randomUUID();
    set((s) => ({ courses: [...s.courses, { ...course, _id }] }));
    return _id;
  },
  updateCourse: (course) =>
    set((s) => ({
      courses: s.courses.map((c) => (c._id === course._id ? { ...course } : c)),
    })),
  deleteCourse: (id) =>
    set((s) => ({ courses: s.courses.filter((c) => c._id !== id) })),
}));
