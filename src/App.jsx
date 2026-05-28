import { useEffect, useState } from 'react'
import { blogPosts, personalBlogUrl } from './blogPosts'

export default function OliviaNicoleWebsite() {
  const [currentHash, setCurrentHash] = useState(() => getCurrentHash())

  useEffect(() => {
    function handleHashChange() {
      setCurrentHash(getCurrentHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const activePostSlug = getActivePostSlug(currentHash)
  const activePost = blogPosts.find((post) => post.slug === activePostSlug)
  const showBlogIndex = currentHash === '#/blog'
  const showBlogPost = Boolean(activePost)

  const publications = [
    {
      title: 'Cake',
      publication: 'Quirk',
      url: 'https://www.uiwquirk.org/poetry2020/cake-olivia-mettler',
    },
    {
      title: 'STALE',
      publication: 'Gambling the Aisle',
      url: 'https://www.gamblingtheaisle.com/monthly-publications/stale-by-olivia-mettler',
    },
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
    {
      title: 'When my mom forgives my father',
      publication: 'Club Plum',
      url: 'https://clubplumliteraryjournal.com/olivia-mettler/',
    },
    {
      title: "When finding your father's porn",
      publication: 'Club Plum',
      url: 'https://clubplumliteraryjournal.com/olivia-mettler/',
    },
    {
      title: 'The Whiteness of -',
      publication: 'Heron Tree',
      url: 'https://herontree.com/wp-content/uploads/2024/11/mettler1pdf.pdf',
    },
  ]

  if (showBlogPost) {
    return <BlogPostPage post={activePost} />
  }

  if (showBlogIndex) {
    return <BlogIndexPage />
  }

  return (
    <div id="top" className="min-h-screen bg-[#fbf8f4] text-[#2f2722] font-serif">
      <SiteHeader
        brandHref="#top"
        brandLabel="Back to top"
        links={[
          { href: '#about', label: 'About' },
          { href: '#services', label: 'Services' },
          { href: '#/blog', label: 'Blog' },
          { href: '#contact', label: 'Contact' },
          { href: '#publications', label: 'Publications' },
        ]}
      />

      <section className="max-w-6xl mx-auto px-5 py-14 grid gap-10 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24 md:items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-[#8f766b] mb-6">
            Literary Coaching & Editorial Support
          </p>

          <h2 className="text-4xl leading-tight mb-8 sm:text-5xl md:text-6xl">
            Supporting emerging writers with crafting stronger manuscripts and creative practices.
          </h2>

          <p className="text-lg leading-8 text-[#5f5149] mb-10 max-w-xl">
            I'm Olivia Nicole, a writer, teacher, and creative writing coach. I work with poets and emerging writers to create supportive, craft-focused spaces that meet them where they're at while helping them reach where they want to be.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-[#af9d93] text-[#fffaf4] px-8 py-4 rounded-2xl text-sm uppercase tracking-wide hover:bg-[#9f8b80] transition"
            >
              Work With Me
            </a>

            <a
              href="#contact"
              className="border border-[#af9d93] px-8 py-4 rounded-2xl text-sm uppercase tracking-wide hover:bg-[#f2e9dd] transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#dfc9b9] shadow-xl shadow-[#af9d93]/20 border border-[#c3b198]">
            <img
              src="./images/olivia-headshot.png"
              alt="Portrait of Olivia Nicole"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6ded5] bg-[#f6f0ea]">
        <div className="max-w-5xl mx-auto px-5 py-16 text-center sm:px-6 md:py-20">
          <p className="uppercase tracking-[0.2em] text-sm text-[#755f54] mb-6">
            Who I Help
          </p>

          <h3 className="text-3xl leading-tight mb-8 md:text-4xl">
            Writers looking for guidance, accountability, and thoughtful feedback outside traditional writing spaces.
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
            <div className="bg-[#fffdf9] p-8 rounded-3xl shadow-sm border-t-4 border-[#dfc9b9]">
              <h4 className="text-xl mb-4">Emerging Poets</h4>
              <p className="leading-7 text-[#5f5149]">
                Writers developing their voice and preparing work for publication, workshops, or chapbook submissions.
              </p>
            </div>

            <div className="bg-[#fffdf9] p-8 rounded-3xl shadow-sm border-t-4 border-[#c3b198]">
              <h4 className="text-xl mb-4">First-Book Writers</h4>
              <p className="leading-7 text-[#5f5149]">
                Writers navigating structure, revision, momentum, and the emotional realities of longer creative projects.
              </p>
            </div>

            <div className="bg-[#fffdf9] p-8 rounded-3xl shadow-sm border-t-4 border-[#af9d93]">
              <h4 className="text-xl mb-4">Writers Rebuilding Practice</h4>
              <p className="leading-7 text-[#5f5149]">
                People balancing work, life, and creativity who need support maintaining sustainable writing habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-5 py-16 sm:px-6 md:py-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8f766b] mb-4">
            About
          </p>

          <h3 className="text-4xl mb-8 md:text-5xl">Writing is hard work. Support helps.</h3>
        </div>

        <div className="space-y-7 text-base leading-8 text-[#5f5149] md:text-lg md:leading-9">
          <p>
            I'll be the first person to admit that writing is hard, and that's because writing isn't just writing. It's revising, planning, reading, building community, and finding the courage to put your work out into the world.
          </p>

          <p>
            There are many ways to find support, and I'd encourage you to explore what works for you. But I also know that access to a writing community isn't guaranteed, even with the far reach of the internet. That's why I do this work: to build bridges where they're missing or have fallen apart, because creatives live everywhere and deserve support no matter their location or situation.
          </p>

          <p>
            I'm a published poet and a middle school teacher, which means I spend a lot of time thinking about how people learn, grow, and get stuck. I also know how the right kind of support can make all the difference. I believe that people don't stop needing teachers simply because they've left school. Writing is a skill that takes time, patience, and care to refine at every stage.
          </p>

          <p>
            My approach to coaching is rooted in connection first. Whether you're looking for a single round of editorial feedback on a piece, or ongoing 1:1 support around craft, process, and accountability, I want you to feel met where you are, not measured against where you think you should be.
          </p>
        </div>
      </section>

      <section id="services" className="bg-[#af9d93] text-[#fffaf4] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-12 md:mb-16">
              <p className="uppercase tracking-[0.2em] text-sm text-[#fbf8f4] mb-4">
              Services
            </p>

            <h3 className="text-4xl mb-6 md:text-5xl">Coaching & Editorial Support</h3>

            <p className="text-lg text-[#fffaf4] max-w-3xl leading-8">
              Thoughtful, personalized support for writers at different stages of their creative process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="bg-[#fffaf4] text-[#2f2722] p-6 rounded-2xl shadow-xl shadow-[#6d5d54]/15 border border-[#fffdf9] h-full flex flex-col sm:p-8 sm:rounded-3xl lg:min-h-[37rem]">
              <p className="uppercase tracking-[0.15em] text-sm text-[#755f54] mb-4">
                Best For Most Clients
              </p>

              <h4 className="text-2xl mb-6 sm:text-3xl">Starter Package</h4>

              <p className="leading-8 mb-6 text-[#5f5149]">
                Four coaching sessions over eight weeks for writers seeking sustained support and momentum.
              </p>

              <ul className="space-y-3 mb-8 leading-7 text-[#5f5149] flex-1">
                <li>4 x 60-minute sessions used within 8 weeks</li>
                <li>Email support between sessions</li>
                <li>Brief written notes after each call</li>
              </ul>

              <p className="text-3xl mb-8">$285</p>

              <a href="#contact" className="block text-center w-full bg-[#2f2722] text-[#fffaf4] py-4 rounded-2xl uppercase tracking-wide text-sm hover:bg-[#4b3f38] transition">
                Book Package
              </a>
            </div>

            <div className="bg-[#eee3d8] text-[#2f2722] p-6 rounded-2xl border border-[#f5ece5] shadow-xl shadow-[#6d5d54]/10 h-full flex flex-col sm:p-8 sm:rounded-3xl lg:min-h-[37rem]">
              <p className="uppercase tracking-[0.15em] text-sm text-[#755f54] mb-4">
                1:1 Coaching
              </p>

              <h4 className="text-2xl mb-6 sm:text-3xl">Single Coaching Session</h4>

              <p className="text-[#5f5149] leading-8 mb-6">
                A 60-minute, pay-as-you-go session for writers who want to try coaching before committing to a package.
              </p>

              <ul className="space-y-3 text-[#5f5149] mb-8 leading-7 flex-1">
                <li>Client submits work in advance</li>
                <li>Poems, pages, or a prompt welcome</li>
                <li>Focused discussion on craft, direction, and feedback</li>
              </ul>

              <p className="text-3xl mb-8">$85</p>

              <a href="#contact" className="block text-center w-full bg-[#2f2722] text-[#fffaf4] py-4 rounded-2xl uppercase tracking-wide text-sm hover:bg-[#4b3f38] transition">
                Book Session
              </a>
            </div>

            <div className="bg-[#e0d0c4] text-[#2f2722] p-6 rounded-2xl border border-[#eaded5] shadow-xl shadow-[#6d5d54]/10 h-full flex flex-col sm:p-8 sm:rounded-3xl lg:min-h-[37rem]">
              <p className="uppercase tracking-[0.15em] text-sm text-[#8f766b] mb-4">
                Poetry-Specific
              </p>

              <h4 className="text-2xl mb-6 sm:text-3xl">Poem Critique</h4>

              <p className="text-[#5f5149] leading-8 mb-6">
                Flat-rate critique for poems and chapbook manuscripts, designed for work that needs close, thoughtful attention beyond per-word pricing.
              </p>

              <ul className="space-y-3 text-[#5f5149] mb-8 leading-7 flex-1">
                <li>1 poem: $35</li>
                <li>3 poems: $90</li>
                <li>Chapbook manuscript, 20-30 pages: $250-$350</li>
                <li>Written craft notes in the document</li>
                <li>1-page letter on overall strengths and suggested revisions</li>
              </ul>

              <p className="text-3xl mb-8">From $35</p>

              <a href="#contact" className="block text-center w-full bg-[#2f2722] text-[#fffaf4] py-4 rounded-2xl uppercase tracking-wide text-sm hover:bg-[#4b3f38] transition">
                Request Critique
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f6f0ea] py-16 border-t border-[#e6ded5] md:py-24">
        <div className="max-w-4xl mx-auto px-5 text-center sm:px-6">
          <p className="uppercase tracking-[0.2em] text-sm text-[#755f54] mb-4">
            Contact
          </p>

          <h3 className="text-4xl mb-8 md:text-5xl">Let's work together.</h3>

          <p className="text-lg leading-8 text-[#5f5149] mb-12 max-w-2xl mx-auto">
            Whether you're looking for coaching, editorial support, or guidance reconnecting with your writing practice, I'd love to hear from you.
          </p>

          <div className="bg-[#fffdf9] rounded-2xl p-6 shadow-lg shadow-[#af9d93]/20 max-w-2xl mx-auto text-left border border-[#d3cac0] sm:p-10 sm:rounded-[2rem]">
            <form
              className="space-y-6"
              action="https://formsubmit.co/olivianicolecontact@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New writing inquiry from Olivia Nicole Writes" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className="block mb-2 text-sm uppercase tracking-wide" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-[#c3b198] rounded-xl px-4 py-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#af9d93]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm uppercase tracking-wide" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-[#c3b198] rounded-xl px-4 py-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#af9d93]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm uppercase tracking-wide" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full border border-[#c3b198] rounded-xl px-4 py-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#af9d93]"
                  placeholder="Tell me a bit about your project or what kind of support you're looking for."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#af9d93] text-[#fffaf4] py-4 rounded-2xl uppercase tracking-wide text-sm hover:bg-[#9f8b80] transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="publications" className="max-w-5xl mx-auto px-5 py-16 sm:px-6 md:py-24">
        <div className="mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8f766b] mb-4">
            Publications
          </p>

          <h3 className="text-4xl mb-6 md:text-5xl">Selected Work</h3>
        </div>

        <div className="space-y-6 text-base md:text-lg">
          {publications.map(({ title, publication, url }) => (
            <div
              key={title}
              className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#e6ded5] pb-6"
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-lg italic underline decoration-[#c3b198] underline-offset-4 transition hover:text-[#8f766b] hover:decoration-[#af9d93] md:text-xl"
              >
                "{title}"
              </a>
              <p className="uppercase tracking-[0.15em] text-sm text-[#8f766b] mt-2 md:mt-0">
                {publication}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#2f2722] text-[#fbf8f4] py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col gap-4 text-sm sm:px-6 md:flex-row md:justify-between">
          <p>&copy; 2026 Olivia Nicole</p>

          <div className="flex flex-wrap gap-4 uppercase tracking-wide md:gap-6">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#/blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#publications">Publications</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BlogIndexPage() {
  return (
    <div id="top" className="min-h-screen bg-[#fbf8f4] text-[#2f2722] font-serif">
      <SiteHeader
        brandHref="./"
        brandLabel="Back to home"
        links={[
          { href: './#about', label: 'About' },
          { href: './#services', label: 'Services' },
          { href: './#contact', label: 'Contact' },
          { href: './#publications', label: 'Publications' },
          ...(personalBlogUrl
            ? [{ href: personalBlogUrl, label: 'Personal Blog', external: true }]
            : []),
        ]}
      />

      <main>
        <section className="max-w-6xl mx-auto px-5 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-[#8f766b] mb-5">
                Blog
              </p>
              <h2 className="text-4xl leading-tight mb-8 md:text-6xl">
                Blogs spilling thoughts on writing, life, and of course, coffee.
              </h2>
              <p className="text-lg leading-8 text-[#5f5149] max-w-3xl">
                This page will hold new essays and notes as they are published.
              </p>
            </div>

            {personalBlogUrl ? (
              <a
                href={personalBlogUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-2xl border border-[#af9d93] px-6 py-4 text-sm uppercase tracking-wide text-[#2f2722] transition hover:bg-[#f2e9dd]"
              >
                Personal Blog
              </a>
            ) : null}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 py-16 sm:px-6 md:py-24">
          {blogPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#fffdf9] border border-[#e6ded5] rounded-2xl p-6 shadow-sm shadow-[#af9d93]/10 sm:p-8"
                >
                  <p className="uppercase tracking-[0.15em] text-sm text-[#8f766b] mb-4">
                    {formatDate(post.date)}
                  </p>
                  <h4 className="text-2xl mb-4 sm:text-3xl">{post.title}</h4>
                  <p className="leading-8 text-[#5f5149] mb-8">{post.excerpt}</p>
                  <a
                    href={`#/blog/${post.slug}`}
                    className="inline-flex rounded-2xl bg-[#2f2722] px-6 py-4 text-sm uppercase tracking-wide text-[#fffaf4] transition hover:bg-[#4b3f38]"
                  >
                    Read Post
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-[#fffdf9] border border-[#e6ded5] rounded-2xl p-8 text-center shadow-sm shadow-[#af9d93]/10">
              <h3 className="text-3xl mb-4">Dollywood blog coming soon!</h3>
              <p className="text-lg leading-8 text-[#5f5149] max-w-2xl mx-auto">
                The first post will be about a trip to Dollywood and Cherokee, Tennessee.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

function SiteHeader({ brandHref, brandLabel, links, maxWidthClass = 'max-w-6xl' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#fbf8f4]/90 backdrop-blur border-b border-[#e6ded5]">
      <div className={`${maxWidthClass} mx-auto px-5 py-4 sm:px-6`}>
        <div className="flex items-center justify-between gap-6">
          <div>
            <a href={brandHref} className="block hover:opacity-70 transition" aria-label={brandLabel}>
              <h1 className="text-xl tracking-wide uppercase sm:text-2xl">Olivia Nicole</h1>
            </a>
            <p className="text-sm text-[#7c6c62]">Writer &bull; Teacher &bull; Creative Writing Coach</p>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="hover:opacity-70 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c3b198] text-[#2f2722] transition hover:bg-[#f2e9dd] md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#2f2722]/35 transition md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <div
        id="mobile-navigation"
        className={`fixed right-0 top-0 z-50 h-dvh w-[min(20rem,85vw)] border-l border-[#e6ded5] bg-[#fbf8f4] px-6 py-6 shadow-2xl shadow-[#2f2722]/20 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <p className="text-xl tracking-wide uppercase">Olivia Nicole</p>
            <p className="mt-1 text-sm text-[#7c6c62]">Menu</p>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c3b198] text-2xl leading-none transition hover:bg-[#f2e9dd]"
            aria-label="Close menu drawer"
            onClick={closeMenu}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-5 text-lg uppercase tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="border-b border-[#e6ded5] pb-4 transition hover:text-[#8f766b]"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function BlogPostPage({ post }) {
  return (
    <div id="top" className="min-h-screen bg-[#fbf8f4] text-[#2f2722] font-serif">
      <SiteHeader
        brandHref="./"
        brandLabel="Back to home"
        maxWidthClass="max-w-4xl"
        links={[
          { href: './#/blog', label: 'Blog' },
          { href: './#contact', label: 'Contact' },
          ...(personalBlogUrl
            ? [{ href: personalBlogUrl, label: 'Personal Blog', external: true }]
            : []),
        ]}
      />

      <main className="max-w-4xl mx-auto px-5 py-16 sm:px-6 md:py-24">
        <a href="./#/blog" className="inline-flex mb-10 text-sm uppercase tracking-wide text-[#8f766b] hover:text-[#2f2722]">
          Back to Blog
        </a>
        <article>
          <p className="uppercase tracking-[0.2em] text-sm text-[#8f766b] mb-5">
            {formatDate(post.date)}
          </p>
          <h2 className="text-4xl leading-tight mb-8 md:text-6xl">{post.title}</h2>
          <div className="space-y-7 text-lg leading-9 text-[#5f5149]">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}

function getCurrentHash() {
  if (typeof window === 'undefined') {
    return ''
  }

  return window.location.hash
}

function getActivePostSlug(hash) {
  const match = hash.match(/^#\/blog\/([^/]+)$/)
  return match ? match[1] : null
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}
