# Abhishek Murali — Portfolio

Personal portfolio + blog for a Principal Data Analyst. Built with
[Astro](https://astro.build), deployed to GitHub Pages.

**Live:** https://abhishekm117.github.io

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

## Adding content

- **Blog post** → add a Markdown file to `src/content/blog/`.
- **Case study** → add a Markdown file to `src/content/projects/`.

Both appear automatically — see `CLAUDE.md` for the exact frontmatter fields.
Edit your bio, contact details, and hero stats in `src/data/site.ts`.

## Deploy

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`).

**One-time:** In **Settings → Pages**, set **Source = GitHub Actions**. Then every
push to `main` builds and publishes automatically.

## Assets to add

Drop these into `public/assets/` (referenced but not included):

- `Abhishek_Murali_CV.pdf` — downloadable CV
- `og.png` — 1200×630 social-share image
- `reports/*.pdf` — full case-study PDFs (optional)

## Stack

Astro 5 · Content Collections · plain CSS design system · RSS · sitemap.
Dark/light theme. No client-side framework.
