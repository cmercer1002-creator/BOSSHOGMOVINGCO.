import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import QuoteForm from '@/components/QuoteForm'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Residential Moving Services Fayetteville AR | Boss Hog Moving',
  description:
    'Full-service residential moving in Fayetteville, AR and across Northwest Arkansas. Local moves, long-distance, packing, and more. Licensed & insured. Free quotes.',
  keywords: [
    'residential movers Fayetteville AR',
    'local moving company NWA',
    'house movers Fayetteville',
    'moving company Northwest Arkansas',
    'home movers Fayetteville AR',
    'full service movers NWA',
  ],
  openGraph: {
    title: 'Residential Moving Services Fayetteville AR | Boss Hog Moving',
    description:
      'Full-service residential moving in Fayetteville and across Northwest Arkansas. Licensed, insured, free quotes.',
    url: 'https://bosshogmoving.com/residential-moving',
  },
}

const faqs = [
  {
    question: 'How far in advance should I book a residential move?',
    answer:
      'We recommend booking at least 2–4 weeks in advance for local moves, and 4–8 weeks for moves during peak seasons (spring and summer). That said, we do our best to accommodate last-minute requests — call us and we\'ll see what we can do.',
  },
  {
    question: 'Do you provide packing materials and packing services?',
    answer:
      'Yes! We offer full packing services and can supply boxes, packing paper, bubble wrap, and other materials. Whether you want us to pack everything or just a few fragile items, we can customize the service to fit your needs and budget.',
  },
  {
    question: 'Are you licensed and insured in Arkansas?',
    answer:
      'Absolutely. Boss Hog Moving Co. is fully licensed and insured to operate in Arkansas. Your belongings are protected during every step of the move. We carry liability coverage and can provide proof of insurance upon request.',
  },
  {
    question: 'What areas do you serve for residential moves?',
    answer:
      'We primarily serve Fayetteville and all of Northwest Arkansas including Springdale, Rogers, Bentonville, Bella Vista, Lowell, Centerton, Tontitown, Prairie Grove, Farmington, and surrounding communities. We can also assist with long-distance moves — contact us for details.',
  },
  {
    question: 'Do you offer weekend and evening moves?',
    answer:
      'Yes! We offer moves Monday through Saturday. Weekend slots book quickly, so plan ahead. Contact us for availability on specific dates.',
  },
  {
    question: 'Do you disassemble and reassemble furniture?',
    answer:
      'Yes — furniture disassembly and reassembly is included in our full-service moves. Beds, desks, bookshelves, wardrobes — we handle it all. Just let us know what you need when you request your quote.',
  },
]

const services = [
  { icon: '🏡', title: 'Local Moves', desc: 'Fayetteville to Springdale, Rogers to Bentonville — we know NWA roads and neighborhoods like the back of our hand.' },
  { icon: '🚚', title: 'Long-Distance Moves', desc: 'Moving out of NWA? We can help with longer relocations. Contact us for availability and rates.' },
  { icon: '📦', title: 'Full Packing Service', desc: 'We pack your entire home using professional materials — dishes, art, electronics, and everything in between.' },
  { icon: '🛋️', title: 'Furniture Assembly', desc: 'We disassemble at your old place and reassemble at your new one. No tools required on your end.' },
  { icon: '👴', title: 'Senior Moves', desc: 'Extra care, extra patience. We specialize in moves for seniors transitioning to new homes or communities.' },
  { icon: '🔧', title: 'Labor-Only Help', desc: 'Renting your own truck? Hire our crew for loading and unloading only. Flexible options available.' },
]

export default function ResidentialMovingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <ServiceHero
        badge="Residential Moving"
        title="Fayetteville Residential Movers You Can Trust"
        subtitle="Full-service home moves across Northwest Arkansas. Careful with every item, clear on every price, on time every move."
        primaryCTA="Book My Home Move"
        primaryCTAHref={BOOK_URL}
        secondaryCTA="Get a Free Quote"
        secondaryCTAHref="#quote"
      />

      {/* Trust bar */}
      <section className="bg-gray-900 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            '✅ Licensed & Insured',
            '📍 Local NWA Team',
            '💬 Free Quotes',
            '📅 Mon–Sat Availability',
          ].map((item) => (
            <span key={item} className="text-gray-300 font-semibold text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Residential Moving Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From studio apartments to large family homes, we customize every move to fit your
              needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Simple Moving Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Get a Quote', desc: 'Fill out our form or call. We send a clear, itemized quote within 1 hour.' },
              { step: '2', title: 'Book Your Date', desc: 'Choose your moving day and confirm the booking. No deposit required upfront.' },
              { step: '3', title: 'We Show Up', desc: 'Our crew arrives on time with all the equipment needed for your move.' },
              { step: '4', title: 'Settle In', desc: 'We deliver everything to your new home, reassemble furniture, and you\'re done.' },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-red-600 py-14 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to Move? Get a Free Quote Today.
          </h2>
          <p className="text-red-100 text-lg mb-8">
            No pressure, no obligation. Just a clear quote so you know exactly what to expect.
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
            <a
              href={PHONE_HREF}
              className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm mb-4">Explore our other services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'UARK Student Moving', href: '/uark-student-moving' },
              { label: 'Student Storage', href: '/student-storage' },
              { label: 'Commercial Moving', href: '/commercial-moving' },
              { label: 'Service Areas', href: '/service-areas' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-lg hover:border-red-400 hover:text-red-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Residential Moving FAQs" className="bg-gray-50" />

      <QuoteForm
        defaultMoveType="Residential"
        title="Get Your Free Residential Quote"
        subtitle="Tell us about your move — we'll respond within 1 hour."
      />
    </>
  )
}
