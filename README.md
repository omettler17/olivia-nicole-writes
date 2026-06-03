# Olivia Nicole Website

This is a React + Vite + Tailwind site ready to upload to GitHub and deploy with GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## Add a blog post

Each post is its own Markdown file in `src/posts/`. To publish, create a new
file named after the post slug (for example `src/posts/revision-notes.md`) with
a frontmatter block followed by the post body:

```markdown
---
slug: revision-notes
title: Revision Notes
date: 2026-06-01
excerpt: A short summary shown on the Blog page.
---

First paragraph. Write naturally — use *italics* and **bold** as needed.

Second paragraph. [Links](https://example.com), lists, and headings work too.
```

Frontmatter fields:

- `slug`: lowercase URL name (matches the filename). The post page is created at `#/blog/revision-notes`.
- `title`: the post title. Wrap it in quotes if it contains a colon, e.g. `'Coffee Chat: Casa KaWi'`.
- `date`: publish date in `YYYY-MM-DD` format. Posts are sorted newest-first automatically.
- `excerpt`: one-line summary shown on the Blog page and in the "Keep Reading" cards.

That's it — the site picks up the new file automatically (no other files to edit),
adds it to the Blog page, sorts it by date, and links it from other posts under
"Keep Reading."

See [`AGENTS.md`](AGENTS.md) for a fuller walkthrough, including the Markdown
formatting that's supported.

## Add a personal blog link

In `src/blogPosts.js`, set `personalBlogUrl` to your external blog URL:

```js
export const personalBlogUrl = 'https://your-personal-blog.com'
```

Once that value is filled in, the website will show a separate **Personal Blog** link on the Blog page and on blog post pages.

## Launch on GitHub Pages

1. Create a new GitHub repository.
2. Upload or push every file in this folder to the repository.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Push to the `main` branch.
7. Open the **Actions** tab and wait for the deploy workflow to finish.

The contact form submits to `olivianicolecontact@gmail.com` through FormSubmit.
