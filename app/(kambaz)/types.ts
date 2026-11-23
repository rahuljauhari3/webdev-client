export type User = {
  _id: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  dob: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
};
export type Course = {
  _id: string;
  name: string;
  description: string;
  image: string;
  number: string;
  startDate: string;
};
export type CourseModule = {
  _id: string;
  course: string;
  name: string;
  lessons: { _id: string; name: string; items: string[] }[];
};
export type Assignment = {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  group: string;
  gradeAs: string;
  submissionType: string;
  entryOptions: string[];
  assignTo: string;
  notes: string;
};
export type Enrollment = { _id: string; user: string; course: string };
