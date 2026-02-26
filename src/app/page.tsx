import type { Metadata } from 'next'
import Link from 'next/link'
import ChooseYourMove from '@/components/ChooseYourMove'
import QuoteForm from '@/components/QuoteForm'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY, SERVICE_AREAS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Boss Hog Moving Co. | Fayetteville AR Moving Company',
  description:
    "Fayetteville's #1 moving company for students, homes, and businesses. Trusted by UARK families across Northwest Arkansas. Book online or call for a free quote.",
  keywords: [
    'moving company Fayetteville AR',
    'UARK movers',
    'student movers Fayetteville',
    'NWA movers',
    'residential movers Fayetteville',
    'commercial movers Northwest Arkansas',
  ],
  openGraph: {
    title: 'Boss Hog Moving Co. | Fayetteville AR Moving Company',
    description:
      "Fayetteville's #1 moving company for students, homes, and businesses across Northwest Arkansas.",
    url: 'https://bosshogmoving.com',
  },
}

const trustBadges = [
  { icon: '🛡️', label: 'Insured & Covered', sub: 'Full liability on every move' },
  { icon: '⭐', label: '5-Star Rated', sub: 'Top-rated on Google' },
  { icon: '📍', label: 'Local NWA Team', sub: 'Arkansas roots, NWA home' },
  { icon: '💬', label: 'Free Quotes', sub: 'No obligation, ever' },
]

const placeholderReviews = [
  {
    name: 'Beverly C.',
    location: 'Fayetteville, AR',
    text: "Cameron and Matthew went above and beyond helping me move. They communicated well, super professional, and true to their word. They are hardworking and very kind. They are prompt and show up ready to work. I would definitely use them again should the occasion arise!",
    stars: 5,
  },
  {
    name: 'Noelle G.',
    location: 'UARK Parent',
    text: "Garrett and Cole were amazing!! They unloaded 2 cars worth of boxes, bags and furniture!! After moving it all in - they put together 2 futons, 1 floor lamp, a rolling TV cart and 2 table lamps. Never complained - always had smiles on! They made our move in day so easy!!!!",
    stars: 5,
  },
  {
    name: 'Melanie M.',
    location: 'UARK Parent',
    text: "Once again Cameron and crew came through for us! Our move-in help fell short so I texted Cameron at 11:30pm. Early the next morning he had us set up with help for that day. Professional, highly responsive, prompt, courteous, efficient and respectful of our things.",
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 text-white py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Fayetteville&apos;s Most Trusted Movers
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-balance">
              Moving Experts for{' '}
              <span className="text-red-400">Students, Homes</span>{' '}
              &amp; Businesses
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Locally owned, fully insured, and trusted by NWA families. Stress-free moves — every
              time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors shadow-xl"
              >
                Book Online →
              </Link>
              <Link
                href="#quote"
                className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
            <a href={PHONE_HREF} className="text-gray-400 hover:text-white text-sm transition-colors">
              Or call:{' '}
              <span className="font-semibold text-gray-200 text-base">{PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* UARK callout box */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2 block">
              🎓 UARK Parents &amp; Students
            </span>
            <p className="text-white font-semibold text-lg mb-4">
              Summer Hold Package — Move Out Once, Done Until Fall. Starting at $549.
            </p>
            <Link
              href="/summer-hold"
              className="inline-block bg-amber-400 text-gray-900 font-bold text-sm px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
            >
              See Summer Hold Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{badge.icon}</span>
                <span className="font-bold text-gray-900 text-sm">{badge.label}</span>
                <span className="text-gray-500 text-xs">{badge.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Move */}
      <ChooseYourMove />

      {/* Why Boss Hog */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Why Fayetteville Trusts Boss Hog
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Locally Owned & Operated',
                    desc: "Boss Hog was founded by Cameron Mercer, a Little Rock native and University of Arkansas alumnus, with a team rooted across Arkansas. We're not just passing through — this is home.",
                  },
                  {
                    title: 'UARK Move-Out Specialists',
                    desc: 'We know May is crunch time for UARK families. We have the crew, the trucks, and the experience to make it easy.',
                  },
                  {
                    title: 'Fully Insured',
                    desc: 'Your belongings are protected on every move. We carry full liability coverage — and we can provide proof of insurance upon request.',
                  },
                  {
                    title: 'Upfront, Transparent Pricing',
                    desc: "You know exactly what you'll pay before we lift a single box. No hidden fees, no surprise charges at the end. If something changes during the move, we tell you first — always.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
                >
                  Book Online →
                </Link>
                <Link
                  href="/reviews"
                  className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-red-400 hover:text-red-600 transition-colors"
                >
                  Read Reviews
                </Link>
              </div>
            </div>

            {/* Stats box */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '500+', label: 'Moves Completed' },
                  { value: '5★', label: 'Google Rating' },
                  { value: '3+', label: 'Years Serving NWA' },
                  { value: '100%', label: 'Insured & Covered' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-4">
                    <div className="text-4xl font-extrabold text-red-400 mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-700 mt-6 pt-6 text-center">
                <p className="text-gray-300 text-sm mb-4">
                  Serving Fayetteville and all of Northwest Arkansas
                </p>
                <Link
                  href="/service-areas"
                  className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                >
                  View All Service Areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Strip */}
      <section className="bg-red-600 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white font-semibold text-lg mb-3">
            Proudly Serving All of Northwest Arkansas
          </p>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-red-100 text-sm">
            {SERVICE_AREAS.map((city, i) => (
              <span key={city}>
                {city}
                {i < SERVICE_AREAS.length - 1 && (
                  <span className="text-red-300 ml-2">·</span>
                )}
              </span>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="inline-block mt-4 text-white text-sm font-bold border border-white/50 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
          >
            See Full Service Area →
          </Link>
        </div>
      </section>

      {/* Reviews Snippet */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array(5).fill(null).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm">5.0 average · Verified customer reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholderReviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array(review.stars).fill(null).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-block border-2 border-red-600 text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-600 hover:text-white transition-colors"
            >
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm title="Get Your Free Moving Quote" subtitle="Fast response · No obligation · 100% free" />

      {/* Final CTA Banner */}
      <section className="bg-gray-900 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Move? Let&apos;s Make It Easy.
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Book online in seconds or call us now. Same-day availability may be possible for last-minute moves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-700 transition-colors"
            >
              Book Online →
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-gray-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:border-white transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
