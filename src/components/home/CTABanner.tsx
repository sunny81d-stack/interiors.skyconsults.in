'use client';

import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-800 via-royal-700 to-royal-800" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container-premium relative z-10 text-center">
        <AnimatedSection>
          <p className="font-accent text-xs tracking-[0.35em] uppercase text-royal-200 mb-4">
            Start Your Transformation
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Ready to Design Your
            <br />
            Dream Space?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-body text-lg text-royal-100 font-light max-w-xl mx-auto mb-10">
            Get a free consultation and cost estimate. Our team will visit your
            home, understand your vision, and deliver a 3D visualization within
            48 hours.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/cost-calculator" variant="secondary" size="lg">
              Free Cost Estimate
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href="tel:+919008827003"
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              <Phone className="w-4 h-4" />
              Call Now: +91 9008827003
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}