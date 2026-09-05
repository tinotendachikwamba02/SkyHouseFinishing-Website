import { Droplets, Hammer, PaintbrushVertical, SunMedium, Wrench, Zap } from 'lucide-react';

export type ServiceEntry = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  image: string;
  icon: typeof PaintbrushVertical;
};

export const services: ServiceEntry[] = [
  {
    slug: 'painting',
    navLabel: 'Interior & Exterior Painting',
    title: 'Interior & Exterior Painting',
    description:
      'Thorough surface prep, crack filling, priming, and application of weather-resistant Plascon/Dulux paints for lasting protection.',
    image: '/projects/painting/WhatsApp Image 2026-09-01 at 16.01.12.jpeg',
    icon: PaintbrushVertical,
  },
  {
    slug: 'solar',
    navLabel: 'Solar System Installations',
    title: 'Solar System Installations',
    description:
      'Certified solar panel mounting, inverter setup, power backup wiring, and reliable system commissioning for homes and estates.',
    image: '/projects/solar/WhatsApp Image 2026-09-01 at 16.11.27.jpeg',
    icon: SunMedium,
  },
  {
    slug: 'tiling',
    navLabel: 'Professional Tiling & Flooring',
    title: 'Professional Tiling & Flooring',
    description: 'Precision surface leveling, waterproof backing, and exact alignment for porcelain, ceramic, and natural stone tiles in bathrooms, kitchens, and high-traffic commercial spaces.',
    image: '/projects/tiling/WhatsApp Image 2026-09-01 at 16.05.33.jpeg',
    icon: Wrench,
  },
  {
    slug: 'electrical',
    navLabel: 'Electrical Installations & Maintenance',
    title: 'Electrical Installations & Maintenance',
    description: 'Power backup wiring, full electrical maintenance, fault finding, and installation work completed with estate COC support.',
    image: '/projects/electrical/WhatsApp Image 2026-09-01 at 16.18.12.jpeg',
    icon: Zap,
  },
  {
    slug: 'waterproofing',
    navLabel: 'Comprehensive Waterproofing & Roof Protection',
    title: 'Comprehensive Waterproofing & Roof Protection',
    description: 'High-durability membrane sealing, joint treatment, and protective roof coatings to prevent leaks and weather damage.',
    image: '/projects/waterproofing/WhatsApp Image 2026-09-01 at 16.27.07.jpeg',
    icon: Droplets,
  },
  {
    slug: 'welding',
    navLabel: 'Welding & Fabrication',
    title: 'Welding & Fabrication',
    description: 'Custom steel fabrication for driveway gates, perimeter grilles, handrails, and structural metal repairs.',
    image: '/projects/welding/WhatsApp Image 2026-09-01 at 16.31.19.jpeg',
    icon: Hammer,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
