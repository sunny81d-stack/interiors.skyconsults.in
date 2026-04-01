import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Instagram,
  Youtube,
} from 'lucide-react';

const quickLinks = [
  { href: '/showcase', label: 'Our Showcase' },
  { href: '/space-planning', label: 'Space Planning' },
  { href: '/sky-journey', label: 'The Sky Journey' },
  { href: '/vastu-compliance', label: 'Vastu 2026' },
  { href: '/cost-calculator', label: 'Cost Calculator' },
  { href: '/showroom', label: '3D Showroom' },
];

const serviceLinks = [
  { href: '/services', label: 'Modular Kitchens' },
  { href: '/services', label: 'Wardrobes & Storage' },
  { href: '/services', label: 'Living Room Design' },
  { href: '/services', label: 'Pooja Room Design' },
  { href: '/services', label: 'Office Interiors' },
  { href: '/services', label: 'Renovation & Remodel' },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-accent text-xs tracking-[0.25em] uppercase text-white mb-6">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link
              href={l.href}
              className="text-silver-400 hover:text-royal-400 font-body text-sm transition-colors flex items-center gap-1 group"
            >
              {l.label}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-silver-950 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-500 to-transparent" />

      <div className="container-premium">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            {/* Co-branded logos */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-skyconsults.webp"
                alt="Sky Consults"
                width={120}
                height={40}
                className="h-9 w-auto object-contain"
              />
              <span className="text-silver-600 text-lg font-light">·</span>
              <Image
                src="/images/logo-jaaji.webp"
                alt="Jaaji Modular"
                width={120}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-silver-400 font-body text-sm leading-relaxed mb-6">
              Premium modular interiors in partnership with Jaaji Modular,
              Bengaluru. German-machine precision with Vastu-compliant designs
              for North Bengaluru homes.
            </p>
            <p className="text-silver-500 font-body text-xs italic">
              Initiated with the blessings of Lord Tirupati &amp; Ganesh
              Ji&apos;s Mother
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinks title="Quick Links" links={quickLinks} />

          {/* Services */}
          <FooterLinks title="Services" links={serviceLinks} />

          {/* Contact & Ventures */}
          <div>
            <h4 className="font-accent text-xs tracking-[0.25em] uppercase text-white mb-6">
              Contact
            </h4>
            <div className="space-y-4 mb-8">
              <a
                href="tel:+919008827003"
                className="flex items-center gap-3 text-silver-400 hover:text-royal-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9008827003</span>
              </a>
              <a
                href="mailto:interiors@skyconsults.in"
                className="flex items-center gap-3 text-silver-400 hover:text-royal-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">interiors@skyconsults.in</span>
              </a>
              <div className="flex items-start gap-3 text-silver-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">
                  North Bengaluru, Karnataka
                  <br />
                  India — 560064
                </span>
              </div>
            </div>

            {/* Our Ventures */}
            <h4 className="font-accent text-xs tracking-[0.25em] uppercase text-white mb-4">
              Our Ventures
            </h4>
            <a
              href="https://realestate.skyconsults.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-royal-400 hover:text-royal-300 text-sm transition-colors group"
            >
              Sky Consults Real Estate
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-royal-500/20 border border-white/10 hover:border-royal-500/30 flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4 text-silver-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver-500 font-body text-xs text-center md:text-left">
            © {new Date().getFullYear()} Sky Consults Interiors. All rights
            reserved. In partnership with Jaaji Modular, Bengaluru.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-silver-500 hover:text-silver-300 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-silver-500 hover:text-silver-300 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}