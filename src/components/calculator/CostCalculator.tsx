'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { calculateInteriorCost } from '../../lib/pricing-engine';
import { formatCurrency } from '../../lib/utils';
import type { CalculatorInput, BreakdownRow } from '@/types';
import Card from '../ui/Card';
import { BedDouble, Sofa, UtensilsCrossed, ChefHat, ArrowRight, Download } from 'lucide-react';

const tiers = [
  { key: 'essential' as const, label: 'Essential', desc: 'MR Grade · Laminate', color: 'silver' },
  { key: 'premium' as const, label: 'Premium', desc: 'HDHMR · Acrylic/PU', color: 'royal' },
  { key: 'luxury' as const, label: 'Luxury', desc: 'Veneer · Italian Lacquer', color: 'white' },
];

const rooms = [
  { key: 'bedrooms' as const, label: 'Bedrooms', icon: BedDouble },
  { key: 'halls' as const, label: 'Hall / Living', icon: Sofa },
  { key: 'dining' as const, label: 'Dining Area', icon: UtensilsCrossed },
  { key: 'kitchens' as const, label: 'Kitchen', icon: ChefHat },
];

export default function CostCalculator() {
  const [input, setInput] = useState<CalculatorInput>({
    bedrooms: 2,
    halls: 1,
    dining: 1,
    kitchens: 1,
    tier: 'premium',
  });

  const [showResult, setShowResult] = useState(false);

  const result = calculateInteriorCost(input);

  const updateCount = (key: keyof Omit<CalculatorInput, 'tier'>, delta: number) => {
    setInput((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(10, prev[key] + delta)),
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tier Selection */}
      <div className="mb-10">
        <p className="font-accent text-xs tracking-[0.25em] uppercase text-silver-500 mb-4">
          Step 1: Choose Quality Tier
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <button
              key={t.key}
              onClick={() => setInput({ ...input, tier: t.key })}
              className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                input.tier === t.key
                  ? 'border-royal-500/50 bg-royal-500/10 shadow-lg shadow-royal-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <p className={`font-display text-lg ${input.tier === t.key ? 'text-royal-400' : 'text-white'}`}>
                {t.label}
              </p>
              <p className="font-body text-xs text-silver-500 mt-1">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Room Selection */}
      <div className="mb-10">
        <p className="font-accent text-xs tracking-[0.25em] uppercase text-silver-500 mb-4">
          Step 2: Select Room Count
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rooms.map((r) => (
            <Card key={r.key} padding="sm" hover={false} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <r.icon className="w-5 h-5 text-royal-400" />
                <span className="font-body text-white">{r.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateCount(r.key, -1)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-royal-500/30 flex items-center justify-center text-silver-300 transition-all"
                >
                  −
                </button>
                <span className="w-8 text-center font-body text-white font-medium">
                  {input[r.key]}
                </span>
                <button
                  onClick={() => updateCount(r.key, 1)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-royal-500/30 flex items-center justify-center text-silver-300 transition-all"
                >
                  +
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <div className="text-center mb-10">
        <button
          onClick={() => setShowResult(true)}
          className="inline-flex items-center gap-2 px-10 py-4 bg-royal-500 hover:bg-royal-600 text-white font-body font-medium rounded-full transition-all shadow-lg shadow-royal-500/20 hover:shadow-royal-500/40 text-base"
        >
          Calculate Cost <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Results */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card padding="lg">
            <h3 className="font-display text-2xl text-white mb-2">
              Your Estimate — {result.tier} Tier
            </h3>
            <p className="font-body text-sm text-silver-500 mb-8">
              Based on Jaaji Factory 2026 pricing
            </p>

            {/* Breakdown Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-3 font-accent text-xs tracking-wider uppercase text-silver-500">Room</th>
                    <th className="pb-3 font-accent text-xs tracking-wider uppercase text-silver-500">Count</th>
                    <th className="pb-3 font-accent text-xs tracking-wider uppercase text-silver-500">Sq Ft</th>
                    <th className="pb-3 font-accent text-xs tracking-wider uppercase text-silver-500">Grade</th>
                    <th className="pb-3 font-accent text-xs tracking-wider uppercase text-silver-500 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {result.breakdown.map((row:BreakdownRow) => (
                    <tr key={row.room} className="border-b border-white/5">
                      <td className="py-3 font-body text-sm text-white">{row.room}</td>
                      <td className="py-3 font-body text-sm text-silver-400">{row.count}</td>
                      <td className="py-3 font-body text-sm text-silver-400">{row.sqFt}</td>
                      <td className="py-3 font-body text-xs text-silver-500">{row.grade}</td>
                      <td className="py-3 font-body text-sm text-white text-right">{formatCurrency(row.subtotal)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <div className="flex justify-between font-body text-sm">
                <span className="text-silver-400">Subtotal</span>
                <span className="text-white">{formatCurrency(result.subtotal)}</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-silver-400">GST (18%)</span>
                <span className="text-white">{formatCurrency(result.gstAmount)}</span>
              </div>
              <div className="flex justify-between font-display text-2xl pt-3 border-t border-white/10">
                <span className="text-white">Grand Total</span>
                <span className="text-royal-400">{formatCurrency(result.grandTotal)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/919008827003?text=Hi! I used the calculator. My estimate: ${result.tier} tier, ${formatCurrency(result.grandTotal)} for ${input.bedrooms} bed, ${input.halls} hall, ${input.dining} dining, ${input.kitchens} kitchen.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-body font-medium transition-all"
              >
                Discuss on WhatsApp
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-royal-500/30 text-white rounded-full font-body transition-all">
                <Download className="w-4 h-4" /> Save Estimate
              </button>
            </div>

            <p className="mt-6 text-xs text-silver-600 font-body">
              * This is an indicative estimate based on standard room sizes. Actual
              pricing may vary after site visit and detailed measurement. Prices
              sourced from Jaaji Factory Price 2026 schedule.
            </p>
          </Card>
        </motion.div>
      )}
    </div>
  );
}