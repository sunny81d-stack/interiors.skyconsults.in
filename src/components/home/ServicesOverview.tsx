'use client';

import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { ChefHat, BedDouble, Sofa, Bath, Landmark, Building2 } from 'lucide-react';

const services = [
  { icon: ChefHat, title: 'Modular Kitchen', description: 'German-machine precision with BWP grade for wet areas. Acrylic, PU & lacquer finishes.' },
  { icon: BedDouble, title: 'Bedroom & Wardrobe', description: 'Walk-in closets, sliding wardrobes, and Murphy beds with HDHMR & soft-close fittings.' },
  { icon: Sofa, title: 'Living Room Design', description: 'TV units, floating shelves, accent walls, and modular entertainment centers.' },
  { icon: Landmark, title: 'Pooja Room', description: 'Vastu-compliant Ishanya zone designs with brass, teak, and LED-lit mandirs.' },
  { icon: Bath, title: 'Bathroom Vanity', description: 'Waterproof BWP-grade vanities with stone tops and premium fixtures.' },
  { icon: Building2, title: 'Office Interior', description: 'Productive workspaces with ergonomic modular furniture and cable management.' },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-silver-950 relative">
      <div className="container-premium">
        <SectionHeading
          label="What We Create"
          title="Design Every Corner"
          subtitle="From kitchen to pooja room, every space is crafted with precision engineering and spiritual alignment."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <Card className="group h-full">
                <div className="w-12 h-12 rounded-xl bg-royal-500/10 border border-royal-500/20 flex items-center justify-center mb-5 group-hover:bg-royal-500/20 group-hover:scale-110 transition-all duration-500">
                  <s.icon className="w-6 h-6 text-royal-400" />
                </div>
                <h3 className="font-display text-xl text-white mb-3">{s.title}</h3>
                <p className="font-body text-sm text-silver-400 leading-relaxed">{s.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}