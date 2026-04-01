import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import CTABanner from '../components/home/CTABanner';
import projectsData from '../../data/projects.json';
import type { Project } from '@/types';

export default function HomePage() {
  const projects = projectsData.projects as Project[];
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects projects={projects} />
      <WhyChooseUs />
      <TestimonialsCarousel projects={projects} />
      <CTABanner />
    </>
  );
}