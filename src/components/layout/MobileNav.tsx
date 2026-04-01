'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Phone, Mail, MapPin } from 'lucide-react';

interface Props {
  links: { href: string; label: string }[];
  pathname: string;
  onClose: () => void;
}

export default function MobileNav({ links, pathname, onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 xl:hidden"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-silver-950 border-l border-white/10 overflow-y-auto"
      >
        <div className="pt-6 pb-8 px-6">
          {/* Logos in mobile nav */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
            <Image
              src="/images/logo-skyconsults.webp"
              alt="Sky Consults"
              width={110}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <span className="text-silver-600 text-lg font-light">·</span>
            <Image
              src="/images/logo-jaaji.webp"
              alt="Jaaji Modular"
              width={110}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Nav Links */}
          <div className="space-y-1">
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={l.href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-body transition-all',
                    pathname === l.href
                      ? 'text-royal-400 bg-royal-500/10 font-medium'
                      : 'text-silver-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="gradient-line my-8" />

          {/* Contact Info */}
          <div className="space-y-4 px-4">
            <a
              href="tel:+919008827003"
              className="flex items-center gap-3 text-silver-300 hover:text-royal-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 9008827003</span>
            </a>
            <a
              href="mailto:interiors@skyconsults.in"
              className="flex items-center gap-3 text-silver-300 hover:text-royal-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">interiors@skyconsults.in</span>
            </a>
            <div className="flex items-start gap-3 text-silver-400">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span className="text-sm">North Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
}