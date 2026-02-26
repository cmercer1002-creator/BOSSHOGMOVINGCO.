import Link from 'next/link'
import { BOOK_URL } from '@/lib/constants'

const moves = [
  {
    icon: '🎓',
    label: 'UARK & Student Moves',
    description:
      'Move-in, move-out, and summer storage for UARK students and families. Book early — May dates fill fast!',
    href: '/uark-student-moving',
    highlight: true,
    badge: 'Most Popular',
    cta: 'Book UARK Move',
  },
  {
    icon: '🏠',
    label: 'Residential Moving',
    description:
      'Full-service local and long-distance moves for Fayetteville homes. Licensed, insured, and careful with every item.',
    href: '/residential-moving',
    highlight: false,
    badge: null,
    cta: 'Book Residential Move',
  },
  {
    icon: '🏢',
    label: 'Commercial Moving',
    description:
      'Office relocations and business moves done right — on time, on budget, with minimal downtime to your operations.',
    href: '/commercial-moving',
    highlight: false,
    badge: null,
    cta: 'Book Commercial Move',
  },
]

export default function ChooseYourMove() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your Move
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From UARK move-outs to office relocations, Boss Hog handles every type of move across
            Northwest Arkansas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {moves.map((move) => (
            <div
              key={move.href}
              className={`relative rounded-2xl p-7 flex flex-col transition-shadow hover:shadow-xl ${
                move.highlight
                  ? 'bg-red-50 border-2 border-red-600 shadow-lg'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {move.badge && (
                <span className="absolute -top-3.5 left-6 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  {move.badge}
                </span>
              )}

              <div className="text-5xl mb-4">{move.icon}</div>
              <h3
                className={`text-xl font-extrabold mb-3 ${
                  move.highlight ? 'text-red-700' : 'text-gray-900'
                }`}
              >
                {move.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-7 flex-grow">
                {move.description}
              </p>

              <div className="flex flex-col gap-2.5">
                <Link
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center text-sm font-bold py-3 rounded-xl transition-colors ${
                    move.highlight
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {move.cta} →
                </Link>
                <Link
                  href={move.href}
                  className="text-center text-sm font-semibold text-gray-500 hover:text-red-600 py-1 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
