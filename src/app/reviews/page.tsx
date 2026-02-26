import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Customer Reviews | Boss Hog Moving Co. Fayetteville AR',
  description:
    "Read what Fayetteville and NWA customers say about Boss Hog Moving Co. 5-star rated for student moves, residential moves, and commercial relocations. Book online today.",
  keywords: [
    'Boss Hog Moving reviews',
    'best movers Fayetteville AR',
    'UARK movers reviews',
    'NWA moving company reviews',
    'Fayetteville movers reviews',
  ],
  openGraph: {
    title: 'Customer Reviews | Boss Hog Moving Co.',
    description:
      '5-star rated moving company in Fayetteville AR. Read what our customers say.',
    url: 'https://bosshogmoving.com/reviews',
  },
}

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Rogers, AR',
    type: 'UARK Parent',
    stars: 5,
    text: "Hired Boss Hog for my daughter's UARK move-out. They were on time, careful with all her furniture, and finished faster than expected. Communication was excellent the whole time. So glad we found them! Will definitely use again next year.",
    date: 'May 2024',
  },
  {
    name: 'Linda K.',
    location: 'Nashville, TN (UARK Parent)',
    type: 'UARK Parent',
    stars: 5,
    text: "As a UARK mom living 8 hours away, I was nervous about coordinating my son's apartment move-out. Boss Hog communicated every step of the way, sent me updates, and made the whole thing seamless. The crew was professional, kind, and careful. 100% recommend to any out-of-state UARK parent.",
    date: 'May 2024',
  },
  {
    name: 'Mike T.',
    location: 'Fayetteville, AR',
    type: 'Residential',
    stars: 5,
    text: 'Professional crew, fair pricing, and zero hidden fees. Moved our whole house from Fayetteville to Springdale in a single day. Everything arrived in perfect condition — not a single scratch. Straightforward and trustworthy.',
    date: 'March 2024',
  },
  {
    name: 'James W.',
    location: 'Bentonville, AR',
    type: 'Commercial',
    stars: 5,
    text: 'Moved our entire office with zero drama. The guys were efficient, knew exactly how to handle our equipment, and worked around our weekend timeline so we were fully operational on Monday. Highly recommended for commercial moves in NWA.',
    date: 'February 2024',
  },
  {
    name: 'Tyler R.',
    location: 'UARK Student',
    type: 'Student Storage',
    stars: 5,
    text: "Used their student storage service for the summer — they picked up my stuff at move-out and delivered it at move-in three months later. Easy, affordable, and everything was exactly as I left it. Huge stress reliever. This is the way to do summer storage.",
    date: 'August 2024',
  },
  {
    name: 'Amanda C.',
    location: 'Springdale, AR',
    type: 'Residential',
    stars: 5,
    text: "Third time using Boss Hog and they never disappoint. Always on time, always careful, always professional. The best movers in NWA — bar none. Won't use anyone else.",
    date: 'October 2024',
  },
  {
    name: 'Jennifer P.',
    location: 'Fayetteville, AR',
    type: 'UARK Parent',
    stars: 5,
    text: "Booking was easy, the crew showed up exactly on time, and they had my daughter's apartment cleared out in under two hours. For UARK parents dreading move-out week — this is your answer. Worth every penny.",
    date: 'May 2024',
  },
  {
    name: 'David H.',
    location: 'Rogers, AR',
    type: 'Residential',
    stars: 5,
    text: "Moving is stressful, but Boss Hog made it about as painless as possible. Clear quote upfront, showed up when they said, moved everything carefully, and were done ahead of schedule. Great experience from start to finish.",
    date: 'January 2024',
  },
  {
    name: 'Maria G.',
    location: 'Bentonville, AR',
    type: 'Commercial',
    stars: 5,
    text: "We relocated our medical office on a Saturday and the Boss Hog crew was fantastic. They treated our equipment with care, followed our room-by-room plan perfectly, and had us ready to open Monday morning. Couldn't ask for better.",
    date: 'September 2024',
  },
]

const typeColors: Record<string, string> = {
  'UARK Parent': 'bg-amber-100 text-amber-800',
  'Student Storage': 'bg-blue-100 text-blue-800',
  Residential: 'bg-green-100 text-green-800',
  Commercial: 'bg-purple-100 text-purple-800',
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Customer Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
            What Our Customers Say
          </h1>

          {/* Rating display */}
          <div className="flex items-center justify-center gap-2 mb-3">
            {Array(5).fill(null).map((_, i) => (
              <svg key={i} className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-2xl font-extrabold text-white mb-1">5.0 / 5.0</p>
          <p className="text-gray-400 text-sm mb-8">Based on 100+ Google reviews</p>

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

      {/* Review filters info */}
      <section className="bg-white py-8 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {Object.entries(typeColors).map(([type, color]) => (
            <span key={type} className={`text-xs font-bold px-3 py-1.5 rounded-full ${color}`}>
              {type}
            </span>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array(review.stars).fill(null).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Type badge */}
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-3 ${typeColors[review.type] ?? 'bg-gray-100 text-gray-700'}`}>
                  {review.type}
                </span>

                {/* Review text */}
                <p className="text-gray-700 text-sm leading-relaxed flex-grow italic mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Had a great experience? Leave us a review!
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Reviews help other NWA families and businesses find a mover they can trust.
          </p>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Leave a Google Review ★
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Join 100+ Happy NWA Customers
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Book your move today and see why Boss Hog is the highest-rated moving company in
            Northwest Arkansas.
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
