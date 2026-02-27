import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import UrgencyStrip from '@/components/UrgencyStrip'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Boss Hog Moving Co. | Fayetteville AR Moving Company',
    template: '%s | Boss Hog Moving Co.',
  },
  description:
    "Fayetteville's trusted local moving company. Student, residential, and commercial moves across Northwest Arkansas. Book online today!",
  keywords: [
    'moving company Fayetteville AR',
    'UARK movers',
    'student movers Fayetteville',
    'Northwest Arkansas movers',
    'NWA moving company',
    'local movers Fayetteville',
  ],
  metadataBase: new URL('https://bosshogmoving.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Boss Hog Moving Co.',
    title: 'Boss Hog Moving Co. | Fayetteville AR Moving Company',
    description:
      "Fayetteville's trusted local moving company. Student, residential, and commercial moves across Northwest Arkansas.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        <UrgencyStrip />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
