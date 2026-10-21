# AGENTS.md

## Project state

- Early-stage Next.js App Router skeleton: only `/` exists (`src/app/page.tsx`). Despite the repo name, there is no products CRUD code, API route, data layer, or test suite yet — establish patterns rather than assume existing ones.
- Router files live in `src/app` (not a root `app/`); the README's `app/page.tsx` path is stale.
- Import alias: `@/*` → `src/*` (`tsconfig.json`).

## Commands

- `npm run dev` — dev server on `http://localhost:3000` (Turbopack).
- `npm run build` then `npm run start` — production; `next build` runs its own TypeScript check.
- `npm run lint` — bare `eslint` over the whole repo (ESLint 9 flat config in `eslint.config.mjs`); no `--fix` script.
- `npx tsc --noEmit` — standalone typecheck; there is no npm script for it.
- No test runner or `test` script exists; don't invent `npm test`.
- Route types (`LayoutProps<"/">`, `PageProps`, etc. — used as globals in `layout.tsx`) come from `.next/types`, which is generated. In a fresh checkout run `npx next typegen` (fast; no full build) before `tsc`/lint tooling that relies on those globals.

## Toolchain quirks

- Next 16.4, React 19.3, React Compiler enabled (`reactCompiler: true` in `next.config.ts`). This Next version has breaking changes vs. typical training data — read the bundled docs in `node_modules/next/dist/docs/` (start at `01-app/01-getting-started/`) before writing framework code.
- Tailwind v4, CSS-first: there is no `tailwind.config.*`. Theme and custom CSS go in `src/app/globals.css`, which only has `@import "tailwindcss";`.
- Tailwind is wired through a custom Turbopack loader rule in `next.config.ts` (`@tailwindcss/turbopack` applied to `*.css`). Removing or bypassing that rule breaks class generation.
- `next-env.d.ts` is gitignored and auto-generated — never edit it.

## Repo hygiene

- Git history is a single "Initial commit from Create Next App"; the local edits in `src/app` are user work, not scratch files to revert. There is no CI, pre-commit config, or `opencode.json`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
