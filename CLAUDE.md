# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The personal portfolio of **Abhishek Murali**, Principal Data Analyst at Port. It
deploys to GitHub Pages at **https://abhishekm117.github.io** (a GitHub *user*
page — served from the domain root, so there is **no `base` path**).

## Stack

- **Astro 5** — static site generator. No React/Vue; use `.astro` components.
- **Content Collections** (`src/content.config.ts`) for blog posts and projects,
  loaded from Markdown via the `glob` loader.
- **Plain CSS** in `src/styles/global.css` — a CSS-variable design system. No
  Tailwind, no CSS framework.
- **@astrojs/rss** (`/rss.xml`) and **@astrojs/sitemap** for feeds.
- Deploys via **GitHub Actions** (`.github/workflows/deploy.yml`).

## Commands

```bash
npm install      # first time
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project map

```
src/
  content.config.ts        # collection schemas — edit if frontmatter changes
  content/blog/*.md        # blog posts (one file = one post)
  content/projects/*.md    # case studies (one file = one project)
  data/site.ts             # name, role, links, hero stats — edit me for bio/contact
  data/experience.ts       # work history timeline
  data/skills.ts           # skills grid
  styles/global.css        # the entire design system
  components/               # Nav, Footer, ThemeToggle, ProjectCard, PostCard
  layouts/Base.astro        # <head>, fonts, theme bootstrap, nav/footer shell
  layouts/Article.astro     # shared layout for blog + project detail pages
  pages/                    # routes (index, blog/, projects/, 404, rss.xml)
public/assets/             # images, CV PDF, report PDFs (see "Assets" below)
```

## How to add content

**A blog post:** create `src/content/blog/my-slug.md` with frontmatter:

```yaml
---
title: "..."
description: "..."        # one-line summary, used in cards + SEO
pubDate: 2026-03-01
pillar: "Engineering / Platform"
tags: ["BigQuery", "dbt"]
draft: false              # true hides it from the site
---
```

The filename is the URL slug (`/blog/my-slug`). It appears automatically in the
blog index, the homepage's latest-posts grid, and the RSS feed. No other file
needs editing.

**A project / case study:** create `src/content/projects/my-slug.md`. See an
existing file for the full frontmatter (company, role, period, stack, metrics,
optional `pdf`, `order`, `featured`). Lower `order` sorts first.

## Conventions

- **Voice:** first-person, direct, technically credible. Lead with the decision
  or metric, not the tooling. Avoid hype.
- **Numbers stay honest.** Hero stats live in `data/site.ts`; only use figures
  that are real and current.
- **Theme:** dark is default; a light theme exists via `[data-theme="light"]`.
  Any new color MUST be a CSS variable defined for *both* themes in `global.css`.
- **One accent color** (lime `--accent`). Use it sparingly — eyebrows, key
  numbers, hover states. Don't introduce new accent hues.
- **Fonts:** Archivo (display/body) + JetBrains Mono (labels, code, numerals).
  Don't add more font families.
- **No client JS frameworks.** Small inline `<script>` for interactivity is fine
  (see `Nav.astro`, `ThemeToggle.astro`).
- Keep components accessible: real `<a>`/`<button>`, `aria-*` where relevant,
  and respect `prefers-reduced-motion` (already handled in CSS).

## Assets (action needed)

These paths are referenced but the files must be added to `public/assets/`:

- `public/assets/Abhishek_Murali_CV.pdf` — the downloadable CV
- `public/assets/og.png` — 1200×630 social-share image
- `public/assets/reports/*.pdf` — the full case-study reports (optional)

The current live site already has images under its `/assets/` folder — copy any
you want to reuse (headshot, logos) into `public/assets/`.

## Deploy

Push to `main` → the Actions workflow builds and deploys. **One-time setup:** in
the repo's *Settings → Pages*, set **Source = GitHub Actions** (not "Deploy from a
branch"). After that it's automatic.

## Things to be careful about

- Don't add a `base` to `astro.config.mjs` — this is a user page at the root.
- When changing collection frontmatter, update the Zod schema in
  `src/content.config.ts` or the build will fail with a validation error.
- `post.id` (from the glob loader) is the slug used in routes — keep filenames
  URL-safe (lowercase, hyphens).
