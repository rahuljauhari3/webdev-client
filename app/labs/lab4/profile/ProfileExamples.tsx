"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { create } from "zustand";
import {
  emptyProfile,
  validateProfile,
  type Profile,
  type ProfileErrors,
} from "./profile";
import ProfileFields from "./ProfileFields";
export function ProfileForm({
  title,
  prefix,
  profile,
  setProfile,
  preview,
}: {
  title: string;
  prefix: string;
  profile: Profile;
  setProfile: (p: Profile) => void;
  preview?: ReactNode;
}) {
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [submitted, setSubmitted] = useState(false);
  return (
    <section>
      <h3>{title}</h3>
      <form
        id={prefix}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setErrors(validateProfile(profile));
          setSubmitted(true);
        }}
      >
        {submitted && (
          <p role="alert">
            {Object.keys(errors).length
              ? `Fix ${Object.keys(errors).length} fields.`
              : "Profile saved."}
          </p>
        )}
        <ProfileFields
          prefix={prefix}
          profile={profile}
          setProfile={setProfile}
          errors={errors}
        />
        <button id={`${prefix}-save`}>Save</button>
      </form>
      {preview}
    </section>
  );
}
export function LocalProfileForm() {
  const [profile, setProfile] = useState<Profile>({ ...emptyProfile });
  return (
    <ProfileForm
      title="Profile Form with Local State"
      prefix="wd-local-profile"
      profile={profile}
      setProfile={setProfile}
    />
  );
}
const ProfileContext = createContext<{
  profile: Profile;
  setProfile: (p: Profile) => void;
} | null>(null);
function ContextForm() {
  const value = useContext(ProfileContext);
  if (!value) throw new Error("Missing ProfileContext");
  return (
    <ProfileForm
      title="Profile Form with React Context"
      prefix="wd-context-profile"
      {...value}
      preview={<ContextPreview />}
    />
  );
}
function ContextPreview() {
  const value = useContext(ProfileContext);
  return (
    <p>
      Context preview: {value?.profile.firstName} {value?.profile.lastName}
    </p>
  );
}
export function ContextProfileForm() {
  const [profile, setProfile] = useState<Profile>({ ...emptyProfile });
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <ContextForm />
    </ProfileContext.Provider>
  );
}
const useProfileStore = create<{
  profile: Profile;
  setProfile: (p: Profile) => void;
}>((set) => ({
  profile: { ...emptyProfile },
  setProfile: (profile) => set({ profile }),
}));
function ZustandPreview() {
  const profile = useProfileStore((s) => s.profile);
  return (
    <p>
      Zustand preview: {profile.firstName} {profile.lastName}
    </p>
  );
}
export function ZustandProfileForm() {
  const value = useProfileStore();
  return (
    <ProfileForm
      title="Profile Form with Zustand"
      prefix="wd-zustand-profile"
      {...value}
      preview={<ZustandPreview />}
    />
  );
}
