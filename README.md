# @barttech/ui-kit

Brand-neutral UI components based on [shadcn/ui](https://ui.shadcn.com) — Radix primitives styled
with Tailwind CSS v4 design tokens. Source-only: mount as a git submodule and let your app's build
transpile it.

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "../ui-kit/theme.css";
```

```tsx
import { Button } from "@/ui-kit/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui-kit/card";
```

Peer dependencies: `react`, `react-dom`, `radix-ui`, `class-variance-authority`, `clsx`,
`tailwind-merge`, `tailwindcss` v4, `tw-animate-css`.

Theme by overriding the CSS variables from `theme.css` (`--primary`, `--radius`, …) in your own
`:root`. MIT licensed; components adapted from shadcn/ui (MIT).
