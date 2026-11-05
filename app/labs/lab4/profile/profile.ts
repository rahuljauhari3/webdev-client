export type Profile = {
  firstName: string;
  lastName: string;
  password: string;
  dob: string;
  role: string;
  newsletter: boolean;
  topics: string[];
  theme: string;
};
export type ProfileErrors = Partial<Record<keyof Profile, string>>;
export const emptyProfile: Profile = {
  firstName: "",
  lastName: "",
  password: "",
  dob: "",
  role: "",
  newsletter: false,
  topics: [],
  theme: "light",
};
export function validateProfile(p: Profile) {
  const errors: ProfileErrors = {};
  if (!p.firstName.trim()) errors.firstName = "First name is required.";
  if (!p.lastName.trim()) errors.lastName = "Last name is required.";
  if (p.password.length < 8)
    errors.password = "Password must be at least 8 characters.";
  if (!p.dob) errors.dob = "Date of birth is required.";
  else if (p.dob > new Date().toLocaleDateString("en-CA"))
    errors.dob = "Date of birth cannot be in the future.";
  if (!p.role) errors.role = "Choose a role.";
  if (!p.topics.length) errors.topics = "Choose at least one topic.";
  return errors;
}
