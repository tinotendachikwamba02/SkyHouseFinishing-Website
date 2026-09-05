'use client';

import { useEffect, useState } from 'react';

const slides = [
  { src: '/projects/painting/WhatsApp Image 2026-09-01 at 16.01.12.jpeg', alt: 'Interior painting project' },
  { src: '/projects/tiling/WhatsApp Image 2026-09-01 at 16.05.33.jpeg', alt: 'Tiling project' },
  { src: '/projects/solar/WhatsApp Image 2026-09-01 at 16.11.27.jpeg', alt: 'Solar installation project' },
  { src: '/projects/waterproofing/WhatsApp Image 2026-09-01 at 16.27.07.jpeg', alt: 'Roof protection project' },
];

export function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-navy">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={index === activeSlide ? slide.alt : ''}
          aria-hidden={index !== activeSlide}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-[#0A1C4F]/85" />
    </div>
  );
}
