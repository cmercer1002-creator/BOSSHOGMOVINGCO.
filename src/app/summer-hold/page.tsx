import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import FAQSchema from '@/components/FAQSchema'
import SummerHoldForm from '@/components/SummerHoldForm'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY, PHONE_TEXT_HREF, PHONE_TEXT_DISPLAY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Summer Hold Package | Boss Hog Moving Co. Fayetteville AR',
  description:
    'UARK Summer Hold: move out once, we store everything, deliver back at move-in. Dorms from $549/student, apartments from $799. Group discounts for roommates. Serving Fayetteville & NWA.',
  keywords: [
    'UARK summer storage',
    'summer hold moving package',
    'student storage Fayetteville AR',
    'UARK move out storage',
    'college summer storage NWA',
    'student moving storage Fayetteville',
  ],
  openGraph: {
    title: 'Summer Hold Package | Boss Hog Moving Co.',
    description:
      'Move out once. We store everything and deliver back at move-in. Starting at $549 for dorms.',
    url: 'https://bosshogmoving.com/summer-hold',
  },
}

const faqs = [
  {
    question: 'What exactly is the Summer Hold package?',
    answer:
      'Summer Hold is an all-in-one move-out and storage service. On your move-out day, we show up, load everything up, and store it securely until you need it delivered to your new place at move-in. You only have to deal with the move once — we handle the rest.',
  },
  {
    question: 'Do my items need to be packed before you arrive?',
    answer:
      'Yes — items must be packed and ready to go when we arrive. If you need boxes, we offer an optional box drop-off service a few days before your move-out date for an additional fee. Just let us know when you book.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Standard dorm packages start at $549 per student. Apartment and townhouse packages start at $799 per student. Roommates booking together qualify for group discounts — contact us for exact pricing. All prices are per student and cover move-out pickup, summer storage, and move-in delivery.',
  },
  {
    question: 'Can my roommates and I book together to get a discount?',
    answer:
      'Yes! Groups of 3 or more roommates booking together get a special group rate. Even 2 roommates can ask about a paired discount. Reach out by phone or text and we\'ll work out the best pricing for your group.',
  },
  {
    question: 'What are the shared furniture add-ons?',
    answer:
      'Shared furniture (living room set, dining set, heavy items, mattresses) is billed once per unit — not per person — since it\'s shared. We handle the full setup and breakdown. Note: mattresses must not be broken down prior to our arrival. Add-on pricing is quoted per job.',
  },
  {
    question: 'When should I book?',
    answer:
      'As early as possible. May is the busiest time of year in Fayetteville and spots fill up weeks in advance. We recommend booking at least 4–6 weeks before your target move-out date. No payment is due at booking — just lock in your spot.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Reserve Your Spot',
    desc: 'Fill out the form below or call us. Optional: we drop off boxes a few days before your move-out for easy packing.',
  },
  {
    number: '2',
    title: 'We Pick Up on Move-Out Day',
    desc: 'Show up packed and ready. Our crew loads everything, hauls it out, and stores it securely — all in one trip.',
  },
  {
    number: '3',
    title: 'We Deliver at Move-In',
    desc: 'When fall rolls around, we deliver everything to your new place. Done. No storage runs, no extra trips.',
  },
]

const included = [
  'Move-out pickup on your scheduled date',
  'Secure storage for the full summer',
  'Move-in delivery to your new address',
  'Friendly, professional crew',
  'Free quote — no obligation',
]

const addons = [
  { icon: '📦', title: 'Box Drop-Off', desc: 'We deliver boxes to your door a few days before move-out so you have everything you need to pack. Small additional fee.' },
  { icon: '🛋️', title: 'Living Room Setup', desc: 'Couch, coffee table, shelving — billed once per unit, not per person.' },
  { icon: '🍽️', title: 'Dining Setup', desc: 'Table, chairs, and dining furniture handled by our crew.' },
  { icon: '🏋️', title: 'Heavy Items', desc: 'Oversized or unusually heavy furniture quoted individually.' },
  { icon: '🛏️', title: 'Mattress (not broken down)', desc: 'Full mattress handling — must remain intact, not broken down prior to pickup.' },
]

export default function SummerHoldPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 text-white py-20 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Summer Hold Package
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-balance">
            Move Out Once.{' '}
            <span className="text-red-400">Done Until Fall.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            We pick up at move-out, store everything over the summer, and deliver to your new place at move-in.
            Starting at <span className="text-white font-bold">$549 for dorms</span> · <span className="text-white font-bold">$799+ for apartments</span>.
          </p>
          <p className="text-amber-400 font-semibold text-sm mb-8">
            May dates fill up fast — reserve your spot early.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors shadow-lg"
            >
              Call Now →
            </a>
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
            >
              Book Online →
            </Link>
            <a
              href={PHONE_TEXT_HREF}
              className="border-2 border-gray-500 text-gray-300 font-bold text-lg px-8 py-4 rounded-xl hover:border-white hover:text-white transition-colors"
            >
              Text Us — {PHONE_TEXT_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Three steps. One move. Zero summer storage headaches.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-red-600 text-white text-xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Pricing
            </h2>
            <p className="text-gray-600">Per student. Covers pickup, storage, and delivery.</p>
          </div>

          {/* Package cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="border-2 border-gray-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">🏫</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Standard Dorm</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-1">$549</div>
              <p className="text-gray-500 text-sm">per student</p>
            </div>
            <div className="border-2 border-red-600 rounded-2xl p-8 text-center relative shadow-lg">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Most Common
              </span>
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Apartment / Townhouse</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-1">$799+</div>
              <p className="text-gray-500 text-sm">per student, starting at</p>
            </div>
          </div>

          {/* Roommate discount table */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-extrabold text-gray-900 text-lg mb-4 text-center">
              Roommate Group Discounts
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-center">
                <thead>
                  <tr className="border-b border-amber-200">
                    <th className="py-2 px-4 font-bold text-gray-700 text-left">Roommates booking together</th>
                    <th className="py-2 px-4 font-bold text-gray-700">Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amber-100">
                    <td className="py-3 px-4 text-gray-700 text-left">2 roommates</td>
                    <td className="py-3 px-4 text-amber-800 font-semibold">Ask about paired rate</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 text-left">3+ roommates</td>
                    <td className="py-3 px-4 text-amber-800 font-semibold">Special group rate — contact us</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-amber-800 text-xs text-center mt-4">
              Call or text us to get exact group pricing — we&apos;ll work out the best deal for your household.
            </p>
          </div>

          <p className="text-gray-500 text-xs text-center mt-4">
            * Items must be packed prior to pickup. Optional box drop-off available for additional fee.
          </p>
        </div>
      </section>

      {/* Reservation Policy */}
      <section className="py-14 px-4 bg-amber-50 border-y border-amber-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
            Reservation Policy
          </h2>
          <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-7 space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              Due to high demand during move-out season, a{' '}
              <span className="font-bold text-gray-900">$100 non-refundable deposit</span> is required
              to secure your date.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                The deposit will be applied toward your total service cost.
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                All bookings are final and not eligible for cancellation refunds.
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                If you need to reschedule, your $100 deposit can be applied to a future job within
                12 months (subject to availability).
              </li>
            </ul>
            <p className="text-gray-500 text-xs pt-2 border-t border-amber-100">
              We reserve the right to fill canceled time slots with other customers.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What&apos;s Included
            </h2>
          </div>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Need boxes or have shared furniture? We&apos;ve got you covered. Shared furniture add-ons are billed once per unit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div key={addon.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{addon.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{addon.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Summer Hold FAQs" className="bg-gray-50" />

      {/* Reserve form */}
      <SummerHoldForm />

      {/* Final CTA */}
      <section className="bg-red-600 py-14 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Don&apos;t Wait — May Spots Go Fast
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Call, text, or book online to lock in your Summer Hold date. No payment due today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-50 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Book Online →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Also See</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'UARK Student Moving', href: '/uark-student-moving' },
              { label: 'Student Storage', href: '/student-storage' },
              { label: 'Residential Moving', href: '/residential-moving' },
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
    </>
  )
}
