import { create } from "zustand";
import seed from "../database/enrollments.json";
type Enrollment = (typeof seed)[number];
type EnrollmentsState = {
  enrollments: Enrollment[];
  enroll: (user: string, course: string) => void;
  unenroll: (user: string, course: string) => void;
  removeCourse: (course: string) => void;
};
export const useEnrollmentsStore = create<EnrollmentsState>((set) => ({
  enrollments: seed,
  enroll: (user, course) =>
    set((s) =>
      s.enrollments.some((e) => e.user === user && e.course === course)
        ? s
        : {
            enrollments: [
              ...s.enrollments,
              { _id: crypto.randomUUID(), user, course },
            ],
          },
    ),
  unenroll: (user, course) =>
    set((s) => ({
      enrollments: s.enrollments.filter(
        (e) => !(e.user === user && e.course === course),
      ),
    })),
  removeCourse: (course) =>
    set((s) => ({
      enrollments: s.enrollments.filter((e) => e.course !== course),
    })),
}));
