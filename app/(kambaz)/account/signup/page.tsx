import Link from "next/link";

export default function Signup() {
  const fieldClass =
    "block w-full rounded border border-neutral-300 " +
    "bg-white px-3 py-2 text-base " +
    "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div id="wd-signup-screen" className="w-full max-w-sm">
      <h1 className="m-0 mb-5 text-2xl font-semibold">
        Sign up
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
          autoComplete="new-password"
          className={`wd-password ${fieldClass}`}
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block font-medium">
          Verify password
        </span>

        <input
          placeholder="verify password"
          type="password"
          autoComplete="new-password"
          className={`wd-password-verify ${fieldClass}`}
        />
      </label>

      <Link
        href="/account/profile"
        className="
          mb-3 block w-full rounded
          bg-blue-600 px-3 py-2
          text-center text-white no-underline
          hover:bg-blue-700
        "
      >
        Sign up
      </Link>

      <Link
        href="/account/signin"
        className="text-blue-600 no-underline hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}