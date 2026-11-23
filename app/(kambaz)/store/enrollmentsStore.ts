import { create } from "zustand";
import * as client from "../courses/client";
import type { Enrollment } from "../types";
export type { Enrollment } from "../types";
type State = {
  enrollments: Enrollment[];
  load: () => Promise<void>;
  enroll: (u: string, c: string) => Promise<void>;
  unenroll: (u: string, c: string) => Promise<void>;
  removeCourse: (c: string) => void;
};
export const useEnrollmentsStore = create<State>((set) => ({
  enrollments: [],
  load: async () => {
    const rows = await client.findEnrollments();
    set({ enrollments: rows });
  },

  enroll: async (user: string, course: string) => {
    const saved = await client.enrollIntoCourse(user, course);
    set((s) => ({
      enrollments: [...s.enrollments.filter((e) => e._id !== saved._id), saved],
    }));
  },
  unenroll: async (user: string, course: string) => {
    await client.unenrollFromCourse(user, course);
    set((s) => ({
      enrollments: s.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      ),
    }));
  },
  removeCourse: (course: string) =>
    set((s) => ({
      enrollments: s.enrollments.filter((e) => e.course !== course),
    })),
}));
