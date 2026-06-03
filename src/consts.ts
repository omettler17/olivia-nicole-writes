// Site-wide constants and helpers.

export const SITE_NAME = 'Olivia Nicole'
export const SITE_TITLE = 'Olivia Nicole | Writer, Teacher, Creative Writing Coach'
export const SITE_TAGLINE = 'Writer • Teacher • Creative Writing Coach'
export const SITE_DESCRIPTION =
  'Olivia Nicole offers creative writing coaching, literary support, and editorial feedback for emerging writers.'
export const SOCIAL_DESCRIPTION =
  'Creative writing coaching, literary support, and editorial feedback for emerging writers — plus a blog on writing, life, and coffee.'
export const GOOGLE_SITE_VERIFICATION = 'ybUHzJcEcpH5BtWInQWrJMTsG7YQKMi2WVWaumjS8Os'
// External personal blog link (shown in nav/blog page when set; empty = hidden).
export const PERSONAL_BLOG_URL = ''

// Prefix an internal path/asset with the configured base, tolerating a base
// with or without a trailing slash. withBase('') -> "/olivia-nicole-writes/".
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
export function withBase(path = '') {
  return `${BASE}/${String(path).replace(/^\//, '')}`
}

// Primary navigation. Section links carry a `spy` id so the scroll-spy script
// can highlight them on the home page; the Blog link is a real route.
export const NAV = [
  { id: 'about', label: 'About', href: withBase('#about'), spy: 'about' },
  { id: 'services', label: 'Services', href: withBase('#services'), spy: 'services' },
  { id: 'blog', label: 'Blog', href: withBase('blog/') },
  { id: 'contact', label: 'Contact', href: withBase('#contact'), spy: 'contact' },
  { id: 'publications', label: 'Publications', href: withBase('#publications'), spy: 'publications' },
]

// Home-page section ids used by the scroll-spy + scroll-restore scripts.
export const HOME_SECTION_IDS = ['about', 'services', 'contact', 'publications']

export const PUBLICATIONS = [
  { title: 'Cake', publication: 'Quirk', url: 'https://www.uiwquirk.org/poetry2020/cake-olivia-mettler' },
  { title: 'STALE', publication: 'Gambling the Aisle', url: 'https://www.gamblingtheaisle.com/monthly-publications/stale-by-olivia-mettler' },
  {
    title: 'You Know the Cigarette Lighter Works',
    publication: 'South Florida Poetry Journal',
    url: 'https://www.southfloridapoetryjournal.com/poetry-34-aug-24.html#:~:text=Olivia%20Mettler%20is,talk%20to%20birds',
  },
  {
    title: "I keep trying to write a poem about roosters but write the chickens missing feathers on my family's farm instead.",
    publication: 'COOP',
    url: 'https://coopzine.com/poetry/mettler-fowl/',
  },
  {
    title: "My Father Doesn't Know I Wasn't a Bird When I Was Born",
    publication: 'COOP',
    url: 'https://coopzine.com/poetry/mettler-14/',
  },
  { title: 'When my mom forgives my father', publication: 'Club Plum', url: 'https://clubplumliteraryjournal.com/olivia-mettler/' },
  { title: "When finding your father's porn", publication: 'Club Plum', url: 'https://clubplumliteraryjournal.com/olivia-mettler/' },
  { title: 'The Whiteness of -', publication: 'Heron Tree', url: 'https://herontree.com/wp-content/uploads/2024/11/mettler1pdf.pdf' },
]

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
