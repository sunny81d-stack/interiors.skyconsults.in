'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-premium" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 40, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-silver-300/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-premium text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-royal-400" />
          <span className="font-body text-sm text-silver-300">
            Sky Consults × Jaaji Modular, Bengaluru
          </span>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <Image
            src="/images/logo-skyconsults.webp"
            alt="Sky Consults"
            width={160}
            height={50}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
          <span className="text-silver-600 text-2xl font-light">·</span>
          <Image
            src="/images/logo-jaaji.webp"
            alt="Jaaji Modular"
            width={160}
            height={50}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-gradient">Premium Modular</span>
          <br />
          <span className="text-white">Interiors for</span>
          <br />
          <span className="text-gradient-blue">North Bengaluru</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-silver-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          German-machine precision meets Vastu wisdom. Factory-direct pricing
          with 250-point quality handover — transforming homes across Bagalur,
          Yelahanka, Devanahalli &amp; beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/cost-calculator" variant="primary" size="lg">
            Get Free Estimate
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/showcase" variant="secondary" size="lg">
            <Play className="w-4 h-4" />
            View Our Work
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '250+', label: 'Quality Checkpoints' },
            { value: '45', label: 'Days Avg. Delivery' },
            { value: '100%', label: 'Vastu Compliant' },
            { value: '10yr', label: 'Warranty' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-light text-white">
                {stat.value}
              </p>
              <p className="font-body text-xs text-silver-500 mt-1 tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-silver-950 to-transparent" />
    </section>
  );
}