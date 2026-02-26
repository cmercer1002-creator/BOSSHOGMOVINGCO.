# Boss Hog Moving Co. — Marketing Website

A modern, high-converting local SEO marketing website for **Boss Hog Moving Co.** in Fayetteville, AR.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, choose-your-move cards, trust section, reviews snippet, quote form |
| `/uark-student-moving` | UARK student moving landing page (primary conversion path) |
| `/student-storage` | Student summer storage landing page |
| `/residential-moving` | Residential moving landing page |
| `/commercial-moving` | Commercial/office moving landing page |
| `/service-areas` | Service areas page (Fayetteville, Springdale, Rogers, Bentonville, + NWA) |
| `/reviews` | Customer reviews showcase |
| `/contact` | Contact + quote form |
| `/api/lead` | POST endpoint — logs lead and returns success (ready for CRM integration) |

---

## Running Locally

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### 1. Navigate to the project

```bash
cd "Boss Hog"
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Before Going Live — Required Updates

Open `src/lib/constants.ts` and replace all placeholder values:

```ts
export const PHONE_DISPLAY = '(479) 555-0100'  // ← Replace with real phone
export const PHONE_HREF = 'tel:+14795550100'    // ← Replace with real phone (E.164 format)
export const EMAIL = 'info@bosshogmoving.com'   // ← Replace with real email
export const SITE_URL = 'https://bosshogmoving.com' // ← Replace with real domain
```

Also update in `src/app/layout.tsx`:
```ts
metadataBase: new URL('https://bosshogmoving.com'), // ← Replace with real domain
```

And in `src/components/LocalBusinessSchema.tsx`:
- Verify the business address, coordinates, and hours are correct.

---

## Building for Production

```bash
npm run build
npm run start
```

---

## Deploying to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel will auto-detect Next.js — just click Deploy
4. Add your custom domain in the Vercel dashboard

### One-click deploy alternative

```bash
npx vercel
```

---

## Lead Capture API

The `/api/lead` route (`src/app/api/lead/route.ts`) currently:
- Accepts POST requests with the quote form payload
- Logs the lead to the server console
- Returns a success JSON response

### To connect to a real CRM or email:

**Option A — Email via Resend:**
```bash
npm install resend
```
```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({
  from: 'leads@bosshogmoving.com',
  to: 'you@bosshogmoving.com',
  subject: `New Lead: ${body.name}`,
  text: JSON.stringify(body, null, 2),
})
```

**Option B — HouseCall Pro / Zapier webhook:**
```ts
await fetch(process.env.ZAPIER_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})
```

Add your secrets to a `.env.local` file (never commit this file):
```
RESEND_API_KEY=re_...
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/...
```

---

## SEO Implemented

- Unique `<title>` and `<meta description>` on every page targeting Fayetteville/NWA keywords
- `LocalBusiness` (MovingCompany) JSON-LD schema sitewide
- `FAQPage` JSON-LD schema on all service pages
- `openGraph` metadata on every page
- Internal linking between all service pages and service areas
- `robots: { index: true, follow: true }` set globally
- `metadataBase` configured for correct OG URL resolution

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | React framework, routing, SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Next.js Font Optimization | Google Fonts (Inter) |
| Next.js Metadata API | SEO titles, descriptions, OG tags |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  Global layout (header, footer, schema)
│   ├── page.tsx                    Home page
│   ├── uark-student-moving/
│   │   └── page.tsx
│   ├── student-storage/
│   │   └── page.tsx
│   ├── residential-moving/
│   │   └── page.tsx
│   ├── commercial-moving/
│   │   └── page.tsx
│   ├── service-areas/
│   │   └── page.tsx
│   ├── reviews/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── lead/
│           └── route.ts
├── components/
│   ├── Header.tsx                  Sticky nav with mobile menu (client)
│   ├── Footer.tsx                  Multi-column footer
│   ├── UrgencyStrip.tsx            Top urgency bar
│   ├── ServiceHero.tsx             Reusable service page hero
│   ├── ChooseYourMove.tsx          3-card section on home page
│   ├── QuoteForm.tsx               Lead capture form (client)
│   ├── FAQSection.tsx              CSS-only accordion FAQ
│   ├── LocalBusinessSchema.tsx     JSON-LD schema
│   └── FAQSchema.tsx               FAQ JSON-LD schema
└── lib/
    └── constants.ts                Centralized business info
```

---

## Customization

### Colors
The site uses Tailwind's built-in `red-600`, `amber-400`, and `gray-900`. To change the primary color, do a find-and-replace for `red-600` → your color.

### Adding Real Photos
Replace the gradient hero backgrounds with `next/image` + real photos:
```tsx
import Image from 'next/image'
// Replace the gradient section with:
<div className="relative">
  <Image src="/hero.jpg" alt="Moving truck" fill className="object-cover" />
  <div className="absolute inset-0 bg-gray-900/70" />
  {/* content */}
</div>
```

### Google Reviews Integration
Replace the hardcoded reviews in `/reviews/page.tsx` with live data from the Google Places API or a service like EmbedSocial/Birdeye.
