'use client';

import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import type { Project } from '@/types';

interface Props {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: Props) {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-silver-950 via-silver-900/30 to-silver-950" />
      <div className="container-premium relative z-10">
        <SectionHeading
          label="Our Showcase"
          title="Featured Projects"
          subtitle="Explore our latest transformations across North Bengaluru."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.15}>
              <Link href={`/showcase/${project.id}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-royal-500/30 transition-all duration-500">
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-silver-800 to-silver-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-silver-950/80 to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-accent text-xs tracking-[0.3em] text-silver-500 uppercase">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-royal-500/0 group-hover:bg-royal-500/10 transition-colors duration-500 z-20" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-silver-500 font-body">
                        <MapPin className="w-3 h-3" /> {project.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-silver-500 font-body">
                        <Calendar className="w-3 h-3" /> {project.year}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-2 group-hover:text-royal-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-silver-400 line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(project.testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-royal-400 fill-royal-400" />
                      ))}
                      <span className="text-xs text-silver-500 ml-2">
                        — {project.testimonial.clientName}
                      </span>
                    </div>
                    <div className="flex items-center text-royal-400 text-sm font-body gap-2 group-hover:gap-3 transition-all">
                      View Project <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/showcase" variant="outline">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}