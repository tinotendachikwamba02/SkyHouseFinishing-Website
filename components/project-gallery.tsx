'use client';

import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export const categories = [
  { slug: 'painting', title: 'Interior & Exterior Painting', files: ['WhatsApp Image 2026-09-01 at 16.01.10.jpeg', 'WhatsApp Image 2026-09-01 at 16.01.11.jpeg', 'WhatsApp Image 2026-09-01 at 16.01.11 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.01.11 (2).jpeg', 'WhatsApp Image 2026-09-01 at 16.01.12.jpeg', 'WhatsApp Image 2026-09-01 at 16.01.12 (1).jpeg'] },
  { slug: 'solar', title: 'Solar System Installations', files: ['WhatsApp Image 2026-09-01 at 16.11.25.jpeg', 'WhatsApp Image 2026-09-01 at 16.11.25 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.11.26.jpeg', 'WhatsApp Image 2026-09-01 at 16.11.26 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.11.27.jpeg', 'WhatsApp Image 2026-09-01 at 16.11.27 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.11.27 (2).jpeg', 'WhatsApp Image 2026-09-01 at 16.11.28.jpeg'] },
  { slug: 'electrical', title: 'Electrical Installations & Maintenance', files: ['WhatsApp Image 2026-09-01 at 16.18.07.jpeg', 'WhatsApp Image 2026-09-01 at 16.18.09.jpeg', 'WhatsApp Image 2026-09-01 at 16.18.11.jpeg', 'WhatsApp Image 2026-09-01 at 16.18.11 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.18.12.jpeg', 'WhatsApp Image 2026-09-01 at 16.18.12 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.18.12 (2).jpeg', 'WhatsApp Image 2026-09-01 at 16.18.12 (3).jpeg', 'WhatsApp Image 2026-09-01 at 16.18.13.jpeg'] },
  { slug: 'tiling', title: 'Professional Tiling & Flooring', files: ['WhatsApp Image 2026-09-01 at 16.05.32 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.05.32 (2).jpeg', 'WhatsApp Image 2026-09-01 at 16.05.33.jpeg', 'WhatsApp Image 2026-09-01 at 16.05.33 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.05.33 (2).jpeg', 'WhatsApp Image 2026-09-01 at 16.05.34.jpeg', 'WhatsApp Image 2026-09-01 at 16.05.34 (1).jpeg'] },
  { slug: 'waterproofing', title: 'Comprehensive Waterproofing & Roof Protection', files: ['WhatsApp Image 2026-09-01 at 16.24.31.jpeg', 'WhatsApp Image 2026-09-01 at 16.24.31 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.24.31 (2).jpeg', 'WhatsApp Image 2026-09-01 at 16.27.07.jpeg', 'WhatsApp Image 2026-09-01 at 16.27.07 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.27.07 (2).jpeg'] },
  { slug: 'welding', title: 'Custom Welding & Fabrication', files: ['WhatsApp Image 2026-09-01 at 16.31.19.jpeg', 'WhatsApp Image 2026-09-01 at 16.31.19 (1).jpeg', 'WhatsApp Image 2026-09-01 at 16.31.19 (2).jpeg'] },
] as const;

const imagePath = (slug: string, file: string) => encodeURI(`/projects/${slug}/${file}`);

export function ProjectGallery() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get('category');
  const visibleCategories = requestedCategory && requestedCategory !== 'all'
    ? categories.filter((category) => category.slug === requestedCategory)
    : categories;
  const [selected, setSelected] = useState<{ categoryIndex: number; imageIndex: number } | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const category = selected ? categories[selected.categoryIndex] : null;

  const navigate = (change: number) => setSelected((current) => {
    if (!current) return current;
    const length = categories[current.categoryIndex].files.length;
    return { ...current, imageIndex: (current.imageIndex + change + length) % length };
  });

  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') navigate(-1);
      if (event.key === 'ArrowRight') navigate(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {[{ slug: 'all', title: 'All work' }, ...categories].map((filter) => (
          <a key={filter.slug} href={filter.slug === 'all' ? '/projects' : `/projects?category=${filter.slug}`} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${requestedCategory === filter.slug || (!requestedCategory && filter.slug === 'all') ? 'border-sky bg-sky text-white' : 'border-sky/20 text-navy hover:border-sky hover:text-sky'}`}>
            {filter.title}
          </a>
        ))}
      </div>
      <div className="space-y-16">
        {visibleCategories.map((projectCategory) => {
          const categoryIndex = categories.findIndex((item) => item.slug === projectCategory.slug);
          return (
            <section key={projectCategory.slug} id={projectCategory.slug} className="scroll-mt-24">
              <div className="mb-6 border-b border-sky/20 pb-4"><h2 className="text-2xl font-bold text-navy sm:text-3xl">{projectCategory.title}</h2></div>
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {projectCategory.files.map((file, imageIndex) => <button key={file} type="button" onClick={() => setSelected({ categoryIndex, imageIndex })} className="group relative mb-4 block w-full overflow-hidden rounded-lg bg-canvas text-left shadow-soft focus:outline-none focus:ring-4 focus:ring-sky/40"><img src={imagePath(projectCategory.slug, file)} alt={`${projectCategory.title} project ${imageIndex + 1}`} className="h-auto w-full transition duration-300 group-hover:scale-[1.02]" /></button>)}
              </div>
            </section>
          );
        })}
      </div>
      {selected && category && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/95 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={`${category.title} image viewer`} onClick={() => setSelected(null)}><div className="relative flex h-full w-full max-w-6xl items-center justify-center" onClick={(event) => event.stopPropagation()} onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { const difference = event.changedTouches[0].clientX - (touchStart ?? event.changedTouches[0].clientX); if (Math.abs(difference) > 50) navigate(difference > 0 ? -1 : 1); setTouchStart(null); }}><img src={imagePath(category.slug, category.files[selected.imageIndex])} alt={`${category.title} project ${selected.imageIndex + 1}`} className="h-auto max-h-[85vh] w-auto max-w-full rounded-lg object-contain" /><button type="button" aria-label="Close image viewer" onClick={() => setSelected(null)} className="absolute right-0 top-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-navy shadow-lg"><X /></button><button type="button" aria-label="Previous image" onClick={() => navigate(-1)} className="absolute left-0 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-white text-navy shadow-lg"><ChevronLeft /></button><button type="button" aria-label="Next image" onClick={() => navigate(1)} className="absolute right-0 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-white text-navy shadow-lg"><ChevronRight /></button></div></div>}
    </>
  );
}
