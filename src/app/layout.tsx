import type { Metadata } from 'next';
import { cormorant, outfit, cinzel } from '../lib/fonts';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingActionForm from '../components/layout/FloatingActionForm';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sky Consults Interiors | Premium Modular Interiors – North Bengaluru',
    template: '%s | Sky Consults Interiors',
  },
  description:
    'Premium modular interior design by Sky Consults in partnership with Jaaji Modular. German-machine precision, Vastu compliance, factory-direct pricing for North Bengaluru.',
  openGraph: {
    title: 'Sky Consults Interiors',
    description: 'Transform your home with German-precision modular interiors.',
    url: 'https://interiors.skyconsults.in',
    siteName: 'Sky Consults Interiors',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${cinzel.variable}`}>
      <body className="min-h-screen bg-silver-950 text-silver-200 font-body antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingActionForm />
      </body>
    </html>
  );
}