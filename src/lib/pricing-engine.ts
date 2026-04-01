import type {
    CalculatorInput,
    CalculatorResult,
    BreakdownRow,
    PricingData,
} from '@/types';
import pricingRaw from '../../data/pricing.json';

const pricing = pricingRaw as unknown as PricingData;

export function calculateInteriorCost(input: CalculatorInput): CalculatorResult {
    const tier = pricing.tiers[input.tier];
    const breakdown: BreakdownRow[] = [];

    if (input.bedrooms > 0) {
        const sqFt = tier.defaultSqFt.bedroom * input.bedrooms;
        const dry = sqFt * tier.pricePerSqFt.bedroom.dryArea.rate;
        breakdown.push({
            room: 'Bedroom',
            count: input.bedrooms,
            sqFt,
            dryAreaCost: dry,
            wetAreaCost: 0,
            subtotal: dry,
            grade: tier.pricePerSqFt.bedroom.dryArea.grade,
            finish: tier.pricePerSqFt.bedroom.dryArea.finish,
        });
    }

    if (input.halls > 0) {
        const sqFt = tier.defaultSqFt.hall * input.halls;
        const dry = sqFt * tier.pricePerSqFt.hall.dryArea.rate;
        breakdown.push({
            room: 'Hall / Living Room',
            count: input.halls,
            sqFt,
            dryAreaCost: dry,
            wetAreaCost: 0,
            subtotal: dry,
            grade: tier.pricePerSqFt.hall.dryArea.grade,
            finish: tier.pricePerSqFt.hall.dryArea.finish,
        });
    }

    if (input.dining > 0) {
        const sqFt = tier.defaultSqFt.dining * input.dining;
        const dry = sqFt * tier.pricePerSqFt.dining.dryArea.rate;
        breakdown.push({
            room: 'Dining Area',
            count: input.dining,
            sqFt,
            dryAreaCost: dry,
            wetAreaCost: 0,
            subtotal: dry,
            grade: tier.pricePerSqFt.dining.dryArea.grade,
            finish: tier.pricePerSqFt.dining.dryArea.finish,
        });
    }

    if (input.kitchens > 0) {
        const totalSqFt = tier.defaultSqFt.kitchen * input.kitchens;
        const drySqFt = Math.round(totalSqFt * 0.6);
        const wetSqFt = Math.round(totalSqFt * 0.4);
        const dry = drySqFt * tier.pricePerSqFt.kitchen.dryArea.rate;
        const wet = wetSqFt * tier.pricePerSqFt.kitchen.wetArea.rate;
        breakdown.push({
            room: 'Kitchen',
            count: input.kitchens,
            sqFt: totalSqFt,
            dryAreaCost: dry,
            wetAreaCost: wet,
            subtotal: dry + wet,
            grade: `${tier.pricePerSqFt.kitchen.dryArea.grade} + ${tier.pricePerSqFt.kitchen.wetArea.grade}`,
            finish: `${tier.pricePerSqFt.kitchen.dryArea.finish} + ${tier.pricePerSqFt.kitchen.wetArea.finish}`,
        });
    }

    const subtotal = breakdown.reduce((s, i) => s + i.subtotal, 0);
    const gstAmount = Math.round(subtotal * pricing.gstRate);

    return {
        tier: tier.label,
        breakdown,
        subtotal,
        gstAmount,
        grandTotal: subtotal + gstAmount,
    };
}