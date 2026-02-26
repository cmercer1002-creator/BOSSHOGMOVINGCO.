import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_TEXT_DISPLAY,
  PHONE_TEXT_HREF,
  EMAIL,
  BOOK_URL,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Boss Hog Moving Co. | Fayetteville AR',
  description:
    'Contact Boss Hog Moving Co. for a free moving quote in Fayetteville, AR. Call, email, or fill out our quote form. We respond within 1 business hour.',
  keywords: [
    'contact movers Fayetteville AR',
    'get a moving quote Fayetteville',
    'free moving quote NWA',
    'Boss Hog Moving contact',
  ],
  openGraph: {
    title: 'Contact Boss Hog Moving Co. | Fayetteville AR',
    description:
      'Get a free moving quote. Call, email, or fill out our form — we respond within 1 business hour.',
    url: 'https://bosshogmoving.com/contact',
  },
}

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: 'Call Us',
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    sub: 'Mon–Sat, 7am–7pm',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Text Us',
    value: PHONE_TEXT_DISPLAY,
    href: PHONE_TEXT_HREF,
    sub: 'Text-only line',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    sub: 'We reply within 1 business hour',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Book Online',
    value: 'Reserve Your Moving Date',
    href: BOOK_URL,
    sub: 'Instant confirmation',
    external: true,
  },
]

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 7:00 PM' },
  { day: 'Sunday', time: 'By appointment' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
            Let&apos;s Plan Your Move
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a free, no-obligation quote in minutes. Call us, email us, or fill out the form
            below — we respond fast.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-red-400 hover:shadow-md transition-all"
              >
                <span className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {method.icon}
                </span>
                <p className="font-bold text-gray-900 mb-1">{method.label}</p>
                <p className="text-red-600 font-semibold text-sm mb-1.5">{method.value}</p>
                <p className="text-gray-500 text-xs">{method.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main content: form + info */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-extrabold text-gray-900 text-lg mb-4">Business Hours</h3>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-semibold text-gray-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service area */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-extrabold text-gray-900 text-lg mb-3">Service Area</h3>
              <p className="text-gray-600 text-sm mb-3">
                We serve all of Northwest Arkansas including:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Fayetteville', 'Springdale', 'Rogers', 'Bentonville', 'Bella Vista', 'and more'].map(
                  (city) => (
                    <span
                      key={city}
                      className="text-xs font-semibold bg-red-50 text-red-700 px-2.5 py-1 rounded-lg"
                    >
                      {city}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/service-areas"
                className="mt-4 inline-block text-red-600 font-semibold text-sm hover:underline"
              >
                View all service areas →
              </Link>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-extrabold text-gray-900 text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'UARK Student Moving', href: '/uark-student-moving' },
                  { label: 'Student Storage', href: '/student-storage' },
                  { label: 'Residential Moving', href: '/residential-moving' },
                  { label: 'Commercial Moving', href: '/commercial-moving' },
                  { label: 'Customer Reviews', href: '/reviews' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center gap-2"
                    >
                      <span className="text-red-400">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote form */}
          <div className="lg:col-span-2">
            <QuoteForm
              title="Get Your Free Quote"
              subtitle="Fill out the form below — we'll respond within 1 business hour with a personalized quote."
            />
          </div>
        </div>
      </section>

      {/* Book now CTA */}
      <section className="bg-gray-900 py-14 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to Skip the Form? Book Directly Online.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our online booking system lets you pick your date and get confirmed instantly.
          </p>
          <Link
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-red-700 transition-colors"
          >
            Book Online Now →
          </Link>
        </div>
      </section>
    </>
  )
}
