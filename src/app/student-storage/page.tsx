import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import QuoteForm from '@/components/QuoteForm'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Student Storage Fayetteville AR | Boss Hog Moving Co.',
  description:
    'Summer student storage in Fayetteville, AR. We pick up at move-out and deliver at move-in. Affordable, secure, and flexible storage for UARK students.',
  keywords: [
    'student storage Fayetteville AR',
    'UARK storage',
    'summer storage Fayetteville',
    'college student storage NWA',
    'dorm storage Fayetteville',
    'storage pickup delivery Fayetteville',
  ],
  openGraph: {
    title: 'Student Storage Fayetteville AR | Boss Hog Moving Co.',
    description:
      'Summer student storage in Fayetteville. Pickup at move-out, delivery at move-in. Affordable and secure.',
    url: 'https://bosshogmoving.com/student-storage',
  },
}

const faqs = [
  {
    question: 'What size storage unit do I need for a dorm or apartment?',
    answer:
      'Most dorm rooms fit in a small storage unit (5×5 or 5×10). A one-bedroom apartment typically needs a 10×10. We can help you estimate the right size when you request a quote — just tell us what you have and we\'ll figure out the rest.',
  },
  {
    question: 'Do you offer pickup from my apartment or dorm?',
    answer:
      "Yes! That's one of the best parts of our service. We come to your place, load everything up at move-out, store it securely for the summer (or however long you need), and then deliver it back when you're ready to move in at the start of the next semester. No storage truck rental needed.",
  },
  {
    question: 'How much does student storage cost?',
    answer:
      'Storage pricing depends on how much you need to store and how long you need it. We offer competitive monthly rates with no hidden fees. Request a free quote for a personalized estimate — most students are pleasantly surprised at how affordable it is.',
  },
  {
    question: 'Is my stuff insured while in storage?',
    answer:
      'We take the security of your belongings seriously. We work with insured storage facilities and use professional packing methods to keep everything safe. Ask us about coverage details when you request your quote.',
  },
  {
    question: 'When should I book summer storage for UARK?',
    answer:
      "As early as possible — ideally 4–6 weeks before your move-out date. May is extremely busy in Fayetteville, and pickup slots fill up quickly. Booking early guarantees your preferred dates and locks in the best rates.",
  },
  {
    question: 'Can I access my items during the summer?',
    answer:
      'In most cases, yes — we can arrange access to your stored items during the storage period. Ask about access options when booking so we can set up the right solution for your needs.',
  },
]

const features = [
  {
    icon: '🚛',
    title: 'We Pick Up & Deliver',
    desc: 'We come to your place at move-out, load everything, and bring it back at move-in. Zero hassle.',
  },
  {
    icon: '🔒',
    title: 'Secure Facilities',
    desc: 'Your belongings are stored in secure, insured facilities — not in some sketchy garage.',
  },
  {
    icon: '📅',
    title: 'Flexible Duration',
    desc: 'Summer-only? Semester gap? Longer? We offer month-to-month flexibility to fit your schedule.',
  },
  {
    icon: '💰',
    title: 'Affordable Student Rates',
    desc: "We know students are on a budget. Our pricing is designed to be fair and transparent.",
  },
  {
    icon: '📦',
    title: 'Packing Help Available',
    desc: "Don't want to pack yourself? We offer packing services as an add-on to storage.",
  },
  {
    icon: '🗓️',
    title: 'Book Early, Save More',
    desc: 'Lock in the best rates and your preferred pickup date by booking at least 4 weeks ahead.',
  },
]

export default function StudentStoragePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <ServiceHero
        badge="Student Storage"
        title="Summer Student Storage — We Pick Up & Deliver"
        subtitle="Moving out of your UARK apartment or dorm? We'll pick up your stuff, store it safely all summer, and bring it back when you're ready. Easy."
        primaryCTA="Book Storage Pickup"
        primaryCTAHref={BOOK_URL}
        secondaryCTA="Get a Free Quote"
        secondaryCTAHref="#quote"
      />

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three simple steps — we handle all the heavy lifting (literally).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Book Your Pickup',
                desc: "Tell us your move-out date, address, and what you're storing. We'll confirm your slot and send a free quote.",
              },
              {
                step: '2',
                title: 'We Pick Up at Move-Out',
                desc: 'Our crew arrives on your scheduled date, loads everything carefully, and takes it to secure storage. You hand us the keys and relax.',
              },
              {
                step: '3',
                title: 'We Deliver at Move-In',
                desc: 'When your new place is ready, we bring everything back and set it up. You start the semester fresh with zero storage stress.',
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-700 transition-colors"
            >
              Book My Storage Pickup →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Why Students Choose Boss Hog Storage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 font-semibold mb-4">Also looking for moving help?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'UARK Student Moving', href: '/uark-student-moving' },
              { label: 'Residential Moving', href: '/residential-moving' },
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

      {/* Urgency CTA */}
      <section className="bg-gray-900 py-14 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            May Pickup Slots Fill Up Fast
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Don&apos;t stress about where your stuff is going this summer. Lock in your storage
            pickup date today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-700 transition-colors"
            >
              Book Storage Now →
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-gray-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:border-white transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Student Storage FAQs" className="bg-gray-50" />

      <QuoteForm
        defaultMoveType="Storage"
        title="Get Your Storage Quote"
        subtitle="Tell us what you need — we'll send a free, no-obligation estimate within 1 hour."
      />
    </>
  )
}
