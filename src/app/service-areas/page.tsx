import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Moving Service Areas | Fayetteville, Springdale, Rogers, Bentonville AR',
  description:
    'Boss Hog Moving Co. serves all of Northwest Arkansas — Fayetteville, Springdale, Rogers, Bentonville, Bella Vista, and surrounding NWA communities. Get a free quote.',
  keywords: [
    'moving company Fayetteville AR',
    'movers Springdale AR',
    'movers Rogers AR',
    'movers Bentonville AR',
    'Northwest Arkansas moving company',
    'NWA movers',
    'Bella Vista movers',
    'Lowell AR movers',
  ],
  openGraph: {
    title: 'Moving Service Areas | Northwest Arkansas | Boss Hog Moving',
    description:
      'Serving Fayetteville, Springdale, Rogers, Bentonville, and all of Northwest Arkansas.',
    url: 'https://bosshogmoving.com/service-areas',
  },
}

const primaryAreas = [
  {
    city: 'Fayetteville',
    state: 'AR',
    description:
      'Our home base. We know every neighborhood — from the Hill to the Razorback corridor and all of south Fayetteville. UARK move-out specialists right here.',
    slug: 'fayetteville',
    highlight: true,
  },
  {
    city: 'Springdale',
    state: 'AR',
    description:
      'Fast-growing and full of opportunity. Whether you\'re moving into a new neighborhood or relocating your business, Boss Hog has Springdale covered.',
    slug: 'springdale',
    highlight: false,
  },
  {
    city: 'Rogers',
    state: 'AR',
    description:
      'From Pinnacle Hills to downtown Rogers, we handle local and cross-city moves for Rogers residents and businesses.',
    slug: 'rogers',
    highlight: false,
  },
  {
    city: 'Bentonville',
    state: 'AR',
    description:
      'Home of Walmart, Crystal Bridges, and a booming population. We help Bentonville families and businesses move without the stress.',
    slug: 'bentonville',
    highlight: false,
  },
]

const additionalAreas = [
  'Bella Vista',
  'Lowell',
  'Centerton',
  'Tontitown',
  'Prairie Grove',
  'Farmington',
  'Elkins',
  'West Fork',
  'Cave Springs',
  'Siloam Springs',
  'Highfill',
  'Goshen',
  'Greenland',
  'Johnson',
  'Elm Springs',
]

const services = [
  { label: 'UARK Student Moving', href: '/uark-student-moving' },
  { label: 'Student Storage', href: '/student-storage' },
  { label: 'Residential Moving', href: '/residential-moving' },
  { label: 'Commercial Moving', href: '/commercial-moving' },
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Service Areas
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            We Move All of Northwest Arkansas
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Based in Fayetteville, Boss Hog serves every community across NWA — from Bentonville to
            Siloam Springs and everywhere in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-700 transition-colors"
            >
              Book Online →
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Primary areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Primary Service Cities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are our most-served markets. No matter which city you&apos;re in, you get the
              same Boss Hog quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {primaryAreas.map((area) => (
              <div
                key={area.city}
                className={`rounded-2xl p-7 border transition-shadow hover:shadow-lg ${
                  area.highlight
                    ? 'bg-red-50 border-red-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      {area.city},{' '}
                      <span className="text-gray-500 font-semibold text-xl">{area.state}</span>
                    </h3>
                    {area.highlight && (
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                        Our Home Base
                      </span>
                    )}
                  </div>
                  <span className="text-3xl">{area.highlight ? '📍' : '🗺️'}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-xs font-semibold bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg hover:border-red-400 hover:text-red-600 transition-colors"
                    >
                      {s.label} in {area.city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional areas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Also Serving These NWA Communities
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Don&apos;t see your city? If you&apos;re in Northwest Arkansas, there&apos;s a very
              good chance we serve you. Call or fill out a quote form to confirm.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalAreas.map((city) => (
              <span
                key={city}
                className="bg-white border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl shadow-sm"
              >
                📍 {city}, AR
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">
              Not on the list? Contact us — we likely cover your area.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
            >
              Ask About My Area →
            </Link>
          </div>
        </div>
      </section>

      {/* What we move */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              What We Move Across NWA
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🎓',
                title: 'UARK Students',
                desc: 'Move-ins, move-outs, dorm moves, and summer storage for University of Arkansas students.',
                href: '/uark-student-moving',
              },
              {
                icon: '🏠',
                title: 'Residential Homes',
                desc: 'Local and long-distance home moves across all of NWA. From apartments to large family homes.',
                href: '/residential-moving',
              },
              {
                icon: '🏢',
                title: 'Businesses & Offices',
                desc: 'Office relocations, retail moves, and commercial transitions across Northwest Arkansas.',
                href: '/commercial-moving',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <Link href={item.href} className="text-red-600 font-semibold text-sm hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-600 py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Wherever You&apos;re Moving in NWA — We&apos;ve Got You
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Get a free, no-obligation quote in minutes. We respond fast and book quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-50 transition-colors"
            >
              Book Online →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
