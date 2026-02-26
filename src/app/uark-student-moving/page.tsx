import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import QuoteForm from '@/components/QuoteForm'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'UARK Student Moving Services | Fayetteville AR',
  description:
    'Affordable, reliable moving services for University of Arkansas students and families in Fayetteville. UARK move-in, move-out, and summer storage. Book early for May!',
  keywords: [
    'UARK student moving',
    'University of Arkansas movers',
    'student movers Fayetteville AR',
    'UARK move out',
    'UARK move in',
    'student moving Fayetteville',
    'college movers NWA',
  ],
  openGraph: {
    title: 'UARK Student Moving Services | Boss Hog Moving Co.',
    description:
      'Affordable moving services for University of Arkansas students and families. Book early for May move-out season.',
    url: 'https://bosshogmoving.com/uark-student-moving',
  },
}

const faqs = [
  {
    question: 'When should I book my UARK move-out?',
    answer:
      "We recommend booking at least 4–6 weeks before your target move date, especially for May. UARK move-out season is one of the busiest times of year in Fayetteville — dates fill up fast, and we can't always accommodate last-minute bookings during peak weeks. Book early to lock in your preferred date.",
  },
  {
    question: 'Do you move dorm room and apartment furniture?',
    answer:
      'Absolutely! We handle everything — dorm furniture, apartment furniture, boxed items, electronics, bikes, and more. Whether you need a one-room dorm move or a full 4-bedroom apartment cleared out, we have the crew and equipment to get it done.',
  },
  {
    question: 'Can you store my belongings between semesters?',
    answer:
      "Yes! We offer student storage solutions perfect for summer break or semester gaps. We can pick up your items at move-out, store them securely, and deliver them back at move-in. Check out our dedicated Student Storage page for details.",
  },
  {
    question: 'How much does a UARK student move cost?',
    answer:
      'Cost depends on how many items you have, how far you\'re moving, and what services you need. We provide free, no-obligation quotes tailored to your specific move. Fill out our quote form or call us to get an accurate price — most student moves are very affordable.',
  },
  {
    question: 'Do you serve all UARK-area apartments and off-campus housing?',
    answer:
      'Yes! We serve the entire Fayetteville area including all UARK off-campus apartments — The Blessings, Deane Street, Razorback Road, Mission Springs, Fayetteville Place, and more. We also serve all NWA cities including Springdale, Rogers, and Bentonville.',
  },
  {
    question: 'Can my student book the move if I (the parent) am not in Fayetteville?',
    answer:
      "Definitely. Many of our UARK moves are coordinated entirely by the parent from out of state. We communicate clearly, show up on time, and send updates so you're never left wondering. Just fill out the quote form or call us to get started — we handle the rest.",
  },
]

const services = [
  { icon: '📦', title: 'Move-Out (May)', desc: 'Fast, efficient move-outs timed to UARK housing deadlines. We know the rush — we plan for it.' },
  { icon: '🏠', title: 'Move-In', desc: 'Start the semester right. We\'ll get your student settled into their new place quickly.' },
  { icon: '🔄', title: 'Apartment to Apartment', desc: 'Upgrading or downsizing mid-lease? We make the transition smooth and affordable.' },
  { icon: '🛏️', title: 'Dorm Moves', desc: 'Small load? No problem. We handle dorm room moves with the same care as full apartments.' },
  { icon: '📋', title: 'Packing Services', desc: 'Don\'t have time to pack? We\'ll do it for you — carefully, quickly, and professionally.' },
  { icon: '🗄️', title: 'Storage Pickup & Delivery', desc: 'We pick up at move-out and deliver at move-in. No storage hassle, no extra trips.' },
]

export default function UARKStudentMovingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <ServiceHero
        badge="UARK & Student Moves"
        title="UARK Student Moving — Fayetteville's #1 Student Movers"
        subtitle="Trusted by UARK parents and students for move-in, move-out, and summer storage. We know the May rush — book early to secure your date."
        primaryCTA="Book UARK Move"
        primaryCTAHref={BOOK_URL}
        secondaryCTA="Get a Free Quote"
        secondaryCTAHref="#quote"
      />

      {/* Parent peace-of-mind banner */}
      <section className="bg-amber-50 border-b border-amber-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-900 font-semibold text-lg">
            🎓 UARK Parent? We work with out-of-state families every day. Book for your student
            online or by phone — we handle everything so you don&apos;t have to be there.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Everything Your Student Needs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From first-day move-ins to end-of-year move-outs, we handle every type of student
              move in Fayetteville and across Northwest Arkansas.
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
          <div className="text-center mt-10">
            <Link
              href="/student-storage"
              className="inline-block text-red-600 font-semibold hover:underline"
            >
              Also need storage between semesters? See our Student Storage page →
            </Link>
          </div>
        </div>
      </section>

      {/* May urgency section */}
      <section className="bg-red-600 py-14 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            May Move-Out Season is Here — Don&apos;t Wait
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Every year, UARK students scramble at the last minute. Rates go up and availability
            drops after May 1. Lock in your date now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-50 transition-colors"
            >
              Book My UARK Move →
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
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Also Serving</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Student Storage', href: '/student-storage' },
              { label: 'Residential Moving', href: '/residential-moving' },
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-lg hover:border-red-400 hover:text-red-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="UARK Moving FAQs" className="bg-white" />

      <QuoteForm
        defaultMoveType="Student"
        title="Book Your UARK Move"
        subtitle="Fill out the form and we'll reach out within 1 hour to confirm your date."
      />
    </>
  )
}
