import Link from 'next/link';
import { notFound } from 'next/navigation';
import { X } from 'lucide-react';
import { SiteFooter } from '../../../components/site-footer';
import { SiteHeader } from '../../../components/site-header';
import { getServiceBySlug, services } from '../../../components/services-data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white text-ink">
      <SiteHeader />
      <section className="relative bg-navy py-20 text-white">
        <Link
          href="/services"
          aria-label="Close and return to services"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:border-sky hover:bg-sky sm:right-8 sm:top-8"
        >
          <X className="h-5 w-5" />
        </Link>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-badge"><Icon className="h-7 w-7 text-white" /></span>
          <h1 className="mt-6 text-3xl font-extrabold sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-canvas">{service.description}</p>
          <Link href="/#contact" className="mt-8 inline-flex rounded-lg bg-sky px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-navy">Request a quote</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
