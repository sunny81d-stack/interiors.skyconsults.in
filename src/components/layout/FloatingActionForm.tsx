'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Phone,
  Send,
  User,
  Mail,
  Home,
} from 'lucide-react';

export default function FloatingActionForm() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const lastY = useRef(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) > 5 && y > lastY.current && !open) {
        setVisible(false);
      }
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setVisible(true), 300);
      if (y < lastY.current) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Sky Consults Interiors!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AProject: ${form.projectType}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919008827003?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setForm({ name: '', phone: '', email: '', projectType: '', message: '' });
    }, 3000);
  };

  const inputCls =
    'w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-silver-500 font-body text-sm focus:outline-none focus:border-royal-500/50 transition-all';

  return (
    <>
      {/* Floating Action Buttons */}
      <AnimatePresence>
        {visible && !open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919008827003?text=Hi%20Sky%20Consults!%20I%27m%20interested%20in%20interior%20design."
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 transition-all group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>

            {/* Open Form */}
            <button
              onClick={() => setOpen(true)}
              className="w-14 h-14 rounded-full bg-royal-500 hover:bg-royal-600 flex items-center justify-center shadow-lg shadow-royal-500/30 animate-pulse-glow transition-all group"
              aria-label="Contact Form"
            >
              <Send className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Call */}
            <a
              href="tel:+919008827003"
              className="w-14 h-14 rounded-full bg-silver-700 hover:bg-silver-600 flex items-center justify-center shadow-lg transition-all group"
              aria-label="Call"
            >
              <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-silver-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-royal-600 to-royal-800 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white">
                      Get Free Consultation
                    </h3>
                    <p className="font-body text-sm text-royal-200 mt-1">
                      We&apos;ll design your dream space
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="font-display text-xl text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-silver-400 text-sm">
                      Redirecting to WhatsApp...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" />
                      <input
                        type="email"
                        placeholder="Email (Optional)"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div className="relative">
                      <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" />
                      <select
                        value={form.projectType}
                        onChange={(e) =>
                          setForm({ ...form, projectType: e.target.value })
                        }
                        className={`${inputCls} appearance-none cursor-pointer [&>option]:bg-silver-900`}
                      >
                        <option value="">Select Project Type</option>
                        <option value="Full Home">Full Home Interior</option>
                        <option value="Kitchen">Modular Kitchen</option>
                        <option value="Bedroom">Bedroom Design</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Office">Office Interior</option>
                        <option value="Renovation">Renovation</option>
                      </select>
                    </div>

                    <textarea
                      placeholder="Tell us about your dream space..."
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-silver-500 font-body text-sm focus:outline-none focus:border-royal-500/50 transition-all resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-3 bg-royal-500 hover:bg-royal-600 text-white font-body font-medium rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-royal-500/20"
                    >
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}