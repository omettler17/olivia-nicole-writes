# AGENTS.md — Guide for Coding Agents (and humans)

This file orients an AI coding agent (Codex, Claude Code, etc.) and any
collaborator working on **Olivia Nicole Writes**. Read it before making changes.
If you're directing an agent and aren't sure how something works, point the agent
here first.

## What this project is

A personal website + blog for Olivia Nicole (writer, teacher, creative writing
coach). It is a **static site built with Astro** — every page is prerendered to
plain HTML at build time, so it loads fast and is fully indexable by search
engines and social link previews. Almost no JavaScript ships to the browser
(only a small script for the mobile menu, nav highlighting, and scroll behavior).

- **Stack:** Astro 4, Tailwind CSS 3. Blog posts are Markdown content collections.
- **Routing:** real paths (not hash routing). Routes:
  - `/` → home page
  - `/blog/` → blog index
  - `/blog/<slug>/` → an individual post (one static HTML file each)
- **Hosting:** GitHub Pages at `https://omettler17.github.io/olivia-nicole-writes/`.
  Because it's a project page, the site has a base path of `/olivia-nicole-writes`.

## Running it locally

```bash
# Node 20 is required (Astro needs 18.20.8+, 20.3+, or 22+).
nvm use 20            # if this errors, run: nvm install 20
npm install           # first time only
npm run dev           # serves http://localhost:4321/olivia-nicole-writes/
```

> **Note the base path:** the dev server runs at
> `http://localhost:4321/olivia-nicole-writes/` (not the bare root). The bare
> root returns 404 — that's expected.

Other commands:

```bash
npm run build         # static build into dist/ — run this to sanity-check changes
npm run preview       # serve the production build locally
```

## Project layout

```
AGENTS.md             <- you are here
README.md             human-facing setup + quick "add a post" steps
astro.config.mjs      Astro config (site, base path, integrations, markdown)
tailwind.config.js    Tailwind theme (serif font stack, content globs)
src/
  consts.ts           site name, nav links, publications list, withBase() helper
  styles/global.css   base styles + nav/menu states + Markdown ("post-body") styling
  layouts/
    BaseLayout.astro  <html> shell: per-page <title>, meta, Open Graph, canonical
  components/
    Header.astro      sticky nav, mobile drawer, scroll-spy + menu scripts
    Footer.astro      footer (used on the home page only)
  content/
    config.ts         blog collection schema (title, date, excerpt)
    blog/             ONE MARKDOWN FILE PER POST  <-- write posts here
      *.md
  pages/
    index.astro       home page (all sections + scroll-restore script)
    blog/index.astro  blog index (clickable post cards)
    blog/[...slug].astro  post page (renders Markdown, "Keep Reading")
    rss.xml.js        RSS feed
public/
  images/             static images (e.g. olivia-headshot.png)
  robots.txt          points crawlers at the sitemap
  .nojekyll           tells GitHub Pages not to run Jekyll
.github/workflows/    GitHub Pages deploy (builds with npm run build, uploads dist)
```

## Adding a blog post (the most common task)

**You only create one file.** Drop a new Markdown file into `src/content/blog/`.
Astro picks it up automatically — no other files to edit.

1. Create `src/content/blog/<slug>.md`, where `<slug>` is the lowercase,
   hyphenated URL name (e.g. `coffee-chat-bellwood-grant-park.md`). **The
   filename becomes the URL** (`/blog/<slug>/`).
2. Start the file with frontmatter, then the body:

   ```markdown
   ---
   title: 'Coffee Chat: Bellwood (Grant Park)'
   date: 2026-06-03
   excerpt: A one-line teaser shown on the blog index and in "Keep Reading" cards.
   ---

   Your first paragraph. Separate paragraphs with a blank line.

   Use *italics* with single asterisks and **bold** with double asterisks.
   ```

3. Run `npm run dev` and open `http://localhost:4321/olivia-nicole-writes/blog/<slug>/`.

### Frontmatter fields (validated by `src/content/config.ts`)

| Field     | Required | Notes |
|-----------|----------|-------|
| `title`   | yes      | **Quote it if it contains a colon**, e.g. `'Coffee Chat: Casa KaWi'`. |
| `date`    | yes      | `YYYY-MM-DD`. Posts sort newest-first automatically. |
| `excerpt` | yes      | One line. Shown on the blog index and "Keep Reading" cards. |

A typo or missing field fails the build with a clear error — that's the schema
doing its job.

### Markdown supported in the body

`*italics*`, `**bold**`, `[links](https://url)`, `## headings`, bullet/numbered
lists, and `> blockquotes`. Separate paragraphs with a blank line.

### Things that "just work" (don't hand-build them)

- The post is added to the blog index and sorted by date.
- "Keep Reading" shows the 3 most recent other posts.
- Each post gets its own `<title>`, meta description, and Open Graph tags
  (so shared links preview correctly), and is added to the sitemap and RSS feed.

### Style note (matching the existing voice)

Existing posts use curly typography (`’` apostrophes, `—` em dashes, `…`
ellipses) and a casual first-person voice. When converting from a Google Doc,
keep the curly punctuation and turn the doc's `*emphasis*` into Markdown
`*italics*`. Don't add headings the author didn't write.

## Editing layout, nav, or the home page

- Page content lives in `src/pages/*.astro`; shared chrome in
  `src/layouts/BaseLayout.astro` and `src/components/`.
- Styling is Tailwind utility classes inline, plus a few custom rules in
  `src/styles/global.css` (Markdown body, nav active/hover states, mobile menu).
- The color palette uses warm neutrals (background `#fbf8f4`, text `#2f2722`,
  accent `#8f766b`); reuse those hex values rather than adding new colors.
- **Internal links and assets must go through `withBase()`** from `src/consts.ts`
  so the base path is applied (e.g. `withBase('blog/')`, `withBase('images/x.png')`).
  Hard-coded `/blog/` links will break on the deployed site.

## Workflow & deployment

- **Work on a branch, not `main`.** Commit there, push, and open a pull request:

  ```bash
  git checkout -b short-description-of-change
  # ...make changes...
  git add -A && git commit -m "Describe the change"
  git push -u origin short-description-of-change
  ```

- **Deployment is automatic on `main`.** Merging/pushing to `main` triggers the
  GitHub Actions workflow, which runs `npm run build` and publishes `dist/` to
  GitHub Pages. Because a push to `main` goes live, prefer a reviewed PR.

- **Before committing,** run `npm run build` to confirm the project still builds.

## Repo access

The repo is `git@github.com:omettler17/olivia-nicole-writes.git` (SSH, default
branch `main`). The `omettler17` account owns it; collaborators push over SSH.
