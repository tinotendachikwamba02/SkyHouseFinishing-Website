'use client';

import Link from 'next/link';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  ArrowRight,
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
  Menu,
  MessageCircle,
  MessageCircleMore,
  PaintbrushVertical,
  Phone,
  QrCode,
  Send,
  ShieldCheck,
  SunMedium,
  Wrench,
  X,
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
    beforeImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    challenge: 'A high-end oceanfront estate in Milnerton suffering from severe salt-spray damage, hairline cracks, and structural paint peeling due to Cape Town\'s harsh coastal climate.',
    process: [
      'Substrate Preparation: High-pressure structural washing followed by manual scraping to remove all failing paint layers.',
      'Sealing: Patched all micro-fissures using premium, flexible fiber-elastomeric joint sealants to ensure a 100% waterproof barrier.',
      'Application: Double-coat application of luxury, weather-resistant paint using premium marine-grade coatings designed for high UV and salty winds.',
    ],
    result: 'An immaculate, ultra-durable, satin-matte finish backed by our robust structural and aesthetic guarantee.',
  },
  {
    title: 'Commercial Exterior Upgrade',
    location: 'Woodbridge Island',
    servicesProvided: 'Waterproofing • Electrical',
    beforeImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    challenge: 'A high-traffic commercial building requiring a complete modern visual overhaul and heavy-duty waterproofing without disrupting daily business operations.',
    process: [
      'Strategic Scheduling: Phased execution plan scheduled around business off-peak hours to minimise noise and visual disruption.',
      'Waterproofing: Applied state-of-the-art multi-layer elastomeric membrane waterproofing to flat roofing, parapets, and critical flashing junctions.',
      'Precision Finishing: Clean contrast paint lines applied with industrial-grade sprayers for a flawless, uniform commercial-grade aesthetic.',
    ],
    result: 'A striking, weather-tight modern exterior that dramatically elevates the property\'s commercial valuation and street-side appeal.',
  },
  {
    title: 'Contemporary Tiling Installation',
    location: 'Blouberg',
    servicesProvided: 'Tiling • Finishing',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
    challenge: 'A refined interior refresh requiring a clean, seamless finish with premium tile alignment and premium detailing.',
    process: [
      'Surface Alignment: Precision layout planning to create a balanced, elegant visual flow.',
      'Installation: Expert tile placement with meticulous grout composition and minimal visual interruption.',
      'Finishing: Crisp edge detailing and premium sealing to preserve the luxury finish over time.',
    ],
    result: 'A polished, high-end surface that elevates the room with timeless architectural precision.',
  },
  {
    title: 'Solar-Ready Roofline',
    location: 'Table View',
    servicesProvided: 'Solar • Electrical',
    beforeImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80',
    challenge: 'A roofline upgrade requirement pairing structural readiness for solar with clean, durable external finishing.',
    process: [
      'Planning: Detailed technical sequencing to align mounting readiness with premium finish quality.',
      'Integration: Coordinated electrical and surface-prep works to keep the roofline structurally sound and sleek.',
      'Completion: A refined, weather-ready finish that supports long-term performance and visual consistency.',
    ],
    result: 'A practical, premium roofline upgrade that looks immaculate and performs reliably for years.',
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

const sectionContainerClass = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);
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

  const openProjectModal = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setActiveGalleryImage(project.afterImage);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className={`${sectionContainerClass} flex items-center justify-between py-4`}>
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">SH</div>
            <div>
              <p className="text-lg font-semibold text-navy">Sky House</p>
              <p className="text-xs uppercase tracking-[0.35em] text-muted">Finishing</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <Link href="#about" className="transition-all duration-300 hover:text-amber-500">About</Link>
            <Link href="#services" className="transition-all duration-300 hover:text-amber-500">Services</Link>
            <Link href="#projects" className="transition-all duration-300 hover:text-amber-500">Projects</Link>
            <Link href="#areas" className="transition-all duration-300 hover:text-amber-500">Areas</Link>
            <Link href="#contact" className="transition-all duration-300 hover:text-amber-500">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setContactModalOpen(true)} className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white md:inline-flex">Contact Us</button>
            <button type="button" onClick={() => setIsOpen((current) => !current)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 hover:border-amber-500 hover:text-amber-600 md:hidden" aria-label="Toggle navigation">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t border-slate-200 bg-white/95 transition-all duration-300`}>
          <div className={`${sectionContainerClass} flex flex-col gap-4 py-5`}>
            {['About', 'Services', 'Projects', 'Areas', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="rounded-2xl px-3 py-3 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-white hover:text-amber-600">
                {item}
              </Link>
            ))}
            <a href="#quote-form" onClick={() => setIsOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-amber-600">Get Free Quote</a>
          </div>
        </div>
      </header>

      <section id="home" className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1800&q=80"
            alt="Modern luxury home finished to a premium standard"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-transparent" />
        </div>
        <div className={`relative z-20 grid min-h-[82vh] items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32 ${sectionContainerClass}`}>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">CRAFTSMANSHIP WITHOUT COMPROMISE</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
              Premium <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">Finishing</span>
              <br className="hidden md:inline" />
              <span className="block sm:inline">for Distinguished Properties</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Painting, solar installations, electrical systems, tiling, welding and waterproofing delivered with precision, professionalism and exceptional workmanship across Cape Town.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <a href="#quote-form" className="inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-amber-600 hover:shadow-xl">Get Free Quote</a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">View Our Projects</a>
            </div>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              {['✓ Fully Insured', '✓ Licensed Contractor', '✓ Cape Town Based'].map((badge) => (
                <div key={badge} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm">
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur-xl sm:p-6">
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

      <section id="about" className={`${sectionContainerClass} py-24`}>
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
        <div className={sectionContainerClass}>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Services</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Crafted solutions for every finishing need.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Every project is delivered with the same level of care, precision and professional execution.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-amber-600">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-amber-500 transition group-hover:bg-amber-600 group-hover:text-white">
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

      <section className={`${sectionContainerClass} py-24`}>
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Why Choose Sky House Finishing</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">A premium standard built on trust and precision.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-canvas p-6 transition hover:-translate-y-1 hover:border-amber-600">
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
        <div className={sectionContainerClass}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Featured Projects</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Case studies crafted for prestige, longevity, and impact.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Each project is delivered with exacting preparation, premium materials, and a finish quality designed to impress the most discerning clients.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">Request a Consultation <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-12 grid gap-6 grid-cols-1 xl:grid-cols-2">
            {projects.map((project) => {
              return (
                <div key={project.title} className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-3 shadow-soft backdrop-blur-sm sm:p-4">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={project.afterImage}
                      alt={`${project.title} finished detail`}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                    />
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{project.location}</p>
                    </div>
                    <button type="button" onClick={() => openProjectModal(project)} className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-amber-600">View</button>
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

      <section id="areas" className={`${sectionContainerClass} grid gap-10 py-24 lg:grid-cols-[0.95fr_1.05fr]`}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Service Areas</p>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Serving homes and businesses across Cape Town.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">From Milnerton to greater Cape Town, we are ready to deliver projects at scale with the same professional standards.</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {areas.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all hover:border-amber-600 hover:bg-white hover:text-amber-600">
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Milnerton%20Cape%20Town" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-amber-600">Get Directions</a>
            <button type="button" onClick={() => setContactModalOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">Contact Us</button>
          </div>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-soft sm:p-4 h-full flex flex-col">
          <div className="overflow-hidden rounded-[24px] h-full flex flex-col">
            <iframe
              title="Sky House Finishing Location"
              src="https://www.google.com/maps?q=Milnerton%20Cape%20Town&z=12&output=embed"
              className="w-full h-full min-h-[350px] md:min-h-[450px] rounded-[24px] border-0"
              loading="lazy"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>

      <section className="bg-canvas py-24">
        <div className={sectionContainerClass}>
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Google Reviews</p>
            <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Google Reviews</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">We are currently building our online review profile. As we complete more projects, genuine customer reviews from Google will appear here. We believe in earning every review through quality workmanship and exceptional service.</p>
            <a href="#" className="mt-8 inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-amber-600">View Our Google Reviews</a>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-white py-24 pb-32">
        <div className={sectionContainerClass}>
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
            <div className="w-full max-w-lg mx-auto px-4 sm:px-6 md:px-8 py-8 bg-white rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="mt-2 w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </label>
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                    <input type="tel" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange} className="mt-2 w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="mt-2 w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </label>
                  <label className="text-sm font-medium text-slate-700">
                    Service Required
                    <select name="service" value={formData.service} onChange={handleInputChange} className="mt-2 w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                      {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                    </select>
                  </label>
                </div>
                <label className="text-sm font-medium text-slate-700">
                  Property Location
                  <input type="text" name="location" required value={formData.location} onChange={handleInputChange} className="mt-2 w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Project Description
                  <textarea name="message" required rows={4} value={formData.message} onChange={handleInputChange} className="mt-2 w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 sm:flex-row sm:items-center">
                  <span className="flex items-center gap-2"><Camera className="h-4 w-4 text-gold" />Upload Photos (optional)</span>
                  <input type="file" className="w-full text-sm text-slate-500 sm:ml-auto" />
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
                <button type="submit" className="inline-flex items-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-amber-600">Request My Free Quote</button>
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
        <div className={sectionContainerClass}>
          <div className="rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-soft backdrop-blur lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Get Started</p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready to transform your property?</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">Contact Sky House Finishing today for a free quotation and let us bring your vision to life with professional workmanship and lasting quality.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setContactModalOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-amber-600">Contact Us <Phone className="h-4 w-4" /></button>
                  <a href="https://wa.me/27628567694" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">WhatsApp <MessageCircleMore className="h-4 w-4" /></a>
                  <a href="mailto:info@skyhousefinishing.co.za?subject=Quotation%20Request" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">Send an Email <Mail className="h-4 w-4" /></a>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur sm:p-6">
                <div className="flex items-center gap-3">
                  <QrCode className="h-6 w-6 text-gold" />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Scan to Chat on WhatsApp</p>
                </div>
                <div className="mt-5 flex items-center justify-center p-2">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fwa.me%2F27628567694" alt="WhatsApp QR code" className="w-full max-w-[200px] rounded-2xl bg-white p-3 object-contain" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#071a31] py-16 text-slate-300">
        <div className={`${sectionContainerClass} grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.1fr]`}>
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
                  <a key={link.name} href={link.href} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-amber-500 hover:text-amber-500">
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
                <li key={item}><Link href={`#${item.toLowerCase()}`} className="transition-all duration-300 hover:text-amber-500">{item}</Link></li>
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
              <li><a href="tel:+27628567694" className="transition-all duration-300 hover:text-amber-500">062 856 7694</a></li>
              <li><a href="https://wa.me/27628567694" className="transition-all duration-300 hover:text-amber-500">084 251 9551</a></li>
              <li><a href="mailto:info@skyhousefinishing.co.za?subject=Quotation%20Request" className="transition-all duration-300 hover:text-amber-500">info@SkyHouseFinishing.co.za</a></li>
              <li className="mt-3 flex items-center gap-2"><Clock3 className="h-4 w-4 text-gold" /> Mon–Sat: 08:00–18:00</li>
              <li><a href="https://www.google.com/maps/dir/?api=1&destination=Milnerton%20Cape%20Town" target="_blank" rel="noreferrer" className="transition-all duration-300 hover:text-amber-500">Google Maps Location</a></li>
            </ul>
            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <QrCode className="h-5 w-5 text-gold" />
                <p className="text-sm font-semibold text-white">Scan to Chat on WhatsApp</p>
              </div>
              <div className="mt-4 flex items-center justify-center p-2">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fwa.me%2F27628567694" alt="WhatsApp QR code" className="w-full max-w-[180px] rounded-2xl bg-white p-2 object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className={`${sectionContainerClass} mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between`}>
          <p>© 2026 Sky House Finishing. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-all duration-300 hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="transition-all duration-300 hover:text-amber-500">Terms & Conditions</a>
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
              <button type="button" onClick={() => setContactModalOpen(false)} className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">Close</button>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button key={option.id} type="button" onClick={() => handleContactAction(option.id as 'whatsapp' | 'call' | 'email' | 'directions' | 'quote')} className="rounded-[24px] border border-slate-200 bg-canvas p-5 text-left transition hover:-translate-y-1 hover:border-amber-600">
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

      {selectedProject && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur sm:p-4">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl">
            <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">
              <X className="h-5 w-5" />
            </button>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-4 sm:p-6">
                <div className="overflow-hidden rounded-[24px] bg-slate-900">
                  <img
                    src={activeGalleryImage ?? selectedProject.afterImage}
                    alt={`${selectedProject.title} concept showcase`}
                    className="h-[320px] w-full object-cover sm:h-[420px]"
                  />
                </div>
                <span className="mt-3 block text-[11px] italic tracking-wide text-slate-400">
                  Design Concept Showcase — Visualized inspiration representing our benchmark finish and execution standards.
                </span>
                <div className="mt-4 flex gap-3">
                  {[selectedProject.beforeImage, selectedProject.afterImage].filter((image, index, images) => images.indexOf(image) === index).map((image) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveGalleryImage(image)}
                      className={`h-16 w-16 overflow-hidden rounded-lg border transition hover:opacity-85 ${activeGalleryImage === image ? 'border-amber-500' : 'border-slate-200'}`}
                    >
                      <img src={image} alt="Project concept thumbnail" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200 p-4 sm:p-6 lg:border-l lg:border-t-0">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Case Study</p>
                <h3 className="mt-3 text-2xl font-semibold text-navy">{selectedProject.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">{selectedProject.location}</p>
                <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Challenge</p>
                    <p className="mt-2">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Our Process</p>
                    <ul className="mt-2 space-y-2">
                      {selectedProject.process.map((step) => (
                        <li key={step} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">The Result</p>
                    <p className="mt-2 font-medium text-slate-700">{selectedProject.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-5 right-5 z-[50] md:bottom-8 md:right-8">
        <button type="button" onClick={() => setChatOpen((current) => !current)} className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-600 active:scale-95">
          <MessageCircleMore className="h-5 w-5" /> WhatsApp
        </button>
        {chatOpen && (
          <div className="mt-3 w-80 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-navy">Welcome to Sky House Finishing.</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">How can we help you today?</p>
            <div className="mt-4 space-y-2">
              {whatsappServices.map((item) => (
                <button key={item.label} type="button" onClick={() => openWhatsApp(item.message)} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white">
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-24 right-6 z-[40] flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-soft transition-all duration-300 hover:bg-amber-600 hover:text-white">
        <ChevronUp className="h-5 w-5" />
      </button>
    </main>
  );
}
