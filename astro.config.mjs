import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Deployed to GitHub Pages at https://omettler17.github.io/olivia-nicole-writes/
// Tailwind 4 is wired up via PostCSS (postcss.config.mjs) — the @tailwindcss/vite
// plugin isn't compatible with Astro 6's Rolldown-based Vite yet.
export default defineConfig({
  site: 'https://omettler17.github.io',
  base: '/olivia-nicole-writes',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
})
