import { defineCollection, z } from 'astro:content'

// Each blog post is a Markdown file in src/content/blog/ with this frontmatter.
// The URL slug comes from the filename (e.g. dollywood-dalliance.md -> /blog/dollywood-dalliance/).
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
  }),
})

export const collections = { blog }
