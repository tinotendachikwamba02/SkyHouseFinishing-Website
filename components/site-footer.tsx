import Link from 'next/link';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SocialLinks } from './social-links';

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-sky bg-midnight py-12 text-canvas">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">SKY HOUSE FINISHING</p>
          <p className="mt-3 text-sm leading-6">Reliable finishing work for homes and businesses across Cape Town.</p>
          <SocialLinks className="mt-5 flex items-center gap-3" />
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</h2>
          <div className="mt-4 grid gap-2 text-sm"><Link href="/">Home</Link><Link href="/#about">About Us</Link><Link href="/services">Services</Link><Link href="/projects">View Our Work</Link></div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h2>
          <div className="mt-4 grid gap-2 text-sm"><Link href="/services#painting" className="cursor-pointer transition-colors hover:text-blue-400">Painting</Link><Link href="/services#solar" className="cursor-pointer transition-colors hover:text-blue-400">Solar installations</Link><Link href="/services#electrical" className="cursor-pointer transition-colors hover:text-blue-400">Electrical work</Link><Link href="/services#tiling-waterproofing" className="cursor-pointer transition-colors hover:text-blue-400">Tiling, welding &amp; waterproofing</Link></div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <a className="flex items-center gap-2" href="tel:+27628567694"><Phone className="h-4 w-4 text-sky" />+27 62 856 7694</a>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky" />Milnerton, Cape Town</span>
            <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky" />Mon-Sat: 08:00-18:00</span>
            <a className="flex items-center gap-2" href="https://wa.me/27628567694?text=Hi%20Sky%20House%20Finishing!%20I%20would%20like%20to%20get%20more%20information%20about%20your%20services." target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4 text-sky" />WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 px-4 pt-6 text-sm sm:px-6 lg:px-8">Copyright 2026 Sky House Finishing. All rights reserved.</div>
    </footer>
  );
}