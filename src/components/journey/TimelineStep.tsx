'use client';

import AnimatedSection from '../ui/AnimatedSection';

interface Props {
  step: {
    number: number;
    title: string;
    description: string;
    duration: string;
  };
  index: number;
}

export default function TimelineStep({ step, index }: Props) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="relative pl-16 md:pl-20">
        <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-royal-500/10 border-2 border-royal-500/40 flex items-center justify-center z-10">
          <span className="font-accent text-sm text-royal-400 font-bold">
            {step.number}
          </span>
        </div>
        <div className="glass-card p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <h3 className="font-display text-xl text-white">{step.title}</h3>
            <span className="text-xs text-silver-500 font-body bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
              {step.duration}
            </span>
          </div>
          <p className="font-body text-sm text-silver-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}