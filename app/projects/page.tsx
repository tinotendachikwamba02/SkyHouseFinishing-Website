import { Suspense } from 'react';
import { ProjectGallery } from '../../components/project-gallery';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export default function ProjectsPage() {
  return <main className="min-h-screen bg-white text-ink"><SiteHeader /><section className="bg-navy py-16 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-sky">View our work</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Real project work from the Sky House Finishing team.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-canvas">Browse completed and in-progress work by trade. Select any image for a larger view.</p></div></section><section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><Suspense fallback={<div className="min-h-40 text-sm font-semibold text-navy">Loading project gallery...</div>}><ProjectGallery /></Suspense></section><SiteFooter /></main>;
}