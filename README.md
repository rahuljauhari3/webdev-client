# Kambaz — Assignment 5

Next.js client for [A5: RESTful Web APIs](https://kambaz.dev/2026/fall/webdev/assignments/a5).
The `a5` branch builds on the completed `a4` branch.

## Run locally

Requires Node.js 22 or newer. Start the sibling `../webdev-server` project first.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000/labs/lab5. The Express server runs at http://localhost:4000.
`NEXT_PUBLIC_HTTP_SERVER` must contain the Express origin without a trailing slash.
Do not commit `.env.local`.

## Implemented

- All Lab 5 path/query arithmetic, remote assignment/module objects, and todo array exercises.
- Axios welcome/object/array reads on mount and on click; GET examples plus JSON POST, PUT, DELETE and visible errors.
- Next.js `/api/lab5/hello` and `/api/lab5/calculator` handlers.
- Server-backed sign-in, sign-up, profile updates, sign-out, and session restoration after refresh.
- Course, module, assignment, enrollment and People operations. Zustand stores hold server responses, not seed databases.
- Signed-out visitors can browse courses and labs. Sign in as `faculty` / `123` for editing. Student demos: `rahul`, `alex`, `sam`, password `123`. Use Enrollments to enroll in a course.

## Validate

```sh
npx next typegen
npx tsc --noEmit
npm run lint
npm run build
```

API integration tests live in the sibling server repository (`npm test`).
The original HTML image exercises produce four existing `no-img-element` lint warnings.

## Deploy A5

1. Deploy the server's `a5` branch to Render using its `render.yaml` or `npm ci` / `npm start`.
2. Set `SERVER_ENV=production`, a random `SESSION_SECRET`, and `CLIENT_URL` to the actual Vercel A5 branch origin. The server accepts a comma-separated list if both production and preview origins are needed.
3. In Vercel set `NEXT_PUBLIC_HTTP_SERVER` to the actual HTTPS Render origin **for the a5 preview environment**, then redeploy. Public environment variables are embedded at build time.
4. Ensure the A5 preview is public. Its branch alias contains `-git-a5`.
5. Verify welcome, arithmetic, courses, and course modules on the public server. Check `/labs/lab5`, both Next.js APIs, sign-in, and a refresh on the public client.
6. Submit the client GitHub URL and A5 Vercel branch URL on the course assignment page.

Server source: https://github.com/rahuljauhari3/webdev-server/tree/a5

A5 intentionally uses in-memory data and sessions: browser refresh preserves server changes, but restarting or redeploying the server resets them. Cross-site session cookies require HTTPS and browser support for third-party cookies. The included accounts and credentials are classroom demonstrations.
