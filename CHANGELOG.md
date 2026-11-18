# Changelog

All notable changes to this repository. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2026-11-18] — Dependencies: minimatch bumped to 11.0.7+ (GHSA-cf2h-pxjq-68xw)

### Changed
- `overrides.minimatch` raised to `^11.0.7` and lockfile refreshed (resolves 11.0.9). Dev-only path (eslint / typescript-estree / glob), Low severity. No runtime change.

## [2026-10-24b] — Docs: apps with existing tokens skip theme.css

### Changed
- CLAUDE.md: an app that already defines the standard tokens should not import `theme.css` (it would override them in a different colour format).

## [2026-10-24] — First release

### Added
- 21 components adapted from shadcn/ui (new-york style, Tailwind v4): accordion, alert, badge, button, card, checkbox, dialog, dropdown-menu, input, label, popover, progress, select, separator, skeleton, slider, switch, table, tabs, textarea, tooltip.
- `utils.ts` (`cn`), `icons.tsx` (inline SVG chevrons, tick, circle, close — no icon library), `theme.css` (brand-neutral slate/indigo tokens, light and dark, plus `success` and `warning`).
- Self-gating CI (lint, typecheck, third-party font check) and the public-hygiene denylist gate.
