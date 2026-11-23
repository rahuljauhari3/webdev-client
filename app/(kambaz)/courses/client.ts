import { http } from "@/lib/http";
import type { Course, CourseModule, Assignment, Enrollment } from "../types";
export const fetchAllCourses = async () =>
  (await http.get<Course[]>("/api/courses")).data;
export const findMyCourses = async () =>
  (await http.get<Course[]>("/api/users/current/courses")).data;
export const createCourse = async (course: Course) =>
  (await http.post<Course>("/api/users/current/courses", course)).data;
export const updateCourse = async (course: Course) =>
  (await http.put<Course>(`/api/courses/${course._id}`, course)).data;
export const deleteCourse = async (id: string) => {
  await http.delete(`/api/courses/${id}`);
};
export const findModulesForCourse = async (cid: string) =>
  (await http.get<CourseModule[]>(`/api/courses/${cid}/modules`)).data;
export const createModuleForCourse = async (cid: string, name: string) =>
  (await http.post<CourseModule>(`/api/courses/${cid}/modules`, { name })).data;
export const updateModule = async (id: string, name: string) =>
  (await http.put<CourseModule>(`/api/modules/${id}`, { name })).data;
export const deleteModule = async (id: string) => {
  await http.delete(`/api/modules/${id}`);
};
export const findAssignmentsForCourse = async (cid: string) =>
  (await http.get<Assignment[]>(`/api/courses/${cid}/assignments`)).data;
export const createAssignmentForCourse = async (a: Assignment) =>
  (await http.post<Assignment>(`/api/courses/${a.course}/assignments`, a)).data;
export const updateAssignment = async (a: Assignment) =>
  (await http.put<Assignment>(`/api/assignments/${a._id}`, a)).data;
export const deleteAssignment = async (id: string) => {
  await http.delete(`/api/assignments/${id}`);
};
export const findEnrollments = async () =>
  (await http.get<Enrollment[]>("/api/enrollments")).data;
export const enrollIntoCourse = async (uid: string, cid: string) =>
  (await http.post<Enrollment>(`/api/users/${uid}/courses/${cid}`)).data;
export const unenrollFromCourse = async (uid: string, cid: string) => {
  await http.delete(`/api/users/${uid}/courses/${cid}`);
};
