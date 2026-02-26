import Link from 'next/link'
import Image from 'next/image'
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_TEXT_DISPLAY,
  PHONE_TEXT_HREF,
  BOOK_URL,
  COMPANY_NAME,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Boss Hog Moving Co."
                width={72}
                height={72}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Fayetteville&apos;s locally owned moving company. Trusted by UARK families,
              homeowners, and businesses across Northwest Arkansas.
            </p>
            <div className="space-y-1.5 text-sm">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {PHONE_DISPLAY} <span className="text-gray-500 font-normal">(Call)</span>
              </a>
              <a
                href={PHONE_TEXT_HREF}
                className="flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                {PHONE_TEXT_DISPLAY} <span className="text-gray-500 font-normal">(Text)</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/uark-student-moving" className="hover:text-white transition-colors">
                  UARK Student Moving
                </Link>
              </li>
              <li>
                <Link href="/student-storage" className="hover:text-white transition-colors">
                  Student Storage
                </Link>
              </li>
              <li>
                <Link href="/summer-hold" className="hover:text-white transition-colors">
                  Summer Hold Package
                </Link>
              </li>
              <li>
                <Link href="/residential-moving" className="hover:text-white transition-colors">
                  Residential Moving
                </Link>
              </li>
              <li>
                <Link href="/commercial-moving" className="hover:text-white transition-colors">
                  Commercial Moving
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {['Fayetteville', 'Springdale', 'Rogers', 'Bentonville', 'Bella Vista', 'Lowell'].map(
                (city) => (
                  <li key={city}>
                    <Link href="/service-areas" className="hover:text-white transition-colors">
                      {city}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/service-areas"
                  className="text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            <Link
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors"
            >
              Book Online →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. Fayetteville, AR.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <p>Insured &amp; Covered · Serving Northwest Arkansas</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
