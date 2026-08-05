# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added — Auth pages (login/sign-up)

- Login and sign-up pages (`src/views/auth/LoginPage.tsx`, `SignupPage.tsx`) with a shared `AuthAside` layout.
- Dark theme support via `next-themes` (`ThemeProvider`, `ModeToggle`), aligned top-right with the logo.
- `PasswordInput` component — `Input` with a show/hide toggle (Eye/EyeOff).
- `Card` component: new `variant` prop (`default` / `ghost`), alongside the existing `size` prop.
- Form validation with `zod` + `react-hook-form` (`@hookform/resolvers`):
  - `src/features/auth/model/loginSchema.ts`, `signupSchema.ts`
  - `src/features/auth/hooks/useLoginForm.ts`, `useSignupForm.ts` — encapsulate validation, `register`/`errors`, submit handler, `isValid`/`isLoading`, and the Supabase Auth calls (`signInWithPassword` / `signUp`).
- `src/widgets/auth/ui/LoginCard.tsx`, `SignupCard.tsx` — interactive Card+Form assembly, keeping the auth pages as plain server components.

### Changed

- shadcn CLI now installs `ui` primitives into `src/shared/ui/shadcn/`, separate from custom reusable components in `src/shared/ui/` (see `components.json` aliases).
- Replaced hardcoded Tailwind palette classes (`neutral-*`, `zinc-*`) with semantic tokens (`text-foreground`, `text-muted-foreground`, `border-border`, `bg-foreground`) for dark-theme support.
- Replaced `classnames` with the project's `cn()` utility.
- Base-UI-specific API fixes (`@base-ui/react`, not Radix): `DropdownMenuTrigger`/`Button` use the `render` prop instead of `asChild`; link-styled buttons (`variant="link"`) use `render={<Link .../>}` instead of nesting an `<a>` inside a `<button>`.

### Fixed

- `generateAuthToasts` (`src/features/auth/model/toastMessages.ts`) — syntax error, wrong return type, and missing success/error branching.

### Known follow-up

- Wire `generateAuthToasts` into `useLoginForm` / `useSignupForm` to replace the current inline `toast.add(...)` calls.
