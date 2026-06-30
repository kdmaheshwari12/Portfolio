# Kundan Kumar — Portfolio

Premium animated portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and ShadCN UI.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** ShadCN UI
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + EmailJS
- **Scroll:** Lenis Smooth Scroll

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production site URL |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Updating Content

All portfolio data lives in `src/data/`:

| File | Content |
|---|---|
| `profile.ts` | Name, bio, stats, education |
| `projects.ts` | Project cards and details |
| `experience.ts` | Work history |
| `skills.ts` | Skill categories |
| `leadership.ts` | Leadership roles |
| `certificates.ts` | Certifications |
| `socials.ts` | Social links and nav |
| `services.ts` | Services offered |
| `testimonials.ts` | Testimonial carousel |

## Resumes

Place your PDF files at:

- `public/resume/development-resume.pdf`
- `public/resume/sqa-resume.pdf`

## Deploy on Vercel

```bash
npm run build
```

Push to GitHub and import the repo in [Vercel](https://vercel.com). No extra configuration needed.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── effects/      # Cursor, particles, aurora, loader
│   ├── layout/       # Navbar, Footer
│   ├── pages/        # Page-level client components
│   ├── providers/    # Theme, smooth scroll
│   ├── sections/     # Homepage sections
│   ├── shared/       # Reusable UI helpers
│   └── ui/           # ShadCN primitives
├── data/             # Portfolio content (edit here)
└── lib/              # Utils and animation presets
```
