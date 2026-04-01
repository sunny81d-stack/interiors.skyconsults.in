import type { Metadata } from 'next';
import SectionHeading from '../../components/ui/SectionHeading';
import VastuZoneCard from '../../components/vastu/VastuZoneCard';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Vastu Compliance',
  description: 'Vastu-compliant interior design blending ancient wisdom with modern aesthetics for North Bengaluru homes.',
};

const zones = [
  {
    title: 'Agni Zone — Kitchen',
    direction: 'South-East',
    description: 'The kitchen belongs in the Agni (fire) corner. We design modular kitchens with the cooking platform facing east, sink placement following water-element rules, and proper ventilation aligned to Vastu.',
    materials: ['Fire-resistant BWP Grade for wet areas', 'Heat-reflective acrylic finishes', 'Copper-toned hardware accents'],
    color: 'from-orange-500/10 to-red-500/10',
  },
  {
    title: 'Ishanya Zone — Pooja Room',
    direction: 'North-East',
    description: 'The most sacred corner of Vastu. Our pooja room designs use natural teak, brass fixtures, and LED-lit mandirs positioned so you face east while praying. Storage for puja items is built into the modular unit.',
    materials: ['Natural teak wood finish panels', 'Brass-coated handles and frames', 'Warm white LED mandir lighting'],
    color: 'from-royal-500/10 to-royal-300/10',
  },
  {
    title: 'Nairutya Zone — Master Bedroom',
    direction: 'South-West',
    description: 'The master bedroom in the south-west brings stability and authority. Bed headboard faces south, wardrobe placement follows heavy-element principles, and calming color palettes promote restful sleep.',
    materials: ['HDHMR wardrobes with matte finish', 'Soft-close drawer systems', 'Noise-dampening edge profiles'],
    color: 'from-silver-500/10 to-silver-300/10',
  },
  {
    title: 'Entrance Energy',
    direction: 'North / East',
    description: 'The main entrance sets the energy tone. We design entryways with proper lighting, mirror placement that doesn\'t face the door, shoe cabinet positioning, and welcoming aesthetics that follow Vastu flow.',
    materials: ['Bright laminate finish for positivity', 'Full-length mirrors on side walls', 'Concealed shoe storage units'],
    color: 'from-green-500/10 to-royal-500/10',
  },
];

const remedyMaterials = [
  { name: 'Copper Accents', use: 'Kitchen hardware, pooja fixtures — enhances fire element balance' },
  { name: 'Natural Teak Panels', use: 'Pooja room, bedroom headboards — brings earth stability' },
  { name: 'Crystal Glass Elements', use: 'Living room partitions — promotes light and clarity energy' },
  { name: 'Brass-Coated Fixtures', use: 'Entrance, pooja — traditional aesthetic with positive energy flow' },
  { name: 'Matte Earth-Tone Laminates', use: 'South-west rooms — grounding, calming visual weight' },
];

export default function VastuCompliancePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Ancient Wisdom, Modern Design"
          title="2026 Vastu Compliance"
          subtitle="Every Sky Consults interior harmonizes Vastu Shastra energy principles with contemporary aesthetics. No compromise on either."
        />

        {/* Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {zones.map((zone, i) => (
            <VastuZoneCard key={zone.title} zone={zone} index={i} />
          ))}
        </div>

        {/* Remedy Materials */}
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="font-accent text-xs tracking-[0.3em] uppercase text-royal-400 mb-2">
              Premium Materials
            </h2>
            <h3 className="font-display text-3xl text-gradient mb-4">
              Vastu-Remedy Materials
            </h3>
            <p className="font-body text-silver-400 max-w-2xl">
              Materials selected not just for beauty but for their energy properties as prescribed in Vastu Shastra.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {remedyMaterials.map((m, i) => (
            <AnimatedSection key={m.name} delay={i * 0.1}>
              <Card padding="sm" className="h-full">
                <h4 className="font-display text-lg text-white mb-2">{m.name}</h4>
                <p className="font-body text-sm text-silver-400">{m.use}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 text-center">
            <Button href="/cost-calculator" size="lg">
              Get Vastu-Compliant Estimate <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}