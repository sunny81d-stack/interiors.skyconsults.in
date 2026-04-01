'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import type { Project } from '@/types';

interface Props {
  projects: Project[];
}

export default function TestimonialsCarousel({ projects }: Props) {
  const testimonials = projects
    .filter((p) => p.testimonial.quote)
    .map((p) => ({
      ...p.testimonial,
      project: p.title,
      location: p.location,
    }));

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-silver-950 via-silver-900/20 to-silver-950" />
      <div className="container-premium relative z-10">
        <SectionHeading label="Client Stories" title="What They Say" />

        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 text-center relative">
              <Quote className="w-10 h-10 text-royal-500/20 mx-auto mb-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-display text-xl md:text-2xl text-silver-200 font-light leading-relaxed mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-royal-400 fill-royal-400"
                      />
                    ))}
                  </div>

                  <p className="font-body text-white font-medium">
                    {t.clientName}
                  </p>
                  <p className="font-body text-sm text-silver-500 mt-1">
                    {t.project} — {t.location}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-royal-500/30 hover:bg-white/5 flex items-center justify-center transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-silver-400" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? 'bg-royal-500 w-6'
                          : 'bg-silver-600 hover:bg-silver-400'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-royal-500/30 hover:bg-white/5 flex items-center justify-center transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-silver-400" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}