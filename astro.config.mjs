import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// Deployed to GitHub Pages at https://omettler17.github.io/olivia-nicole-writes/
export default defineConfig({
  site: 'https://omettler17.github.io',
  base: '/olivia-nicole-writes',
  trailingSlash: 'ignore',
  integrations: [tailwind(), sitemap()],
  // Keep post text byte-for-byte with the source Markdown (matches the old
  // react-markdown output); GFM stays on for links/lists/tables.
  markdown: {
    smartypants: false,
  },
})
