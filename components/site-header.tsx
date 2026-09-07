'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { services } from './services-data';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'View Our Work' },
  { href: '/#contact', label: 'Contact' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image src="/skyhouse-logo.png" alt="Sky House Finishing" width={200} height={200} priority className="h-16 w-auto max-h-16 sm:h-20" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink md:flex">
          <Link href={navigation[0].href} className="transition hover:text-sky">{navigation[0].label}</Link>
          <Link href={navigation[1].href} className="transition hover:text-sky">{navigation[1].label}</Link>
          <Link href="/services" className="transition hover:text-sky">Services</Link>
          <div className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
            <button type="button" onClick={() => setWorkOpen((open) => !open)} className="flex items-center gap-1 transition hover:text-sky" aria-expanded={workOpen} aria-haspopup="true">
              View Our Work <ChevronDown className={`h-4 w-4 transition ${workOpen ? 'rotate-180' : ''}`} />
            </button>
            {workOpen && <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-lg border border-sky/15 bg-white p-2 shadow-soft">
              <Link href="/projects" className="block rounded-md px-3 py-2 text-sm font-bold text-sky hover:bg-canvas">All project work</Link>
              {services.map((service) => <Link key={service.slug} href={`/projects?category=${service.slug}`} className="block rounded-md px-3 py-2 text-sm font-semibold text-ink transition hover:bg-canvas hover:text-sky">{service.navLabel}</Link>)}
            </div>}
          </div>
          <Link href={navigation[3].href} className="transition hover:text-sky">{navigation[3].label}</Link>
        </nav>
        <a href="https://wa.me/27628567694" target="_blank" rel="noopener noreferrer" className="hidden rounded-lg bg-sky px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy md:inline-flex">Request a Quote</a>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sky/30 text-navy md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-sky/15 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            <Link href={navigation[0].href} onClick={() => setMenuOpen(false)} className="border-b border-sky/10 px-3 py-3 text-sm font-semibold text-ink">{navigation[0].label}</Link>
            <Link href={navigation[1].href} onClick={() => setMenuOpen(false)} className="border-b border-sky/10 px-3 py-3 text-sm font-semibold text-ink">{navigation[1].label}</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="border-b border-sky/10 px-3 py-3 text-sm font-semibold text-ink">Services</Link>
            <button type="button" onClick={() => setMobileWorkOpen((open) => !open)} className="flex items-center justify-between border-b border-sky/10 px-3 py-3 text-sm font-semibold text-ink" aria-expanded={mobileWorkOpen}>
              View Our Work <ChevronDown className={`h-4 w-4 transition ${mobileWorkOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileWorkOpen && <div className="border-b border-sky/10 bg-canvas px-3 py-2"><Link href="/projects" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-bold text-sky">All project work</Link>{services.map((service) => <Link key={service.slug} href={`/projects?category=${service.slug}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-ink hover:text-sky">{service.navLabel}</Link>)}</div>}
            <Link href={navigation[3].href} onClick={() => setMenuOpen(false)} className="border-b border-sky/10 px-3 py-3 text-sm font-semibold text-ink last:border-0">{navigation[3].label}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}