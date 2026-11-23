import { create } from "zustand";
import * as client from "../courses/client";
import type { Course } from "../types";
export type { Course } from "../types";
type State = {
  courses: Course[];
  load: () => Promise<void>;
  addCourse: (c: Course) => Promise<string>;
  updateCourse: (c: Course) => Promise<void>;
  deleteCourse: (id: string) => Promise<void>;
};
export const useCoursesStore = create<State>((set) => ({
  courses: [],
  load: async () => {
    const rows = await client.fetchAllCourses();
    set({ courses: rows });
  },

  addCourse: async (course: Course) => {
    const saved = await client.createCourse(course);
    set((s) => ({ courses: [...s.courses, saved] }));
    return saved._id;
  },
  updateCourse: async (course: Course) => {
    const saved = await client.updateCourse(course);
    set((s) => ({
      courses: s.courses.map((c) => (c._id === saved._id ? saved : c)),
    }));
  },
  deleteCourse: async (id: string) => {
    await client.deleteCourse(id);
    set((s) => ({ courses: s.courses.filter((c) => c._id !== id) }));
  },
}));
export const emptyCourse: Course = {
  _id: "",
  name: "",
  description: "",
  image: "/images/reactjs.jpg",
  number: "",
  startDate: "2026-01-15",
};
