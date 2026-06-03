# Olivia Nicole Writes

The personal website and blog for Olivia Nicole — writer, teacher, and creative
writing coach.

Built as a **static [Astro](https://astro.build) + Tailwind CSS** site. Every
page is prerendered to plain HTML at build time, so it loads fast, ships almost
no JavaScript, and each page is fully indexable (its own title/description,
Open Graph tags, plus a sitemap and RSS feed). Deployed to GitHub Pages.

## Run locally

```bash
nvm use 20      # Node 20 required (Astro needs 18.20.8+, 20.3+, or 22+)
npm install     # first time only
npm run dev     # http://localhost:4321/olivia-nicole-writes/
```

> The site lives under the `/olivia-nicole-writes/` base path (it's a GitHub
> project page). The bare root `http://localhost:4321/` returns 404 — expected.

```bash
npm run build   # static build into dist/
npm run preview # serve the built site exactly as deployed
```

## Add a blog post

Each post is one Markdown file in `src/content/blog/`. Create a file named after
the post slug (e.g. `src/content/blog/revision-notes.md`) — **the filename is the
URL** (`/blog/revision-notes/`). No other files to edit:

```markdown
---
title: Revision Notes
date: 2026-06-01
excerpt: A short summary shown on the Blog page and in "Keep Reading" cards.
---

First paragraph. Write naturally — use *italics* and **bold** as needed.

Second paragraph. [Links](https://example.com), lists, and headings work too.
```

Frontmatter (validated at build time — a typo fails the build):

| Field     | Notes |
|-----------|-------|
| `title`   | Quote it if it contains a colon, e.g. `'Coffee Chat: Casa KaWi'`. |
| `date`    | `YYYY-MM-DD`. Posts sort newest-first automatically. |
| `excerpt` | One line. Shown on the Blog page and "Keep Reading" cards. |

The post is added to the blog index, linked under "Keep Reading," given its own
page metadata, and included in the sitemap and RSS feed — automatically.

## Project structure

```
src/
  pages/            index.astro, blog/index.astro, blog/[...slug].astro, rss.xml.js
  content/blog/     the Markdown posts (one file each)
  layouts/          BaseLayout.astro (the <head>: title, meta, Open Graph)
  components/       Header.astro (nav + mobile menu), Footer.astro
  styles/global.css base styles + Markdown post styling
  consts.ts         site name, nav links, publications, withBase() helper
public/             images, robots.txt
```

> Internal links and assets go through `withBase()` in `src/consts.ts` so the
> base path is applied. See [`AGENTS.md`](AGENTS.md) for a fuller walkthrough.

## Add a personal blog link

In `src/consts.ts`, set `PERSONAL_BLOG_URL` to your external blog URL; a
**Personal Blog** link then appears on the Blog page:

```ts
export const PERSONAL_BLOG_URL = 'https://your-personal-blog.com'
```

## Deployment

Pushing to `main` automatically builds and publishes the site to GitHub Pages via
the workflow in `.github/workflows/` (it runs `npm run build` and deploys `dist/`).
In the repo settings under **Pages → Build and deployment**, the source is
**GitHub Actions**. Prefer landing changes through a reviewed pull request, since
a push to `main` goes live.

The contact form submits to `olivianicolecontact@gmail.com` via FormSubmit.
