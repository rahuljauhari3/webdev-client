import { type Profile, type ProfileErrors } from "./profile";
export default function ProfileFields({
  prefix,
  profile,
  setProfile,
  errors,
}: {
  prefix: string;
  profile: Profile;
  setProfile: (p: Profile) => void;
  errors: ProfileErrors;
}) {
  return (
    <div>
      {(
        [
          { key: "firstName", label: "First name", type: "text" },
          { key: "lastName", label: "Last name", type: "text" },
          { key: "password", label: "Password", type: "password" },
          { key: "dob", label: "Date of birth", type: "date" },
        ] as const
      ).map((f) => (
        <div key={f.key}>
          <label htmlFor={`${prefix}-${f.key}`}>{f.label}</label>
          <input
            id={`${prefix}-${f.key}`}
            type={f.type}
            value={profile[f.key]}
            aria-invalid={!!errors[f.key]}
            aria-describedby={
              errors[f.key] ? `${prefix}-${f.key}-error` : undefined
            }
            onChange={(e) =>
              setProfile({ ...profile, [f.key]: e.target.value })
            }
          />
          {errors[f.key] && (
            <p id={`${prefix}-${f.key}-error`}>{errors[f.key]}</p>
          )}
        </div>
      ))}
      <label>
        Role
        <select
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="">Choose a role</option>
          <option value="STUDENT">Student</option>
          <option value="TA">Teaching assistant</option>
          <option value="FACULTY">Faculty</option>
        </select>
      </label>
      {errors.role && <p>{errors.role}</p>}
      <label>
        <input
          type="checkbox"
          checked={profile.newsletter}
          onChange={(e) =>
            setProfile({ ...profile, newsletter: e.target.checked })
          }
        />
        Email me the newsletter
      </label>
      <fieldset>
        <legend>Topics</legend>
        {["HTML", "CSS", "React"].map((t) => (
          <label key={t}>
            <input
              type="checkbox"
              checked={profile.topics.includes(t)}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  topics: e.target.checked
                    ? [...profile.topics, t]
                    : profile.topics.filter((x) => x !== t),
                })
              }
            />
            {t}
          </label>
        ))}
        {errors.topics && <p>{errors.topics}</p>}
      </fieldset>
      <fieldset>
        <legend>Theme</legend>
        {["light", "dark"].map((t) => (
          <label key={t}>
            <input
              name={`${prefix}-theme`}
              type="radio"
              checked={profile.theme === t}
              onChange={() => setProfile({ ...profile, theme: t })}
            />
            {t}
          </label>
        ))}
      </fieldset>
    </div>
  );
}
