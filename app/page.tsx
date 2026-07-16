'use client';

import Link from 'next/link';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Building2,
  CalendarCheck2,
  Camera,
  CheckCircle2,
  ChevronRight,
  ChevronUp,
  Clock3,
  Compass,
  Droplets,
  Facebook,
  Hammer,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleMore,
  PaintbrushVertical,
  Phone,
  QrCode,
  Send,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Wrench,
} from 'lucide-react';

const services = [
  {
    title: 'Painting',
    description: 'Flawless interior and exterior painting with premium finishes and meticulous surface preparation.',
    icon: PaintbrushVertical,
  },
  {
    title: 'Solar Installations',
    description: 'Efficient solar solutions designed for long-term performance and energy savings.',
    icon: SunMedium,
  },
  {
    title: 'Electrical Systems',
    description: 'Professional electrical work for modern homes, offices and complex commercial environments.',
    icon: Wrench,
  },
  {
    title: 'Tiling',
    description: 'Luxury tiling installations that bring elegance, durability and precision to every space.',
    icon: Home,
  },
  {
    title: 'Welding',
    description: 'Structural and decorative metalwork completed to the highest engineering and finishing standards.',
    icon: Hammer,
  },
  {
    title: 'Waterproofing',
    description: 'Protective waterproofing systems that defend properties against leaks, damp and long-term wear.',
    icon: Droplets,
  },
];

const advantages = [
  'Registered Contractor',
  'Quality Workmanship',
  'Reliable & On-Time Delivery',
  'Residential & Commercial Expertise',
  'Premium Materials',
  'Customer Satisfaction',
];

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '15+', label: 'Areas Served' },
  { value: '98%', label: 'Satisfied Clients' },
];

const areas = [
  'Milnerton',
  'Table View',
  'Blouberg',
  'Parklands',
  'Sunningdale',
  'Woodbridge Island',
  'Royal Ascot',
  'Big Bay',
  'Edgemead',
  'Panorama',
];

const projects = [
  {
    title: 'Luxury Residential Refresh',
    location: 'Milnerton',
    servicesProvided: 'Painting • Waterproofing',
    beforeImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Commercial Exterior Upgrade',
    location: 'Woodbridge Island',
    servicesProvided: 'Waterproofing • Electrical',
    beforeImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Contemporary Tiling Installation',
    location: 'Blouberg',
    servicesProvided: 'Tiling • Finishing',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Solar-Ready Roofline',
    location: 'Table View',
    servicesProvided: 'Solar • Electrical',
    beforeImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
  },
];

const trustIndicators = [
  { title: 'Registered Contractor', icon: ShieldCheck },
  { title: 'Since 2021', icon: BadgeCheck },
  { title: 'Residential & Commercial', icon: Building2 },
  { title: 'Serving Greater Cape Town', icon: Compass },
];

const contactOptions = [
  { id: 'whatsapp', title: 'WhatsApp Business', description: 'Chat with our team instantly', icon: MessageCircleMore },
  { id: 'call', title: 'Call Us', description: 'Speak with our project consultants', icon: Phone },
  { id: 'email', title: 'Send an Email', description: 'Receive a prompt quotation reply', icon: Mail },
  { id: 'directions', title: 'Get Directions', description: 'Find our office and service area', icon: MapPin },
  { id: 'quote', title: 'Request a Free Quote', description: 'Start your project with a tailored quote', icon: Send },
];

const whatsappServices = [
  { label: 'Get a Quote', message: 'Hello, I would like to request a free quote for my property.' },
  { label: 'Painting', message: 'Hello, I would like to enquire about painting services.' },
  { label: 'Solar Installations', message: 'Hello, I would like to enquire about solar installation services.' },
  { label: 'Electrical Systems', message: 'Hello, I would like to enquire about electrical services.' },
  { label: 'Tiling', message: 'Hello, I would like to enquire about tiling services.' },
  { label: 'Welding', message: 'Hello, I would like to enquire about welding services.' },
  { label: 'Waterproofing', message: 'Hello, I would like to enquire about waterproofing services.' },
];

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/27628567694', icon: MessageCircle, active: true },
  { name: 'Facebook', href: '#', icon: Facebook, active: false },
  { name: 'Instagram', href: '#', icon: Instagram, active: false },
  { name: 'LinkedIn', href: '#', icon: Linkedin, active: false },
];

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageView, setImageView] = useState<Record<number, 'before' | 'after'>>({});
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    service: 'Painting',
    location: '',
    message: '',
    contactMethod: 'WhatsApp',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setQuoteSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuoteSubmitted(true);
  };

  const handleContactAction = (action: 'whatsapp' | 'call' | 'email' | 'directions' | 'quote') => {
    setContactModalOpen(false);
    if (action === 'quote') {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const phone = '27628567694';
    const email = 'info@SkyHouseFinishing.co.za';

    if (action === 'whatsapp') {
      window.open(`https://wa.me/${phone}?text=Hello%20Sky%20House%20Finishing%2C%20I%20would%20like%20to%20discuss%20my%20project.`, '_blank', 'noopener,noreferrer');
    } else if (action === 'call') {
      window.location.href = `tel:${phone}`;
    } else if (action === 'email') {
      window.location.href = `mailto:${email}?subject=Quotation%20Request`;
    } else if (action === 'directions') {
      window.open('https://www.google.com/maps/dir/?api=1&destination=Milnerton%20Cape%20Town', '_blank', 'noopener,noreferrer');
    }
  };

  const openWhatsApp = (message: string) => {
    setChatOpen(false);
    window.open(`https://wa.me/27628567694?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const toggleProjectImage = (index: number) => {
    setImageView((current) => ({ ...current, [index]: current[index] === 'before' ? 'after' : 'before' }));
  };

  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">SH</div>
            <div>
              <p className="text-lg font-semibold text-navy">Sky House</p>
              <p className="text-xs uppercase tracking-[0.35em] text-muted">Finishing</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <Link href="#about" className="transition hover:text-gold">About</Link>
            <Link href="#services" className="transition hover:text-gold">Services</Link>
            <Link href="#projects" className="transition hover:text-gold">Projects</Link>
            <Link href="#areas" className="transition hover:text-gold">Areas</Link>
            <Link href="#contact" className="transition hover:text-gold">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setContactModalOpen(true)} className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold md:inline-flex">Contact Us</button>
            <a href="#quote-form" className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold hover:text-navy">Get Free Quote</a>
          </div>
        </div>
      </header>

      <section id="home" className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1800&q=80"
            alt="Modern luxury home finished to a premium standard"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/70 to-navy/40" />
        </div>
        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-gold" /> Registered Contractor · Since 2021
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
              Premium Finishing<br />for Distinguished<br />Properties
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Painting, solar installations, electrical systems, tiling, welding and waterproofing delivered with precision, professionalism and exceptional workmanship across Cape Town.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote-form" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy transition hover:scale-[1.01] hover:bg-white">Request Free Quote</a>
              <button type="button" onClick={() => setContactModalOpen(true)} className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:border-gold hover:text-gold">Contact Us</button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
              {trustIndicators.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                    <Icon className="h-4 w-4 text-gold" />
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur-xl">
            <div className="rounded-[24px] bg-white p-6 text-left shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Trusted by discerning property owners</p>
              <h2 className="mt-3 text-2xl font-semibold text-navy">Premium craftsmanship with a clear commitment to quality.</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3 rounded-2xl bg-canvas p-4">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <span>Licensed, insured and committed to long-lasting results.</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-canvas p-4">
                  <CalendarCheck2 className="h-5 w-5 text-gold" />
                  <span>Reliable scheduling and clear communication from start to finish.</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-canvas p-4">
                  <Building2 className="h-5 w-5 text-gold" />
                  <span>Tailored solutions for homes, estates, commercial buildings and developments.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">About Sky House Finishing</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Building trust through quality workmanship.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Based in Milnerton, Cape Town, Sky House Finishing brings together skilled tradesmanship, attention to detail and meticulous project management to create lasting finishes that elevate every property.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From luxury homes to commercial developments, our workmanship combines premium materials with disciplined execution for results that are striking, durable and dependable.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-4xl font-extrabold text-navy">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-canvas py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Services</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Crafted solutions for every finishing need.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Every project is delivered with the same level of care, precision and professional execution.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-gold">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                  <button type="button" onClick={() => setContactModalOpen(true)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:gap-3">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Why Choose Sky House Finishing</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">A premium standard built on trust and precision.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-canvas p-6 transition hover:-translate-y-1 hover:border-gold">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Premium execution that gives your property a refined, long-lasting finish.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Featured Projects</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Visual proof of quality craftsmanship.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Our portfolio reflects a consistent commitment to beautiful, durable finishes across residential and commercial properties.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">Request a Consultation <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {projects.map((project, index) => {
              const currentView = imageView[index] ?? 'before';
              return (
                <div key={project.title} className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-soft backdrop-blur-sm">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={currentView === 'before' ? project.beforeImage : project.afterImage}
                      alt={`${project.title} ${currentView}`}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{project.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => toggleProjectImage(index)} className="rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">{currentView === 'before' ? 'Before / After' : 'Switch View'}</button>
                      <button type="button" onClick={() => setPreviewImage(currentView === 'before' ? project.beforeImage : project.afterImage)} className="rounded-full bg-gold px-3 py-2 text-sm font-semibold text-navy transition hover:bg-white">Preview</button>
                    </div>
                  </div>
                  <div className="mt-4 rounded-[20px] border border-white/10 bg-slate-950/20 p-4 text-sm text-slate-300">
                    <p className="font-medium text-white">Services Provided</p>
                    <p className="mt-1">{project.servicesProvided}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="areas" className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Service Areas</p>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Serving homes and businesses across Cape Town.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">From Milnerton to greater Cape Town, we are ready to deliver projects at scale with the same professional standards.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Milnerton%20Cape%20Town" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-navy">Get Directions</a>
            <button type="button" onClick={() => setContactModalOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-navy transition hover:border-gold hover:text-gold">Contact Us</button>
          </div>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-soft">
          <iframe
            title="Sky House Finishing Location"
            src="https://www.google.com/maps?q=Milnerton%20Cape%20Town&z=12&output=embed"
            className="h-[420px] w-full rounded-[24px] border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-canvas py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Google Reviews</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Google Reviews</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">We are currently building our online review profile. As we complete more projects, genuine customer reviews from Google will appear here. We believe in earning every review through quality workmanship and exceptional service.</p>
            <a href="#" className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-navy">View Our Google Reviews</a>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[36px] border border-slate-200 bg-canvas p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Quotation Request</p>
              <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Request your free quote in minutes.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Share a few details and our team will get back to you with a tailored quotation for your project.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-700">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <Phone className="h-5 w-5 text-gold" />
                  <span>062 856 7694</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <Mail className="h-5 w-5 text-gold" />
                  <span>info@SkyHouseFinishing.co.za</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span>Milnerton, Cape Town</span>
                </div>
              </div>
            </div>
            <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 outline-none ring-0" />
                  </label>
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                    <input type="tel" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 outline-none ring-0" />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 outline-none ring-0" />
                  </label>
                  <label className="text-sm font-medium text-slate-700">
                    Service Required
                    <select name="service" value={formData.service} onChange={handleInputChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 outline-none ring-0">
                      {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                    </select>
                  </label>
                </div>
                <label className="text-sm font-medium text-slate-700">
                  Property Location
                  <input type="text" name="location" required value={formData.location} onChange={handleInputChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 outline-none ring-0" />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Project Description
                  <textarea name="message" required rows={4} value={formData.message} onChange={handleInputChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-canvas px-4 py-3 outline-none ring-0" />
                </label>
                <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <Camera className="h-4 w-4 text-gold" />
                  Upload Photos (optional)
                  <input type="file" className="ml-auto text-sm text-slate-500" />
                </label>
                <div>
                  <p className="text-sm font-medium text-slate-700">Preferred Contact Method</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                      <label key={method} className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">
                        <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={handleInputChange} />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-navy">Request My Free Quote</button>
                {quoteSubmitted && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                    Thank you. Your quotation request has been received and our team will be in touch shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-soft backdrop-blur lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Get Started</p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready to transform your property?</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">Contact Sky House Finishing today for a free quotation and let us bring your vision to life with professional workmanship and lasting quality.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setContactModalOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white">Contact Us <Phone className="h-4 w-4" /></button>
                  <a href="https://wa.me/27628567694" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">WhatsApp <MessageCircleMore className="h-4 w-4" /></a>
                  <a href="mailto:info@skyhousefinishing.co.za?subject=Quotation%20Request" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">Send an Email <Mail className="h-4 w-4" /></a>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <QrCode className="h-6 w-6 text-gold" />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Scan to Chat on WhatsApp</p>
                </div>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fwa.me%2F27628567694" alt="WhatsApp QR code" className="mt-5 h-56 w-56 rounded-2xl bg-white p-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#071a31] py-16 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy">SH</div>
              <div>
                <p className="text-lg font-semibold text-white">Sky House Finishing</p>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Precision in Every Finish</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-400">Premium finishing solutions for homes and businesses across Cape Town, delivered with professionalism, precision and lasting quality.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.filter((link) => link.active).map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.name} href={link.href} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-gold hover:text-gold">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Areas', 'Contact'].map((item) => (
                <li key={item}><Link href={`#${item.toLowerCase()}`} className="transition hover:text-gold">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Services</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {['Painting', 'Solar', 'Electrical', 'Tiling', 'Welding', 'Waterproofing'].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Quick Contact</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><a href="tel:+27628567694" className="transition hover:text-gold">062 856 7694</a></li>
              <li><a href="https://wa.me/27628567694" className="transition hover:text-gold">084 251 9551</a></li>
              <li><a href="mailto:info@skyhousefinishing.co.za?subject=Quotation%20Request" className="transition hover:text-gold">info@SkyHouseFinishing.co.za</a></li>
              <li className="mt-3 flex items-center gap-2"><Clock3 className="h-4 w-4 text-gold" /> Mon–Sat: 08:00–18:00</li>
              <li><a href="https://www.google.com/maps/dir/?api=1&destination=Milnerton%20Cape%20Town" target="_blank" rel="noreferrer" className="transition hover:text-gold">Google Maps Location</a></li>
            </ul>
            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <QrCode className="h-5 w-5 text-gold" />
                <p className="text-sm font-semibold text-white">Scan to Chat on WhatsApp</p>
              </div>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fwa.me%2F27628567694" alt="WhatsApp QR code" className="mt-4 h-36 w-36 rounded-2xl bg-white p-2" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Sky House Finishing. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-gold">Privacy Policy</a>
            <a href="#" className="transition hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {contactModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/80 px-4 py-8 backdrop-blur">
          <div className="w-full max-w-3xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Contact Sky House Finishing</p>
                <h3 className="mt-2 text-2xl font-semibold text-navy">Choose the option that suits you best.</h3>
              </div>
              <button type="button" onClick={() => setContactModalOpen(false)} className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button key={option.id} type="button" onClick={() => handleContactAction(option.id as 'whatsapp' | 'call' | 'email' | 'directions' | 'quote')} className="rounded-[24px] border border-slate-200 bg-canvas p-5 text-left transition hover:-translate-y-1 hover:border-gold">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-navy">{option.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{option.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {previewImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/85 p-4 backdrop-blur">
          <div className="w-full max-w-4xl rounded-[32px] bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between px-2 py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Project Preview</p>
              <button type="button" onClick={() => setPreviewImage(null)} className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600">Close</button>
            </div>
            <img src={previewImage} alt="Project preview" className="h-[70vh] w-full rounded-[24px] object-cover" />
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-[50]">
        <button type="button" onClick={() => setChatOpen((current) => !current)} className="flex items-center gap-3 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-soft transition hover:bg-white">
          <MessageCircleMore className="h-5 w-5" /> WhatsApp
        </button>
        {chatOpen && (
          <div className="mt-3 w-80 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-navy">Welcome to Sky House Finishing.</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">How can we help you today?</p>
            <div className="mt-4 space-y-2">
              {whatsappServices.map((item) => (
                <button key={item.label} type="button" onClick={() => openWhatsApp(item.message)} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-gold hover:text-gold">
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-24 right-6 z-[40] flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-soft transition hover:bg-gold hover:text-navy">
        <ChevronUp className="h-5 w-5" />
      </button>
    </main>
  );
}
