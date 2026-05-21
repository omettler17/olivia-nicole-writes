export default function OliviaNicoleWebsite() {
  const publications = [
    {
      title: 'Cake',
      publication: 'Quirk',
      url: 'https://www.uiwquirk.org/',
    },
    {
      title: 'STALE',
      publication: 'Gambling the Aisle',
      url: 'https://www.gamblingtheaisle.com/monthly-publications/stale-by-olivia-mettler',
    },
    {
      title: 'You Know the Cigarette Lighter Works',
      publication: 'South Florida Poetry Journal',
      url: 'https://www.southfloridapoetryjournal.com/poetry-34-aug-24.html',
    },
    {
      title: "I keep trying to write a poem about roosters but write the chickens missing feathers on my family's farm instead.",
      publication: 'COOP',
      url: 'https://coopzine.com',
    },
    {
      title: "My Father Doesn't Know I Wasn't a Bird When I Was Born",
      publication: 'COOP',
      url: 'https://coopzine.com',
    },
    {
      title: 'When my mom forgives my father',
      publication: 'Club Plum',
      url: 'https://clubplumliteraryjournal.com/vol-5-issue-2/',
    },
    {
      title: "When finding your father's porn",
      publication: 'Club Plum',
      url: 'https://clubplumliteraryjournal.com/vol-5-issue-2/',
    },
    {
      title: 'The Whiteness of -',
      publication: 'Heron Tree',
      url: 'https://herontree.com/volume-11-wrap/',
    },
  ]

  function handleContactSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Writing inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)

    window.location.href = `mailto:olivianicolecontact@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#2f2722] font-serif">
      <nav className="sticky top-0 z-50 bg-[#fbf8f4]/90 backdrop-blur border-b border-[#e6ded5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl tracking-wide uppercase">Olivia Nicole</h1>
            <p className="text-sm text-[#7c6c62]">Writer &bull; Teacher &bull; Creative Writing Coach</p>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#about" className="hover:opacity-70 transition">About</a>
            <a href="#services" className="hover:opacity-70 transition">Services</a>
            <a href="#publications" className="hover:opacity-70 transition">Publications</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-[#8f766b] mb-6">
            Literary Coaching & Editorial Support
          </p>

          <h2 className="text-5xl md:text-6xl leading-tight mb-8">
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
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-[#755f54] mb-6">
            Who I Help
          </p>

          <h3 className="text-4xl leading-tight mb-8">
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

      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8f766b] mb-4">
            About
          </p>

          <h3 className="text-5xl mb-8">Writing is hard work. Support helps.</h3>
        </div>

        <div className="space-y-8 text-lg leading-9 text-[#5f5149]">
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

      <section id="services" className="bg-[#af9d93] text-[#fffaf4] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
              <p className="uppercase tracking-[0.2em] text-sm text-[#fbf8f4] mb-4">
              Services
            </p>

            <h3 className="text-5xl mb-6">Coaching & Editorial Support</h3>

            <p className="text-lg text-[#fffaf4] max-w-3xl leading-8">
              Thoughtful, personalized support for writers at different stages of their creative process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="bg-[#fffaf4] text-[#2f2722] p-8 rounded-3xl shadow-xl shadow-[#6d5d54]/15 border border-[#fffdf9] h-full min-h-[37rem] flex flex-col">
              <p className="uppercase tracking-[0.15em] text-sm text-[#755f54] mb-4">
                Best For Most Clients
              </p>

              <h4 className="text-3xl mb-6">Starter Package</h4>

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

            <div className="bg-[#eee3d8] text-[#2f2722] p-8 rounded-3xl border border-[#f5ece5] shadow-xl shadow-[#6d5d54]/10 h-full min-h-[37rem] flex flex-col">
              <p className="uppercase tracking-[0.15em] text-sm text-[#755f54] mb-4">
                1:1 Coaching
              </p>

              <h4 className="text-3xl mb-6">Single Coaching Session</h4>

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

            <div className="bg-[#e0d0c4] text-[#2f2722] p-8 rounded-3xl border border-[#eaded5] shadow-xl shadow-[#6d5d54]/10 h-full min-h-[37rem] flex flex-col">
              <p className="uppercase tracking-[0.15em] text-sm text-[#8f766b] mb-4">
                Poetry-Specific
              </p>

              <h4 className="text-3xl mb-6">Poem Critique</h4>

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

      <section id="publications" className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8f766b] mb-4">
            Publications
          </p>

          <h3 className="text-5xl mb-6">Selected Work</h3>
        </div>

        <div className="space-y-6 text-lg">
          {publications.map(({ title, publication, url }) => (
            <div
              key={title}
              className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#e6ded5] pb-6"
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-xl italic underline decoration-[#c3b198] underline-offset-4 transition hover:text-[#8f766b] hover:decoration-[#af9d93]"
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

      <section id="contact" className="bg-[#f6f0ea] py-24 border-t border-[#e6ded5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-[#755f54] mb-4">
            Contact
          </p>

          <h3 className="text-5xl mb-8">Let's work together.</h3>

          <p className="text-lg leading-8 text-[#5f5149] mb-12 max-w-2xl mx-auto">
            Whether you're looking for coaching, editorial support, or guidance reconnecting with your writing practice, I'd love to hear from you.
          </p>

          <div className="bg-[#fffdf9] rounded-[2rem] p-10 shadow-lg shadow-[#af9d93]/20 max-w-2xl mx-auto text-left border border-[#d3cac0]">
            <form className="space-y-6" onSubmit={handleContactSubmit}>
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

      <footer className="bg-[#2f2722] text-[#fbf8f4] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>&copy; 2026 Olivia Nicole</p>

          <div className="flex gap-6 uppercase tracking-wide">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
