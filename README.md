# Portfolio Template

Personal portfolio template built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Bilingual (EN/PT-BR) with smooth animations and a clean dark design.

## Getting started

1. Install dependencies:
   ```
   npm install
   ```
2. Start the dev server:
   ```
   npm run dev
   ```

## How to customize

All personal data lives in two files:

### `lib/data.ts`
- `personalInfo` — name, email, LinkedIn, GitHub, location, CV path
- `projects` — add/edit your projects (title, tags, category, links)
- `experience` — work and education entries
- `techStack` — technologies to display

### `lib/i18n.tsx`
- Update all text strings for both `pt-BR` and `en` locales
- Bio, job descriptions, project descriptions, contact info

### `components/sections/Hero.tsx`
- Name is auto-derived from `personalInfo.name` — no changes needed after updating `data.ts`

### `app/layout.tsx`
- Update `metadata` (title, description, OpenGraph, Twitter)

### `public/`
- Replace `profile.png` with your own photo (64×64 recommended)
- Replace `favicon.ico`
- Add your CV as `files/YourName_CV.pdf` and update the path in `personalInfo.cv`

## Deploy

Works out of the box on **Vercel**, **Netlify**, and **Cloudflare Pages** (all have free tiers).
