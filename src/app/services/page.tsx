import type { Metadata } from 'next';
import SectionHeading from '../..//components/ui/SectionHeading';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Card from '../../components/ui/Card';
import servicesData from '../../../data/services.json';
import { Truck, Recycle, RefreshCw, Trash2, Wind, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Management Services',
  description: 'End-to-end interior project services: transportation, recycling, dust collection, and 24/7 fast-track delivery.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Truck, Recycle, RefreshCw, Trash2, Wind, Zap,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Beyond Interiors"
          title="Project Management Grid"
          subtitle="Complete end-to-end support from factory floor to your living room floor."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Truck;
            return (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <Card className="h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-royal-500/10 border border-royal-500/20 flex items-center justify-center mb-6 group-hover:bg-royal-500/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-7 h-7 text-royal-400" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-silver-400 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}