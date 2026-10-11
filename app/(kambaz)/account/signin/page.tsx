import Link from "next/link";

export default function Signin() {
  const fieldClass =
    "block w-full rounded border border-neutral-300 " +
    "bg-white px-3 py-2 text-base " +
    "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div id="wd-signin-screen" className="w-full max-w-sm">
      <h1 className="m-0 mb-5 text-2xl font-semibold">
        Sign in
      </h1>

      <label className="mb-4 block">
        <span className="mb-2 block font-medium">
          Username
        </span>

        <input
          placeholder="username"
          defaultValue="ada"
          autoComplete="username"
          className={`wd-username ${fieldClass}`}
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block font-medium">
          Password
        </span>

        <input
          placeholder="password"
          type="password"
          defaultValue="123"
          autoComplete="current-password"
          className={`wd-password ${fieldClass}`}
        />
      </label>

      <div className="mb-4">
        <label
          htmlFor="wd-ai-signin-note"
          className="mb-2 block font-medium"
        >
          Sample note
        </label>

        <input
          id="wd-ai-signin-note"
          type="text"
          placeholder="sample note"
          className={fieldClass}
        />
      </div>

      <Link
        id="wd-signin-btn"
        href="/dashboard"
        className="
          mb-3 block w-full rounded
          bg-blue-600 px-3 py-2
          text-center text-white no-underline
          hover:bg-blue-700
        "
      >
        Sign in
      </Link>

      <Link
        id="wd-signup-link"
        href="/account/signup"
        className="text-blue-600 no-underline hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
}