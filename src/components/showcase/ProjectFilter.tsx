'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '@/types';

interface Props {
  projects: Project[];
}

const categories = ['All', 'Villa', 'Apartment', 'Penthouse', 'Studio', 'Duplex', 'Office'];

export default function ProjectFilter({ projects }: Props) {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
              active === cat
                ? 'bg-royal-500 text-white shadow-lg shadow-royal-500/20'
                : 'bg-white/5 text-silver-400 border border-white/10 hover:border-royal-500/30 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-silver-500 font-body">
            No projects found in this category yet.
          </p>
        </div>
      )}
    </>
  );
}