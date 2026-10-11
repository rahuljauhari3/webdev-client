import Link from "next/link";

export default function Profile() {
  const fieldClass =
    "block w-full rounded border border-neutral-300 " +
    "bg-white px-3 py-2 text-base " +
    "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  const labelClass = "mb-2 block font-medium";

  return (
    <div id="wd-profile-screen" className="w-full max-w-sm">
      <h1 className="m-0 mb-5 text-2xl font-semibold">
        Profile
      </h1>

      <label className="mb-4 block">
        <span className={labelClass}>Username</span>

        <input
          defaultValue="alice"
          placeholder="username"
          autoComplete="username"
          className={`wd-username ${fieldClass}`}
        />
      </label>

      <label className="mb-4 block">
        <span className={labelClass}>Password</span>

        <input
          defaultValue="123"
          placeholder="password"
          type="password"
          autoComplete="new-password"
          className={`wd-password ${fieldClass}`}
        />
      </label>

      <div className="mb-4">
        <label htmlFor="wd-firstname" className={labelClass}>
          First Name
        </label>

        <input
          id="wd-firstname"
          defaultValue="Alice"
          placeholder="First Name"
          autoComplete="given-name"
          className={fieldClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-lastname" className={labelClass}>
          Last Name
        </label>

        <input
          id="wd-lastname"
          defaultValue="Wonderland"
          placeholder="Last Name"
          autoComplete="family-name"
          className={fieldClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-dob" className={labelClass}>
          Date of Birth
        </label>

        <input
          id="wd-dob"
          defaultValue="2000-01-01"
          type="date"
          autoComplete="bday"
          className={fieldClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-email" className={labelClass}>
          Email
        </label>

        <input
          id="wd-email"
          defaultValue="alice@wonderland"
          type="email"
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="wd-role" className={labelClass}>
          Role
        </label>

        <select
          id="wd-role"
          defaultValue="FACULTY"
          className={fieldClass}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <Link
        href="/account/signin"
        className="
          block w-full rounded
          bg-red-600 px-3 py-2
          text-center text-white no-underline
          hover:bg-red-700
        "
      >
        Sign out
      </Link>
    </div>
  );
}