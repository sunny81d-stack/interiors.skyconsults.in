import type { Metadata } from 'next';
import SectionHeading from '../../components/ui/SectionHeading';
import CostCalculator from '../../components/calculator/CostCalculator';

export const metadata: Metadata = {
  title: 'Interior Cost Calculator',
  description: 'Calculate your modular interior cost instantly. Factory-direct Jaaji pricing with 18% GST included.',
};

export default function CostCalculatorPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Transparent Pricing"
          title="Interior Cost Calculator"
          subtitle="Get an instant estimate based on Jaaji Factory 2026 pricing. Select your rooms, choose a quality tier, and see the full breakdown with GST."
        />
        <CostCalculator />
      </div>
    </div>
  );
}