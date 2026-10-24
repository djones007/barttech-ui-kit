# barttech-ui-kit — shared UI components (`@barttech/ui-kit`)

Brand-neutral UI components based on shadcn/ui (Radix primitives + Tailwind v4 tokens), shared
by the apps that mount this repo as a git submodule. Source-only, no build — each consumer
transpiles the `.tsx` through its own build. **Not a deployable app. Never create a Vercel
project for it.**

## ⚠️ THIS REPO IS PUBLIC

Generic mechanism only. **Never commit** a secret, key, token, `.env` value, customer data,
brand name, internal repo name, live domain, or any detail about which apps use this or how.
That includes CHANGELOG entries and **commit messages** (published too, and not seen by the
tree-scanning CI gate). Describe consumers by role ("the consuming apps"), never by name.
The consumer map lives in a private repo, not here. `public-hygiene.yml` fails the push on a
denylisted term; it fails closed if its `ESTATE_DENYLIST` secret is missing.

## Why a separate repo (not the app-shell UI repo)

The sibling app-shell UI repo is mounted in many apps and has no runtime dependencies beyond
React. These components need Radix, `class-variance-authority`, `clsx`, `tailwind-merge` and
`tw-animate-css`. Putting them there would break the type-check of every consumer without
those packages on its next pointer bump. Mounted separately, they reach only the apps that
opted in.

## Golden rules

1. **Brand-neutral only.** No brand colours, names or copy. Theme through CSS variables
   (`theme.css`); a consumer overrides variables in its own `:root`, never a component.
2. **Upstream shape stays recognisable.** Components are shadcn/ui source with three local
   changes: `cn` comes from `./utils`, sibling imports are relative, and icons come from
   `./icons` (inline SVGs — no icon library dependency). Keep diffs from upstream small so
   a later refresh is a straightforward re-sync.
3. **Peer dependencies, never dependencies.** React, Radix, the class helpers, Tailwind and
   `tw-animate-css` are supplied by the consumer. Dev copies exist only so this repo can
   check itself; `node_modules/` is gitignored.
4. **Backwards-compatible exports.** Add, don't break. Renaming an export breaks every
   consumer at once.
5. **Fix here, then bump.** Never edit a consumer's vendored copy — it is discarded on the
   next pointer bump.

## Using it in an app

1. `git submodule add <repo url> src/ui-kit`
2. Install the peers: `radix-ui class-variance-authority clsx tailwind-merge tw-animate-css`.
3. Global stylesheet, in this order:
   `@import "tailwindcss"; @import "tw-animate-css"; @import "../ui-kit/theme.css";`
   (path relative to the stylesheet). Tailwind v4 scans the submodule automatically because it
   is inside the project; if the app limits sources, add `@source "../ui-kit";`.
4. `tsconfig.json` path alias: `"@/ui-kit/*": ["./src/ui-kit/*"]`.
5. Exclude `src/ui-kit/**` from the app's own lint (this repo lints itself).
6. Import per file: `import { Button } from "@/ui-kit/button";` — there is no barrel file,
   so an app only bundles what it uses.

## Files

Components: accordion, alert, badge, button, card, checkbox, dialog, dropdown-menu, input,
label, popover, progress, select, separator, skeleton, slider, switch, table, tabs, textarea,
tooltip. Helpers: `utils.ts` (`cn`), `icons.tsx`, `theme.css` (tokens incl. `success` and
`warning` beyond upstream's set).

## Adding a component

Generate it with the official shadcn CLI in a scratch project (style `new-york`, Tailwind v4),
copy the file here, apply the three local changes in rule 2, then `npm run lint && npm run
typecheck`. **Check what the CLI installed in the scratch project** — when it could not resolve
the utils alias it once installed an unrelated npm package named `cn`. Never copy a dependency
across without reading it.
