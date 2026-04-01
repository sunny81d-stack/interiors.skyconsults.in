import type { Metadata } from 'next';
import SectionHeading from '../../components/ui/SectionHeading';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Card from '../../components/ui/Card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sky Consults Interiors for a free consultation in North Bengaluru.',
};

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 9008827003', href: 'tel:+919008827003' },
  { icon: Mail, label: 'Email', value: 'interiors@skyconsults.in', href: 'mailto:interiors@skyconsults.in' },
  { icon: MapPin, label: 'Service Area', value: 'North Bengaluru — Bagalur, Yelahanka, Devanahalli, Thanisandra, Hebbal', href: '' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM\nSunday: By Appointment', href: '' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', href: 'https://wa.me/919008827003' },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-premium">
        <SectionHeading
          label="Get in Touch"
          title="Contact Us"
          subtitle="Ready to transform your space? Reach out for a free consultation and cost estimate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <Card padding="sm" className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-royal-500/10 border border-royal-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-royal-400" />
                  </div>
                  <div>
                    <p className="font-accent text-xs tracking-[0.15em] uppercase text-silver-500 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-body text-white hover:text-royal-400 transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-silver-300 whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Map / Info */}
          <AnimatedSection delay={0.3}>
            <Card padding="lg" className="h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-white mb-4">
                  Visit Our Design Studio
                </h3>
                <p className="font-body text-silver-400 leading-relaxed mb-8">
                  Experience our materials, finishes, and hardware in person. Our
                  design consultants will walk you through the complete modular
                  range from Jaaji Modular and help you pick the perfect
                  combination for your home.
                </p>
                <p className="font-body text-silver-400 leading-relaxed mb-8">
                  We serve all of North Bengaluru including Bagalur, Yelahanka
                  New Town, Devanahalli, Thanisandra, Hebbal, Jakkur,
                  Sahakarnagar, and surrounding areas.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-xl bg-silver-800/50 border border-white/10 flex items-center justify-center">
                <p className="font-body text-sm text-silver-500">
                  Google Maps embed will appear here
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}