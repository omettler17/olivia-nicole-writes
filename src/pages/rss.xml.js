import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_NAME, SITE_DESCRIPTION, withBase } from '../consts'

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  )

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    // Channel/home link is the project base, not just the origin root.
    site: new URL(import.meta.env.BASE_URL, context.site).href,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: withBase(`blog/${post.slug}/`),
    })),
  })
}
