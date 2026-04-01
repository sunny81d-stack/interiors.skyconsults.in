'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { cn } from '../..//lib/utils';
import MobileNav from './MobileNav';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/space-planning', label: 'Space Planning' },
  { href: '/sky-journey', label: 'Sky Journey' },
  { href: '/vastu-compliance', label: 'Vastu 2026' },
  { href: '/cost-calculator', label: 'Calculator' },
  { href: '/services', label: 'Services' },
  { href: '/showroom', label: 'Showroom' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-silver-950/95 backdrop-blur-xl border-b border-white/5 py-2'
            : 'bg-transparent py-4'
        )}
      >
        <div className="container-premium flex items-center justify-between">
          {/* Co-branded Logos */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Sky Consults Logo */}
            <Image
              src="/images/logo-skyconsults.webp"
              alt="Sky Consults"
              width={140}
              height={45}
              className="h-9 md:h-10 w-auto object-contain"
              priority
            />

            {/* Divider dot */}
            <span className="text-silver-600 text-lg font-light hidden sm:block">
              ·
            </span>

            {/* Jaaji Modular Logo */}
            <Image
              src="/images/logo-jaaji.webp"
              alt="Jaaji Modular"
              width={140}
              height={45}
              className="h-9 md:h-10 w-auto object-contain hidden sm:block"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'px-3 py-2 text-sm font-body font-light rounded-lg transition-all duration-300',
                  pathname === l.href
                    ? 'text-royal-400 bg-royal-500/10'
                    : 'text-silver-300 hover:text-white hover:bg-white/5'
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919008827003"
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-body text-royal-400 hover:text-royal-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9008827003</span>
            </a>

            {/* Mobile: show both logos small */}
            <Image
              src="/images/logo-jaaji.webp"
              alt="Jaaji Modular"
              width={100}
              height={35}
              className="h-7 w-auto object-contain sm:hidden"
              priority
            />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileNav
            links={navLinks}
            pathname={pathname}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}