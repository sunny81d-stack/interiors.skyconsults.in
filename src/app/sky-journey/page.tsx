import type { Metadata } from 'next';
import SectionHeading from '../../components/ui/SectionHeading';
import TimelineStep from '../../components/journey/TimelineStep';
import Button from '../../components/ui/Button';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The 7-Step Sky Journey',
  description: 'Our transparent 7-step interior design process from discovery to 250-point quality handover.',
};

const steps = [
  { number: 1, title: 'Discovery & Audit', description: 'We visit your home, measure every room, understand your lifestyle, budget, and Vastu preferences. A detailed audit report is prepared within 24 hours.', duration: 'Day 1-2' },
  { number: 2, title: 'Conceptual Planning', description: 'Our design team creates floor plans, material mood boards, and spatial layouts. You choose from multiple concepts tailored to your taste and budget tier.', duration: 'Day 3-5' },
  { number: 3, title: '3D Visualization', description: 'Walk through your future home before a single nail is hammered. Photorealistic 3D renders of every room so you can approve, modify, and perfect the design.', duration: 'Day 5-7' },
  { number: 4, title: 'Material Curation', description: 'Select from HDHMR, acrylic, PU, Italian lacquer, and more. We source only from certified suppliers. MR Grade for dry areas, BWP Grade for wet areas — no compromises.', duration: 'Day 7-10' },
  { number: 5, title: 'German-Machine Production', description: 'Your modular units are manufactured at the Jaaji factory using CNC machines, edge-banding systems, and automated drilling for millimeter-perfect precision.', duration: 'Day 10-30' },
  { number: 6, title: 'Dust-Free Installation', description: 'Our trained installation crew arrives with HEPA dust collection systems. Every module is assembled on-site with zero mess, zero damage to your existing interiors.', duration: 'Day 30-40' },
  { number: 7, title: '250-Point Quality Handover', description: 'A comprehensive checklist covering alignment, finish, hardware function, drawer smooth-close, hinge tension, edge quality, and more. You sign off only when everything is perfect.', duration: 'Day 40-45' },
];

export default function SkyJourneyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Our Process"
          title="The 7-Step Sky Journey"
          subtitle="From first meeting to final handover, every step is transparent, trackable, and designed to deliver perfection."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-royal-500/50 via-royal-500/20 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <TimelineStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-20 text-center">
            <p className="font-body text-silver-400 mb-6">
              Begin your Sky Journey today
            </p>
            <Button href="/contact" size="lg">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}