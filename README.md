# Krutika Anaganti — Portfolio

A modern, premium personal portfolio website built for Machine Learning Engineer, AI Engineer, Data Scientist, and Software Engineer internship and new grad applications.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React Icons**

## Features

- Dark mode first design with glassmorphism cards and gradient accents
- Sticky navigation with active section highlighting on scroll
- Premium entrance and scroll-triggered animations
- Interactive neural network / particle hero visual
- Featured projects, skills, education timeline
- Dynamic GitHub stats and contribution graph
- SEO and Open Graph metadata
- Fully responsive, mobile-first layout
- Accessibility best practices

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
cd krutika-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Main page composing all sections
│   ├── globals.css     # Global styles and utilities
│   └── loading.tsx     # Route loading state
├── components/
│   ├── layout/         # Navbar, Footer, LoadingScreen
│   ├── sections/       # Hero, About, Skills, Projects, etc.
│   └── ui/             # Reusable UI components
├── data/
│   └── portfolio.ts    # Centralized content configuration
├── hooks/
│   └── useActiveSection.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## Customization

Edit `src/data/portfolio.ts` to update:

- Personal information and social links
- Skills categories
- Project details and GitHub URLs
- Education and coursework

Update `SITE_CONFIG.url` in `portfolio.ts` with your deployed Vercel URL for correct Open Graph links.

## Deploy on Vercel

1. Push this project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Vercel auto-detects Next.js — no extra configuration needed.
5. Click **Deploy**.

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Environment Variables

No environment variables are required for the default setup. GitHub stats load from public APIs using the username in `SITE_CONFIG.githubUsername`.

## License

Personal portfolio — all rights reserved © 2026 Krutika Anaganti
