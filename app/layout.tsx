import type { Metadata } from 'next';
import './globals.css';
import { WhatsAppButton } from '../components/whatsapp-button';

export const metadata: Metadata = {
  metadataBase: new URL('https://skyhousefinishing.co.zw'),
  title: {
    default: 'Sky House Finishing | Cape Town Property & Renovation Specialists',
    template: '%s | Sky House Finishing',
  },
  icons: { icon: '/favicon.svg' },
  description:
    'Sky House Finishing specializes in interior & exterior painting, solar installations, professional tiling, electrical maintenance, and roof waterproofing in Cape Town.',
  keywords: [
    'Sky House Finishing',
    'Sky House Cape Town',
    'Painters in Cape Town',
    'Milnerton Painting Contractor',
    'Solar System Installations Cape Town',
    'Professional Tiling & Flooring',
    'Roof Waterproofing Cape Town',
    'Property Maintenance Cape Town',
  ],
  alternates: {
    canonical: 'https://skyhousefinishing.co.zw',
  },
  openGraph: {
    title: 'Sky House Finishing | Cape Town Property Specialists',
    description:
      'Transforming homes, estates & commercial spaces with high-end painting, tiling, solar, and waterproofing services.',
    url: 'https://skyhousefinishing.co.zw',
    siteName: 'Sky House Finishing',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky House Finishing | Cape Town Property Specialists',
    description:
      'Transforming homes, estates & commercial spaces with high-end painting, tiling, solar, and waterproofing services.',
  },
  verification: {
    google: 'googlef0241d539f96ad8a',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sky House Finishing',
    image: 'https://skyhousefinishing.co.zw/skyhouse-logo.png',
    '@id': 'https://skyhousefinishing.co.zw',
    url: 'https://skyhousefinishing.co.zw',
    telephone: '+27628567694',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '31116 Waxberry Street, Milnerton',
      addressLocality: 'Cape Town',
      postalCode: '7441',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 18.5042,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/skyhousefinishing',
      'https://www.instagram.com/skyhousefinishing',
      'https://www.linkedin.com/company/skyhousefinishing',
      'https://www.tiktok.com/@skyhousefinishing',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
