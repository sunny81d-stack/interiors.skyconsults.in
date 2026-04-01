'use client';

import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import { Factory, Shield, Compass, Cpu, Award, Banknote } from 'lucide-react';

const reasons = [
  { icon: Factory, title: 'Jaaji Factory Direct', description: 'Eliminate middlemen. Direct pricing from Jaaji Modular factory in Bengaluru.' },
  { icon: Cpu, title: 'German-Machine Precision', description: 'CNC-cut, edge-banded, and precision-drilled components for flawless fit.' },
  { icon: Compass, title: '100% Vastu Compliant', description: 'Every design follows Vastu Shastra principles for energy, prosperity, and peace.' },
  { icon: Shield, title: '10-Year Warranty', description: 'Industry-leading warranty on all modular products covering material and hardware.' },
  { icon: Award, title: '250-Point QC Handover', description: 'Meticulous quality checks before handover ensure zero defects.' },
  { icon: Banknote, title: 'Transparent Pricing', description: 'No hidden costs. Itemized quotes with GST breakdown via our online calculator.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-silver-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="container-premium relative z-10">
        <SectionHeading
          label="The Sky Advantage"
          title="Why Sky Consults"
          subtitle="Six pillars of excellence that set us apart in North Bengaluru's interior landscape."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-royal-500/10 border border-royal-500/20 flex items-center justify-center group-hover:bg-royal-500/20 transition-all duration-500">
                  <r.icon className="w-6 h-6 text-royal-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-2">{r.title}</h3>
                  <p className="font-body text-sm text-silver-400 leading-relaxed">{r.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}