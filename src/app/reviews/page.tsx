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
  // Residential
  { name: 'Beverly C.', type: 'Residential', stars: 5, text: "Cameron and Matthew went above and beyond helping me move. They communicated well, super professional, and true to their word. They are hardworking and very kind. They are prompt and show up ready to work. I would definitely use them again should the occasion arise!" },
  { name: 'Leanna B.', type: 'Residential', stars: 5, text: "The two gentlemen arrived on time, were very polite and worked hard for 3 solid hours. I would highly recommend" },
  { name: 'Robyn R.', type: 'Residential', stars: 5, text: "Fast and friendly movers. Highly recommend!" },
  { name: 'Tina M.', type: 'Residential', stars: 5, text: "Great guys, great service." },
  { name: 'Hannah F.', type: 'Residential', stars: 5, text: "Cameron did an amazing job building my bed frame and bar stools. I texted him very last minute and he was able to come out two days later and help me. If you are needing any furniture built, I highly recommend Cameron!!" },
  // UARK Parent / Student
  { name: 'Kristy / Io J.', type: 'UARK Parent/Student', stars: 5, text: "Amazing work ethic & professional communication. Efficient process. Finished the move UP THREE STORIES even more quickly than I anticipated. I will recommend this company without question." },
  { name: 'Jen G.', type: 'UARK Parent/Student', stars: 5, text: "Great experience! The movers kept in communication, arrived on time, were professional and courteous. They were helpful with unloading our trailer and furniture setup. Highly recommend!" },
  { name: 'Andi L.', type: 'UARK Parent/Student', stars: 5, text: "Great experience!! We had apartment issues and had to reschedule a couple of times. Cameron was so flexible and gracious about the changes. Once we finally got to move everything was quick and easy and they did a fabulous job!" },
  { name: 'Edith T.', type: 'UARK Parent/Student', stars: 5, text: "Showed up on time, and incredibly helpful!! Will definitely use them in the future! Thank you!" },
  { name: 'Sarah H.', type: 'UARK Parent/Student', stars: 5, text: "Best move in day ever! Nick and John were awesome! So worth the money!" },
  { name: 'Savannah B.', type: 'UARK Parent/Student', stars: 5, text: "Amazing service" },
  { name: 'Lea S.', type: 'UARK Parent/Student', stars: 5, text: "Cameron and his crew were amazing! They were efficient, pleasant and perfect! I would 100% recommend to someone needing a moving team and will definitely be using again!" },
  { name: 'Taylor Y.', type: 'UARK Parent/Student', stars: 5, text: "Reed and Garrett were a huge help! Will be recommending y'all to everyone! Thanks again!" },
  { name: 'Jennifer S.', type: 'UARK Parent/Student', stars: 5, text: "Great group of guys! Very hard working" },
  { name: 'Noelle G.', type: 'UARK Parent/Student', stars: 5, text: "Garrett and Cole were amazing!! They were there when we pulled up. They unloaded 2 cars worth of boxes, bags and furniture!! After moving it all in - they put together 2 futons, 1 floor lamp, a rolling TV cart and 2 table lamps and put rugs down. Never complained - always had smiles on! They made our move in day so easy!!!!" },
  { name: 'Emma Boyd B.', type: 'UARK Parent/Student', stars: 5, text: "Our 2 movers, Dillon and Spencer were great! We had challenges with only 1 working elevator but they didn't let that stop them! They carried our loveseat up the stairs to the 4th floor. Highly recommend!" },
  { name: 'Missy C.', type: 'UARK Parent/Student', stars: 5, text: "Cameron and team did a great job! Thanks for taking care of our daughter to help her move to her new apartment. Great communication and highly recommend!" },
  { name: 'Melanie M.', type: 'UARK Parent/Student', stars: 5, text: "Once again Cameron and crew came through for us! We had them help us two days before for a move-out/load U-Haul. Our move-in help fell short so I texted Cameron at 11:30pm asking for help the next day. Early the next morning he had us set up with help for that day. Once again professional, highly responsive, and the two-guy-crew was prompt, courteous, efficient and respectful of our things." },
  { name: 'Kim S.', type: 'UARK Parent/Student', stars: 5, text: "Awesome! They were on time, fast, and friendly! Would highly recommend!" },
  { name: 'Kristin A.', type: 'UARK Parent/Student', stars: 5, text: "We have used Boss Hog Moving Co. twice and will keep using them each time." },
  { name: 'Debbie E.', type: 'UARK Parent/Student', stars: 5, text: "Amazing service, I reached out to them last minute and they came to help get my girls unloaded. Absolutely would recommend, Cameron and his crew were very courteous!" },
  { name: 'Melanie M. (2)', type: 'UARK Parent/Student', stars: 5, text: "Great experience with Boss Hog Moving Co. Cameron is very professional, respectful, and organized. Great communication, quick to respond, and on point to keep us informed of the teams arrival time. The team of 2 movers were very respectful to us as well as of the items they were moving for us. They were incredibly efficient and careful. We will use them again and we Highly recommend Boss Hog Moving Co.!" },
  { name: 'Katie M.', type: 'UARK Parent/Student', stars: 5, text: "Cameron was punctual and so helpful!" },
  { name: 'Andrea G.', type: 'UARK Parent/Student', stars: 5, text: "Cameron and his team at Boss Hog Moving Co. are amazing!! If we are moving anything in NWA he is my FIRST and ONLY call!! He takes great care of our items, can assist with set up or tear down and is very efficient!! Thank you, Cameron!!" },
  { name: 'Wendy H.', type: 'UARK Parent/Student', stars: 5, text: "Super impressed with Cameron and his team. Very careful with our belongings and very kind and respectful! Will definitely be using them again for future moves!" },
  { name: 'Amy T.', type: 'UARK Parent/Student', stars: 5, text: "Amazing service! Would happily book again." },
  { name: 'Jennifer S. (2)', type: 'UARK Parent/Student', stars: 5, text: "The guys were on time, polite and very hardworking! I would highly recommend." },
]

const typeColors: Record<string, string> = {
  'UARK Parent/Student': 'bg-amber-100 text-amber-800',
  Residential: 'bg-green-100 text-green-800',
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
          <p className="text-gray-400 text-sm mb-8">Verified customer reviews</p>

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
            {reviews.map((review, i) => (
              <div
                key={i}
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
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
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
