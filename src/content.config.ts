import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Each blog post is a Markdown file in src/content/blog/. The URL slug comes
// from the filename (e.g. dollywood-dalliance.md -> /blog/dollywood-dalliance/).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
  }),
})

export const collections = { blog }
