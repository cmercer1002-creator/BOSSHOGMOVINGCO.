import Link from 'next/link'
import { BOOK_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

interface ServiceHeroProps {
  badge?: string
  title: string
  subtitle: string
  primaryCTA?: string
  primaryCTAHref?: string
  secondaryCTA?: string
  secondaryCTAHref?: string
  showPhone?: boolean
}

export default function ServiceHero({
  badge,
  title,
  subtitle,
  primaryCTA = 'Book Online',
  primaryCTAHref = BOOK_URL,
  secondaryCTA = 'Get a Free Quote',
  secondaryCTAHref = '/contact#quote',
  showPhone = true,
}: ServiceHeroProps) {
  const primaryIsExternal = primaryCTAHref.startsWith('http')

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-balance">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTAHref}
            target={primaryIsExternal ? '_blank' : undefined}
            rel={primaryIsExternal ? 'noopener noreferrer' : undefined}
            className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors shadow-lg"
          >
            {primaryCTA} →
          </Link>
          <Link
            href={secondaryCTAHref}
            className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
          >
            {secondaryCTA}
          </Link>
        </div>
        {showPhone && (
          <div className="mt-6">
            <a href={PHONE_HREF} className="text-gray-400 hover:text-white text-sm transition-colors">
              Or call us:{' '}
              <span className="font-semibold text-gray-200">{PHONE_DISPLAY}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
