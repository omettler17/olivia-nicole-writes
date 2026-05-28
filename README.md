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

Blog posts live in `src/blogPosts.js`. The Blog page is available at `#/blog`.

To add a post, paste a new object inside the `blogPosts` array and fill in:

- `slug`: lowercase URL name, such as `revision-notes`
- `title`: the post title
- `date`: publish date in `YYYY-MM-DD` format
- `excerpt`: short summary shown on the Blog page
- `content`: one string per paragraph

Example:

```js
{
  slug: 'revision-notes',
  title: 'Revision Notes',
  date: '2026-06-01',
  excerpt: 'A short summary of the post.',
  content: [
    'First paragraph.',
    'Second paragraph.',
  ],
}
```

The site will automatically add the post to the Blog page and create a post page at `#/blog/revision-notes`.

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
