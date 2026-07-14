# Contributing to Studio Admin

Thanks for showing interest in improving **Studio Admin** (repo: `tanstack-shadcn-admin-dashboard`).
This guide will help you set up your environment and understand how to contribute.

---

## Overview

This project is built with **TanStack Start**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Shadcn UI**.
The goal is to keep the codebase modular, scalable, and easy to extend.

---

## Project Layout

We use a **colocation-based file system**. Each feature keeps its own routes, components, and logic.

```text
src
├── routes                  # TanStack Router routes
│   ├── (external)          # External routes
│   ├── (main)              # Main application routes
│   │   ├── auth            # Auth layouts and screens
│   │   ├── chat            # Chat screen
│   │   ├── mail            # Mail screen
│   │   └── dashboard       # Dashboard layout and screens
│   └── __root.tsx          # Root document and providers
├── components              # Shared components
├── hooks                   # Reusable hooks
├── lib                     # Configuration and utilities
├── navigation              # Sidebar navigation
├── server                  # Server functions
├── stores                  # Global stores
└── styles                  # Tailwind and theme setup
```

Files and folders prefixed with `-`, such as `-components`, are excluded from route generation and can be colocated with their route.

---

## Getting Started

### Fork and Clone the Repository

1. Fork the Repository

   [Fork the repository](https://github.com/arhamkhnz/tanstack-shadcn-admin-dashboard/fork).

2. Clone the Repository

   ```bash
   git clone https://github.com/YOUR_USERNAME/tanstack-shadcn-admin-dashboard.git
   ```

3. Navigate into the Project

   ```bash
   cd tanstack-shadcn-admin-dashboard
   ```

4. Install dependencies

   ```bash
   npm install
   ```

5. Run the development server

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Contribution Flow

- Always create a new branch before working on changes:

  ```bash
  git checkout -b feature/my-update
  ```

- Use clear commit messages:

  ```bash
  git commit -m "feat: add finance dashboard screen"
  ```

- Open a pull request once ready.
- Include a screenshot in the pull request when adding or changing a UI screen.

---

## Where to Contribute

- **External Routes:** Non-dashboard routes → `src/routes/(external)/`
- **Auth Screens:** Login, register, and authentication layouts → `src/routes/(main)/auth/`
- **Dashboard Screens:** CRM, Finance, Analytics, and other dashboards → `src/routes/(main)/dashboard/`
- **Components:** Reusable UI → `src/components/`
- **Hooks:** Shared logic → `src/hooks/`
- **Server Functions:** Server-side operations → `src/server/`
- **Themes:** New presets → `src/styles/presets/`

---

## Guidelines

- Prefer **TypeScript types** over `any`.
- Keep feature components in the route's `-components` folder.
- Do not manually edit `src/routeTree.gen.ts`.
- Husky pre-commit hooks are enabled. Theme presets are generated and staged files are checked automatically.
- Follow **Shadcn UI**, Base UI, and Tailwind CSS v4 conventions.
- Keep accessibility in mind, including ARIA labels and keyboard navigation.
- Use clear commit messages with conventional prefixes such as `feat:`, `fix:`, and `chore:`.
- Avoid unnecessary dependencies and prefer existing utilities.

---

## Submitting PRs

- Open a pull request once your changes are ready.
- Ensure your branch is up to date with `main` before submitting.
- Reference any related issue in your pull request for context.

---

## Questions & Support

Report bugs, suggestions, or issues through [GitHub Issues](https://github.com/arhamkhnz/tanstack-shadcn-admin-dashboard/issues).

---

Your contributions keep this project growing. 🚀

**Happy Vibe Coding!**
