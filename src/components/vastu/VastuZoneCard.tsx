'use client';

import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import { Compass } from 'lucide-react';

interface VastuZone {
  title: string;
  direction: string;
  description: string;
  materials: string[];
  color: string;
}

interface Props {
  zone: VastuZone;
  index: number;
}

export default function VastuZoneCard({ zone, index }: Props) {
  return (
    <AnimatedSection delay={index * 0.15}>
      <Card padding="lg" className="h-full relative overflow-hidden group">
        {/* Background gradient glow */}
        <div
          className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br ${zone.color} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 -z-0`}
        />

        <div className="relative z-10">
          {/* Direction Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-royal-500/10 border border-royal-500/20 flex items-center justify-center">
              <Compass className="w-4 h-4 text-royal-400" />
            </div>
            <span className="font-body text-xs tracking-wider uppercase text-royal-400 bg-royal-500/10 px-3 py-1 rounded-full">
              {zone.direction}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl text-white mb-3">
            {zone.title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-silver-400 leading-relaxed mb-6">
            {zone.description}
          </p>

          {/* Materials */}
          <div>
            <p className="font-accent text-[10px] tracking-[0.25em] uppercase text-silver-500 mb-3">
              Recommended Materials
            </p>
            <ul className="space-y-2">
              {zone.materials.map((material) => (
                <li
                  key={material}
                  className="flex items-start gap-2 text-sm text-silver-300 font-body"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-royal-400 mt-1.5 flex-shrink-0" />
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
}