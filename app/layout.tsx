import type { Metadata } from 'next';
import './globals.css';
import { WhatsAppButton } from '../components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Sky House Finishing | Premium Finishing Solutions Cape Town',
  icons: { icon: '/favicon.svg' },
  description:
    'Sky House Finishing delivers premium painting, solar, electrical, tiling, welding and waterproofing services across Cape Town with precision and professionalism.',
  keywords: [
    'Painting Contractors Cape Town',
    'Solar Installers Cape Town',
    'Electrical Contractors Cape Town',
    'Waterproofing Cape Town',
    'Tiling Contractors Cape Town',
    'Construction Company Cape Town',
    'Milnerton Contractors',
  ],
  openGraph: {
    title: 'Sky House Finishing | Premium Finishing Solutions Cape Town',
    description:
      'Registered contractor delivering premium finishing services across Cape Town for homes and businesses.',
    type: 'website',
    url: 'https://skyhousefinishing.co.za',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky House Finishing | Premium Finishing Solutions Cape Town',
    description:
      'Registered contractor delivering premium finishing services across Cape Town for homes and businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
