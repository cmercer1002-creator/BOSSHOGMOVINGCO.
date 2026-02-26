import { COMPANY_NAME, PHONE_DISPLAY, EMAIL, SITE_URL, SERVICE_AREAS } from '@/lib/constants'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: COMPANY_NAME,
    description:
      "Fayetteville's trusted local moving company serving students, homes, and businesses across Northwest Arkansas.",
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fayetteville',
      addressRegion: 'AR',
      postalCode: '72701',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.0626,
      longitude: -94.1574,
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'Arkansas',
      },
    })),
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Moving Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UARK Student Moving' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Student Storage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Moving' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Moving' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
