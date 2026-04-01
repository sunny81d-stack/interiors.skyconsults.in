import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projectsData from '../../../../data/projects.json';
import type { Project } from '@/types';
import ProjectGallery from '../../../components/showcase/ProjectGallery';
import AnimatedSection from '../../../components/ui/AnimatedSection';
import Button from '../../../components/ui/Button';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Ruler,
  Star,
  Tag,
} from 'lucide-react';

// Tell Next.js which [id] values exist at build time
export function generateStaticParams() {
  return (projectsData.projects as Project[]).map((p) => ({
    id: p.id,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = (projectsData.projects as Project[]).find(
    (p) => p.id === id
  );
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.description,
  };
}

// The page component
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = (projectsData.projects as Project[]).find(
    (p) => p.id === id
  );

  if (!project) notFound();

  const metaItems = [
    { icon: MapPin, text: project.location },
    { icon: Calendar, text: String(project.year) },
    { icon: Clock, text: project.duration },
    { icon: Ruler, text: project.area },
    { icon: Tag, text: project.budget },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        {/* Back Link */}
        <AnimatedSection>
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-silver-400 hover:text-royal-400 font-body text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Showcase
          </Link>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection delay={0.1}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-gradient mb-4">
            {project.title}
          </h1>
        </AnimatedSection>

        {/* Meta Row */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {metaItems.map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-sm text-silver-400 font-body bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
              >
                <m.icon className="w-3.5 h-3.5" /> {m.text}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={0.3}>
          <p className="font-body text-lg text-silver-300 leading-relaxed max-w-3xl mb-12">
            {project.description}
          </p>
        </AnimatedSection>

        {/* Gallery */}
        <AnimatedSection delay={0.4}>
          <ProjectGallery media={project.media} title={project.title} />
        </AnimatedSection>

        {/* Highlights */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16">
            <h2 className="font-accent text-xs tracking-[0.3em] uppercase text-royal-400 mb-6">
              Project Highlights
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="px-4 py-2 bg-royal-500/10 border border-royal-500/20 rounded-full text-sm text-royal-300 font-body"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial */}
        {project.testimonial.quote && (
          <AnimatedSection delay={0.6}>
            <div className="mt-16 glass-card p-8 md:p-10 max-w-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(project.testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-royal-400 fill-royal-400"
                  />
                ))}
              </div>
              <p className="font-display text-xl text-silver-200 italic leading-relaxed mb-4">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <p className="font-body text-sm text-silver-400">
                — {project.testimonial.clientName}
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* CTA */}
        <AnimatedSection delay={0.7}>
          <div className="mt-16 flex gap-4">
            <Button href="/cost-calculator">Get Similar Estimate</Button>
            <Button href="/contact" variant="outline">
              Discuss Your Project
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}