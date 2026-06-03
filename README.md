# Olivia Nicole Website

A static **Astro + Tailwind** site, deployed to GitHub Pages. Every page is
prerendered to HTML at build time, so it's fast and fully indexable.

## Run locally

```bash
nvm use 20      # Node 20 required
npm install
npm run dev     # http://localhost:4321/olivia-nicole-writes/
```

> The dev server runs under the `/olivia-nicole-writes/` base path; the bare
> root (`http://localhost:4321/`) returns 404, which is expected.

## Build locally

```bash
npm run build   # outputs static files to dist/
npm run preview # serve the built site
```

## Add a blog post

Each post is its own Markdown file in `src/content/blog/`. Create a file named
after the post slug (e.g. `src/content/blog/revision-notes.md`) — **the filename
is the URL** (`/blog/revision-notes/`):

```markdown
---
title: Revision Notes
date: 2026-06-01
excerpt: A short summary shown on the Blog page and in "Keep Reading" cards.
---

First paragraph. Write naturally — use *italics* and **bold** as needed.

Second paragraph. [Links](https://example.com), lists, and headings work too.
```

Frontmatter fields (validated at build time):

- `title`: the post title. Wrap it in quotes if it contains a colon, e.g. `'Coffee Chat: Casa KaWi'`.
- `date`: publish date in `YYYY-MM-DD` format. Posts sort newest-first automatically.
- `excerpt`: one-line summary shown on the Blog page and in the "Keep Reading" cards.

That's it — the site picks up the new file automatically (no other files to
edit), adds it to the Blog page, links it under "Keep Reading," and includes it
in the sitemap and RSS feed.

See [`AGENTS.md`](AGENTS.md) for a fuller walkthrough.

## Add a personal blog link

In `src/consts.ts`, set `PERSONAL_BLOG_URL` to your external blog URL:

```ts
export const PERSONAL_BLOG_URL = 'https://your-personal-blog.com'
```

When set, a **Personal Blog** link appears on the Blog page.

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the
workflow in `.github/workflows/` (it runs `npm run build` and publishes `dist/`).
In the repository settings under **Pages → Build and deployment**, the source is
**GitHub Actions**.

The contact form submits to `olivianicolecontact@gmail.com` through FormSubmit.
