import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import QuoteForm from '@/components/QuoteForm'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Commercial Moving Services Fayetteville AR | Boss Hog Moving',
  description:
    'Professional office and commercial moving in Fayetteville, AR and Northwest Arkansas. Minimal downtime, licensed & insured, weekend availability. Free quotes.',
  keywords: [
    'commercial movers Fayetteville AR',
    'office moving NWA',
    'business movers Northwest Arkansas',
    'office relocation Fayetteville',
    'commercial moving Bentonville Rogers',
    'office movers NWA',
  ],
  openGraph: {
    title: 'Commercial Moving Services Fayetteville AR | Boss Hog Moving',
    description:
      'Professional office and commercial moving across Northwest Arkansas. Minimal downtime, free quotes.',
    url: 'https://bosshogmoving.com/commercial-moving',
  },
}

const faqs = [
  {
    question: 'Can you move our office over a weekend to avoid business disruption?',
    answer:
      "Absolutely — we specialize in after-hours and weekend commercial moves to minimize disruption to your operations. We'll work around your schedule so your team can show up Monday morning in the new space and get straight to work.",
  },
  {
    question: 'Do you handle IT equipment, servers, and sensitive electronics?',
    answer:
      'Yes. We handle electronics and IT equipment with special care — proper padding, anti-static materials, and careful placement. For server racks and mission-critical hardware, we recommend coordinating with your IT team to manage disconnection and reconnection while we handle the physical move.',
  },
  {
    question: 'How do you minimize downtime during a commercial move?',
    answer:
      "We start with a detailed planning call to understand your timeline and priorities. We create a room-by-room moving plan, label everything clearly, and execute in phases if needed. Our goal is to have your business fully operational in the new space as quickly as possible.",
  },
  {
    question: 'Can you provide a detailed moving plan or timeline?',
    answer:
      'Yes. For commercial moves, we provide a written moving plan that outlines the sequence, timing, and responsibilities. This keeps everyone on the same page and helps ensure nothing gets missed.',
  },
  {
    question: 'Are you insured for commercial moves?',
    answer:
      'Yes — we carry commercial liability insurance and can provide certificates of insurance as required by your property manager or landlord. Ask us about coverage specifics when you get your quote.',
  },
  {
    question: 'Do you move retail stores or just offices?',
    answer:
      'We move all types of commercial spaces — offices, retail stores, medical offices, restaurants, and more. Whether you have display cases, shelving, or heavy equipment, we have the tools and experience to get it done.',
  },
]

const services = [
  { icon: '🏢', title: 'Office Relocations', desc: 'Full-service office moves from planning through setup. Desks, chairs, filing cabinets, and more.' },
  { icon: '🛍️', title: 'Retail Store Moves', desc: 'Display cases, shelving, inventory, fixtures — we handle retail moves with care and efficiency.' },
  { icon: '⚕️', title: 'Medical Office Moves', desc: 'Experience with medical equipment and sensitive materials. HIPAA-awareness built in.' },
  { icon: '💻', title: 'IT Equipment', desc: 'Computers, monitors, networking gear — packed safely and moved with precision.' },
  { icon: '🌙', title: 'After-Hours & Weekends', desc: 'We move when it works for your business — evenings, weekends, holidays.' },
  { icon: '🗂️', title: 'File & Archive Moves', desc: 'Organized, labeled, and delivered to the right place. Confidentiality respected.' },
]

export default function CommercialMovingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <ServiceHero
        badge="Commercial Moving"
        title="Office & Commercial Movers — Northwest Arkansas"
        subtitle="Professional business relocations in Fayetteville, Bentonville, Rogers, and across NWA. Minimal downtime. Maximum care. Weekend availability."
        primaryCTA="Book Commercial Move"
        primaryCTAHref={BOOK_URL}
        secondaryCTA="Get a Free Quote"
        secondaryCTAHref="#quote"
      />

      {/* Benefits bar */}
      <section className="bg-gray-900 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            '🕐 After-Hours Available',
            '📋 Detailed Moving Plans',
            '🛡️ Commercial Insurance',
            '📍 NWA-Wide Coverage',
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
              Commercial Moving Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From small office moves to large multi-floor relocations, we have the crew, trucks, and
              planning tools to execute your commercial move without disrupting your business.
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

      {/* Planning section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                We Plan Your Move Like a Project, Not an Afterthought
              </h2>
              <ul className="space-y-4">
                {[
                  'Initial consultation call to understand your timeline and priorities',
                  'Written moving plan with sequence, timing, and responsibilities',
                  'Labeled and organized packing to reduce setup time at the new location',
                  'Dedicated point-of-contact throughout the move',
                  'Post-move walkthrough to ensure everything is in place',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="font-extrabold text-gray-900 text-xl mb-2">
                Ready to plan your commercial move?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Start with a free consultation. We&apos;ll review your needs and send a detailed
                moving plan and quote within 24 hours.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white font-bold text-base py-3.5 rounded-xl text-center hover:bg-red-700 transition-colors"
                >
                  Book Online →
                </Link>
                <a
                  href={PHONE_HREF}
                  className="border-2 border-gray-200 text-gray-900 font-bold text-base py-3.5 rounded-xl text-center hover:border-red-400 transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm mb-4">Also serving:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Residential Moving', href: '/residential-moving' },
              { label: 'UARK Student Moving', href: '/uark-student-moving' },
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Contact Us', href: '/contact' },
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

      <FAQSection faqs={faqs} title="Commercial Moving FAQs" className="bg-gray-50" />

      <QuoteForm
        defaultMoveType="Commercial"
        title="Get Your Commercial Moving Quote"
        subtitle="Describe your move — we'll follow up with a detailed plan and estimate."
      />
    </>
  )
}
