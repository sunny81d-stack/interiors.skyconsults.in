import Link from 'next/link';
import { MapPin, Calendar, ArrowRight, Star } from 'lucide-react';
import type { Project } from '@/types';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/showcase/${project.id}`} className="group block">
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-royal-500/30 transition-all duration-500">
        <div className="aspect-[4/3] bg-gradient-to-br from-silver-800 to-silver-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-silver-950/80 to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-accent text-xs tracking-[0.3em] text-silver-500 uppercase">
              {project.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-royal-500/0 group-hover:bg-royal-500/10 transition-colors duration-500 z-20" />
          <div className="absolute top-3 right-3 z-30 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-silver-300 font-body border border-white/10">
            {project.budget}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center gap-1 text-xs text-silver-500">
              <MapPin className="w-3 h-3" /> {project.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-silver-500">
              <Calendar className="w-3 h-3" /> {project.year}
            </span>
          </div>
          <h3 className="font-display text-lg text-white mb-2 group-hover:text-royal-300 transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-sm text-silver-400 line-clamp-2 mb-3">
            {project.description}
          </p>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(project.testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-royal-400 fill-royal-400" />
            ))}
          </div>
          <div className="flex items-center text-royal-400 text-sm gap-2 group-hover:gap-3 transition-all">
            View <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}