import type { Metadata } from 'next';
import SectionHeading from '../../components/ui/SectionHeading';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { BedDouble, ArrowUpFromLine, Maximize, Lightbulb, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Modern Space Planning',
  description: 'Smart space planning with Murphy beds, vertical storage, mirrors, and LED lighting for compact North Bengaluru homes.',
};

const steps = [
  {
    icon: BedDouble,
    title: 'Multi-functional Layouts',
    subtitle: 'Murphy Beds & Convertible Furniture',
    description: 'Transform your bedroom into a living room in seconds. Our Murphy bed systems with integrated shelving, fold-down desks, and sofa-bed combos are precision-engineered by Jaaji Modular for daily use.',
    features: ['Wall-mounted Murphy beds with gas-lift mechanism', 'Fold-down dining tables for compact kitchens', 'Sofa-cum-bed convertible systems', 'Hidden storage under seating platforms'],
  },
  {
    icon: ArrowUpFromLine,
    title: 'Vertical Real Estate',
    subtitle: 'Floor-to-Ceiling Modular Storage',
    description: 'Stop wasting vertical space. Our floor-to-ceiling modular wardrobes and shelving systems maximize every inch from floor to ceiling with HDHMR cores and soft-close hardware.',
    features: ['Loft storage above wardrobes & doors', 'Full-height kitchen tall units', 'Vertical shoe racks & utility towers', 'Overhead storage in living rooms'],
  },
  {
    icon: Maximize,
    title: 'Visual Expansion',
    subtitle: 'Mirrors & Floating Logic',
    description: 'Make your 1000 sq ft feel like 1500 sq ft. Strategic mirror placement, floating shelves with hidden brackets, and open-plan design principles create an illusion of expansive space.',
    features: ['Full-wall mirror panels in entryways', 'Floating TV units & vanities', 'Glass partitions instead of walls', 'Light-colored laminate finishes to reflect light'],
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    subtitle: 'LED Tracks & Ambient Systems',
    description: 'Lighting design that enhances space perception. Recessed LED tracks, under-cabinet strips, and cove lighting create layers of illumination that make rooms feel larger and more luxurious.',
    features: ['Recessed LED track lighting in ceilings', 'Under-cabinet kitchen lighting strips', 'Wardrobe interior LED with door sensors', 'Cove lighting for false ceiling accent'],
  },
];

export default function SpacePlanningPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Compact Living Solutions"
          title="Modern Space Planning"
          subtitle="Smart strategies to maximize every square foot of your North Bengaluru home without compromising on aesthetics or functionality."
        />

        <div className="space-y-16">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-royal-500/10 border border-royal-500/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-royal-400" />
                    </div>
                    <div>
                      <p className="font-accent text-xs tracking-[0.2em] uppercase text-royal-400">
                        Step {i + 1}
                      </p>
                      <h3 className="font-display text-2xl text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-body text-sm text-royal-300 mb-3">
                    {step.subtitle}
                  </p>
                  <p className="font-body text-silver-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-silver-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-royal-400 mt-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card padding="lg" className="aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <step.icon className="w-16 h-16 text-royal-500/20 mx-auto mb-4" />
                      <p className="font-accent text-xs tracking-[0.2em] text-silver-600 uppercase">
                        {step.title}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20 text-center">
            <p className="font-body text-silver-400 mb-6">
              Ready to maximize your space?
            </p>
            <Button href="/cost-calculator" size="lg">
              Get a Free Space Plan <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}