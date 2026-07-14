# AGENTS.md

## Project overview

Studio Admin is a responsive admin dashboard built with TanStack Start, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

This repository uses the shadcn `base-nova` style. When the shadcn CLI reports `base: "base"`, it refers to Base UI. Always inspect the local components in `src/components/ui/` because individual wrappers may use different primitives.

## TanStack Start and Router

Before making framework or routing changes, read the relevant current official documentation. Treat it as the source of truth for routing, SSR, server functions, environment boundaries, and deployment behavior.

- TanStack Start: <https://tanstack.com/start/latest/docs/framework/react/overview>
- TanStack Router: <https://tanstack.com/router/latest/docs/framework/react/overview>

- Routes are file-based under `src/routes/`.
- Route group directories such as `(main)`, `(external)`, and `(legacy)` are organizational and do not add URL segments or layouts.
- A directory `route.tsx` creates the route or layout for that directory; use `<Outlet />` for nested content.
- Files and directories prefixed with `-`, such as `-components`, are excluded from route generation and should hold co-located feature code.
- `$param.tsx` represents a dynamic segment and `$.tsx` represents a splat route.
- `src/routeTree.gen.ts` is generated. Never edit it manually.
- Routes use SSR by default. This project does not enable React Server Components, so do not add `"use client"` directives.
- Browser-only APIs must run in effects, guarded client code, `<ClientOnly>`, or TanStack environment functions such as `createClientOnlyFn`.
- Server-only behavior exposed to the application should use `createServerFn` and validate all client-controlled input.

## shadcn skill

Use the shadcn skill for all work involving shadcn/ui components, styling, composition, registries, presets, or `components.json`.

If the skill is not available, install it with:

```bash
npx skills add shadcn/ui
```

The skill contains the component, styling, composition, accessibility, and CLI rules. Do not duplicate those rules here. Always inspect the local component source before using it.

Do not modify files inside `src/components/ui/` or `src/components/calendar/`. Keep these components intact and apply styling or customization where they are used.

## Setup

This project uses npm.

```bash
npm install
npm run dev
```

Available commands:

```bash
npm run build
npm run lint
npm run format
npm run check
npm run check:fix
npm run generate-routes
npm run generate:presets
```

There is currently no automated test command. Run build, lint, check, typecheck, or other validation commands only when the user explicitly requests that validation.

## Co-location-based structure

Keep feature code close to the route that owns it.

- Root route and document shell: `src/routes/__root.tsx`
- Dashboard layout: `src/routes/(main)/dashboard/route.tsx`
- Dashboard routes: `src/routes/(main)/dashboard/<screen>/route.tsx`
- Screen-specific components and data: `src/routes/(main)/dashboard/<screen>/-components/`
- Shared dashboard components: `src/routes/(main)/dashboard/-components/`
- Auth routes: `src/routes/(main)/auth/`
- Standalone application routes: `src/routes/(main)/chat/` and `src/routes/(main)/mail/`
- Shared application components: `src/components/`
- Local shadcn components: `src/components/ui/`
- Shared hooks and utilities: `src/hooks/` and `src/lib/`
- Server functions: `src/server/`
- Global stores: `src/stores/`
- Theme presets: `src/styles/presets/`

Keep a component inside its route until it is reused by another feature. Do not move screen-specific code into a shared directory preemptively.

## Creating or extending a screen

1. Inspect the closest current screen before writing code. Finance, Infrastructure, CRM, and Analytics are useful references. Do not use routes under `(legacy)` as references for new screens unless maintaining a legacy route.
2. When reproducing a UI from a screenshot or image, follow its visual direction closely, including layout, hierarchy, spacing, component structure, and important details. Implement it with the project's existing components and semantic theme tokens rather than copying raw color values. If the design needs a color that is not available through the existing theme tokens, or the user explicitly requests a non-theme color, use a named color from Tailwind's default palette. Do not use arbitrary hex, RGB, HSL, or OKLCH values.
3. Reuse the existing dashboard shell, local components, layout controls, and theme tokens.
4. Break each new page into focused components inside the route's `-components/` directory. Keep `route.tsx` small and focused on composing those pieces.
5. Keep interactive or browser-dependent behavior in focused components and make it safe for SSR. A `"use client"` directive does not disable SSR in this project.
6. Add the screen to `src/navigation/sidebar/sidebar-items.ts` when it should appear in the dashboard navigation.
7. Decide the information hierarchy before choosing widgets. Let the content determine the page structure.
8. Keep the established visual rhythm where it fits: compact spacing, clear typography hierarchy, responsive action rows, and grids that collapse cleanly on smaller screens.
9. Widget selection is not a fixed formula. Try different arrangements of cards, resource rows, meters, charts, tabs, empty states, and actions, then keep the version that communicates the content clearly and feels consistent with the project.
10. Match nearby screens in card density, borders, radius, spacing, content width, and responsive behavior.
11. Use semantic theme tokens so new screens work with light mode, dark mode, and the existing theme presets.
12. Handle relevant loading, empty, error, disabled, and overflow states.
13. Keep screens accessible with semantic HTML, keyboard support, visible focus states, labels, and appropriate ARIA attributes.

## Code conventions

- TypeScript strict mode is enabled. Use precise types and avoid `any`.
- Use the existing `@/` import aliases.
- Follow the Biome configuration: double quotes, semicolons, two-space indentation, sorted imports, and a 120-character line width.
- Avoid unnecessary dependencies.
- Keep changes focused and do not refactor unrelated files.
- Preserve user changes in a dirty worktree and do not commit unless explicitly requested.

## Contributions

- Use conventional commit prefixes such as `feat:`, `fix:`, `refactor:`, `docs:`, and `chore:`.
- Include screenshots for new screens and material visual changes. Include mobile and dark-theme states when relevant.
- Explain new reusable patterns or dependencies in the pull request.
- Follow `CONTRIBUTING.md` for the contribution workflow.
