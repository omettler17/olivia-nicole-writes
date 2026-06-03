// Personal blog link shown in the nav when set (leave empty to hide it).
export const personalBlogUrl = ''

// Each blog post is a Markdown file in src/posts/ with YAML-style frontmatter
// (slug, title, date, excerpt). Drop in a new .md file and it shows up here
// automatically — no edits to this file required. See AGENTS.md for the how-to.
const postFiles = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) {
    return { data: {}, body: raw.trim() }
  }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue
    const separator = line.indexOf(':')
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '')
    data[key] = value
  }

  return { data, body: match[2].trim() }
}

export const blogPosts = Object.entries(postFiles)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const slug = data.slug || path.split('/').pop().replace(/\.md$/, '')
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      body,
    }
  })
  // Newest first, so both the blog index and "Keep Reading" stay in order.
  .sort((a, b) => b.date.localeCompare(a.date))
