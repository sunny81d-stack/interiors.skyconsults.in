import type { Metadata } from 'next';
import SectionHeading from '../../components/ui/SectionHeading';
import ProjectCard from '../../components/showcase/ProjectCard';
import ProjectFilter from '../../components/showcase/ProjectFilter';
import projectsData from '../../../data/projects.json';
import type { Project } from '@/types';

export const metadata: Metadata = {
  title: 'Showcase',
  description: 'Explore our completed interior design projects across North Bengaluru.',
};

export default function ShowcasePage() {
  const projects = projectsData.projects as Project[];

  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Our Work"
          title="Project Showcase"
          subtitle="Browse through our completed transformations. Each project tells a story of precision, care, and client delight."
        />
        <ProjectFilter projects={projects} />
      </div>
    </div>
  );
}