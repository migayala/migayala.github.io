# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

**Development:**
- `npm run dev` - Start development server (Next.js)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Package Management:**
- Uses `pnpm` as primary package manager (pnpm-lock.yaml present)
- Also has npm lock file for compatibility

## Architecture Overview

This is a **Next.js 15 portfolio website** with the following key characteristics:

**Framework & Build:**
- Next.js 15 with App Router (`app/` directory structure)
- TypeScript configuration with strict mode
- Static export configuration (`output: 'export'`) for deployment
- Image optimization disabled for static export compatibility

**Styling & UI:**
- **Tailwind CSS** with custom design system using CSS variables
- **shadcn/ui** component library (extensive component collection in `components/ui/`)
- **Framer Motion** for animations
- Dark mode support via `next-themes`
- Custom glassmorphic design with gradient backgrounds

**Component Architecture:**
- Custom portfolio components in `/components/` (e.g., `creative-hero.tsx`, `project-card.tsx`, `timeline.tsx`)
- Reusable UI components from shadcn/ui in `/components/ui/`
- Hooks in `/hooks/` directory
- Utilities in `/lib/utils.ts`

**Key Features:**
- Single-page portfolio with sections: Hero, About, Skills, Projects, Experience, Contact
- Interactive elements: mouse follower, scroll progress, floating navigation
- Glassmorphic cards and animated backgrounds
- Contact form with form validation (React Hook Form + Zod)
- Responsive design with mobile-first approach

**File Structure:**
- `app/layout.tsx` - Root layout (minimal, basic HTML structure)
- `app/page.tsx` - Main portfolio page with all sections
- `components/` - Custom portfolio components
- `components/ui/` - shadcn/ui components
- Path alias: `@/*` maps to root directory

**Notable Dependencies:**
- UI: Radix UI primitives, Lucide React icons
- Forms: React Hook Form, Zod validation
- Animation: Framer Motion
- Charts: Recharts
- Notifications: Sonner