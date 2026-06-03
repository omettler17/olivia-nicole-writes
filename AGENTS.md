# AGENTS.md — Guide for Coding Agents (and humans)

This file orients an AI coding agent (Codex, Claude Code, etc.) and any
collaborator working on **Olivia Nicole Writes**. Read it before making changes.
If you're directing an agent and aren't sure how something works, point the agent
here first.

## What this project is

A personal website + blog for Olivia Nicole (writer, teacher, creative writing
coach). It's a single-page React app with a small hash-based router. The two
parts that matter most are the **home page** and the **blog**.

- **Stack:** React 19, Vite 6, Tailwind CSS 3. Blog post bodies are Markdown,
  rendered with `react-markdown` + `remark-gfm`.
- **Routing:** hash-based (no server). Routes:
  - `#/` (or no hash) → home page
  - `#/blog` → blog index (list of posts)
  - `#/blog/<slug>` → an individual post

## Running it locally

```bash
# Node 20 is required. An older Node (e.g. v16) WILL fail with Vite 6.
nvm use 20            # if this errors, run: nvm install 20
npm install           # first time only
npm run dev           # serves http://localhost:5173/
```

Other commands:

```bash
npm run build         # production build into dist/ — run this to sanity-check changes
npm run preview       # serve the production build locally
```

> **Gotcha — Node version:** if `npm run dev` throws Vite/ESM errors, you're
> almost certainly on the wrong Node. Run `node --version`; it must be 20.x.
> Run `nvm use 20` first.

## Project layout

```
AGENTS.md            <- you are here
README.md            human-facing setup + quick "add a post" steps
index.html           Vite entry
src/
  main.jsx           React bootstrap
  App.jsx            the entire app: home page, blog index, post page, router
  blogPosts.js       loads every post in src/posts/ (no need to edit when adding posts)
  posts/             ONE MARKDOWN FILE PER BLOG POST  <-- write posts here
    *.md
  index.css          Tailwind entry
public/images/       static images (e.g. headshot)
.github/workflows/   GitHub Pages deploy (deploy.yml + static.yml)
```

## Adding a blog post (the most common task)

**You only create one file.** Drop a new Markdown file into `src/posts/`. The
loader in `src/blogPosts.js` picks it up automatically — you do **not** edit
`blogPosts.js` or `App.jsx`.

1. Create `src/posts/<slug>.md`, where `<slug>` is the lowercase, hyphenated URL
   name (e.g. `coffee-chat-bellwood-grant-park.md`).
2. Start the file with a frontmatter block, then the body:

   ```markdown
   ---
   slug: coffee-chat-bellwood-grant-park
   title: 'Coffee Chat: Bellwood (Grant Park)'
   date: 2026-06-03
   excerpt: A one-line teaser shown on the blog index and in "Keep Reading" cards.
   ---

   Your first paragraph goes here. Separate paragraphs with a blank line.

   Use *italics* with single asterisks and **bold** with double asterisks.
   ```

3. Run `npm run dev` and open `http://localhost:5173/#/blog/<slug>` to check it.

### Frontmatter fields

| Field     | Required | Notes |
|-----------|----------|-------|
| `slug`    | yes      | Must match the filename (without `.md`). Lowercase, hyphenated. |
| `title`   | yes      | **Quote it if it contains a colon**, e.g. `'Coffee Chat: Casa KaWi'`. Otherwise quotes are optional. |
| `date`    | yes      | `YYYY-MM-DD`. Posts are sorted newest-first automatically from this. |
| `excerpt` | yes      | One line. Shown on the blog index and the "Keep Reading" cards. Keep it to a single line (no line breaks). |

### Markdown formatting supported in the body

- Paragraphs: separate with a blank line.
- `*italics*` and `**bold**`.
- `[link text](https://url)` — links open in a new tab and are styled automatically.
- Headings within a post: `## Subheading` / `### Smaller subheading`.
- Bullet lists (`- item`) and numbered lists (`1. item`).
- `> blockquote` for pull quotes.

### Things that "just work" (don't hand-build them)

- The post is added to the blog index automatically and sorted by `date`.
- A "Keep Reading" section at the bottom of every post shows the 3 most recent
  other posts.
- Navigating between posts scrolls back to the top automatically.

### Style note (matching the existing voice)

Existing posts use curly typography (`'` apostrophes, `—` em dashes, `…`
ellipses) and a casual first-person voice. When converting from a Google Doc,
keep the curly punctuation and turn the doc's `*emphasis*` into Markdown
`*italics*`. Don't add headings the author didn't write.

## Editing the home page or layout

Everything visual lives in `src/App.jsx`. It's one file with clearly named
components (`OliviaNicoleWebsite`, `SiteHeader`, `BlogPostPage`, etc.). Styling
is Tailwind utility classes inline. The site's color palette uses warm neutrals
(e.g. background `#fbf8f4`, text `#2f2722`, accent `#8f766b`); reuse those hex
values for consistency rather than introducing new colors.

## Workflow & deployment

- **Work on a branch, not `main`.** Create a feature branch, commit there, push
  it, and open a pull request for review:

  ```bash
  git checkout -b short-description-of-change
  # ...make changes...
  git add -A && git commit -m "Describe the change"
  git push -u origin short-description-of-change
  ```

- **Deployment is automatic on `main`.** Merging/pushing to `main` triggers the
  GitHub Actions workflow (`.github/workflows/`) which builds and publishes to
  GitHub Pages. Because a push to `main` goes live, prefer landing changes via a
  reviewed PR rather than committing to `main` directly.

- **Before committing,** run `npm run build` to confirm the project still
  compiles.

## Repo access

The repo is `git@github.com:omettler17/olivia-nicole-writes.git` (SSH, default
branch `main`). The `omettler17` account owns it; collaborators push over SSH.
