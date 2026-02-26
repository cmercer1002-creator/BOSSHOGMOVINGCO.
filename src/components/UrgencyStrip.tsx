import Link from 'next/link'
import { BOOK_URL } from '@/lib/constants'

export default function UrgencyStrip() {
  return (
    <div className="bg-amber-400 text-gray-900 text-center py-2.5 px-4 text-sm font-semibold">
      <span>📅 Book Early for May — UARK Move-Out Rates Increase June 1.</span>{' '}
      <Link
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-bold hover:text-gray-700 ml-1 whitespace-nowrap"
      >
        Reserve Your Spot →
      </Link>
    </div>
  )
}
