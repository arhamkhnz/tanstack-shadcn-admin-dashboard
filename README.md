# TanStack Start Admin Template with TypeScript and shadcn/ui

**Studio Admin** is a modern, open-source admin dashboard template with multiple dashboards, authentication layouts, customizable theme presets, and flexible layout controls.

![Studio Admin dashboard](https://github.com/arhamkhnz/next-shadcn-admin-dashboard-baseui/blob/main/media/dashboard.png?raw=true)

Most admin templates feel cluttered, outdated, or too rigid. Studio Admin is a cleaner alternative that keeps the interface modern, minimal, and flexible while including theme and layout customization out of the box.

> [!NOTE]
> This is the TanStack Start and Base UI version of Studio Admin. The original Next.js version is available at [next-shadcn-admin-dashboard-baseui](https://github.com/arhamkhnz/next-shadcn-admin-dashboard-baseui).

## Features

- Built with TanStack Start, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui
- Server-side rendering with file-based, type-safe routing
- Responsive and mobile-friendly layouts
- Customizable light and dark theme presets
- Flexible content widths, navbar styles, and collapsible sidebar variants
- Multiple authentication layouts and screens
- Prebuilt dashboard, productivity, communication, and management screens
- Preference persistence for theme, layout, sidebar, and font settings
- Role-based access control with config-driven UI and multi-tenant support *(planned)*

The default dashboard uses the shadcn neutral theme. Additional presets include Tangerine, Neo Brutalism, and Soft Pop, inspired by [Tweakcn](https://tweakcn.com).

## Tech stack

- **Framework:** TanStack Start, React 19, TypeScript, and Vite
- **Routing and server:** TanStack Router, TanStack Start server functions, and Nitro
- **UI:** shadcn/ui with Base UI primitives and Tailwind CSS v4
- **Validation:** Zod
- **Forms and state:** React Hook Form and Zustand
- **Tables:** TanStack Table
- **Tooling:** Biome

## Screens

- Default Dashboard
- CRM Dashboard
- Finance Dashboard
- Analytics Dashboard
- Productivity Dashboard
- E-commerce Dashboard
- Academy Dashboard
- Logistics Dashboard
- Infrastructure Dashboard
- Email Page
- Chat Page
- Calendar Page
- Kanban Board
- Invoice Page
- Users Management
- Roles Management
- Authentication (4 screens)
- Legacy: Default v1, CRM v1, Finance v1, and Analytics v1

All currently planned screens have been added. Feel free to open an issue to request something specific.

## Colocation architecture

The project follows TanStack Router's colocation conventions. Each feature keeps its route, components, and feature-specific logic inside its route directory. Folders prefixed with `-`, such as `-components`, are excluded from route generation, while shared UI, hooks, stores, configuration, and utilities live at the top level.

Route groups such as `(main)`, `(external)`, and `(legacy)` organize related routes without changing their URL paths.

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/arhamkhnz/tanstack-shadcn-admin-dashboard.git
   ```

2. Enter the project directory:

   ```bash
   cd tanstack-shadcn-admin-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The project uses the Nitro Vite plugin and can be deployed to Vercel by importing the repository and using the default build command.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farhamkhnz%2Ftanstack-shadcn-admin-dashboard)

## Formatting and linting

```bash
npm run check
```

For additional rules and CLI options, see the [Biome documentation](https://biomejs.dev/).

> [!IMPORTANT]
> This project is updated frequently. If you are working from a fork or an older clone, pull the latest changes before syncing because some updates may include breaking changes.

Contributions, feature requests, and discussions are welcome.
