import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { navLinks, contact } from '@/lib/data';

export default function Footer() {
  const socials = [
    { icon: Instagram, href: contact.instagram, label: 'Instagram' },
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, href: contact.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="max-w-site container-px py-14 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xl font-extrabold tracking-tight text-white">AASHI</p>
              <p className="text-xs font-medium tracking-widest uppercase text-ink-400 mt-0.5">
                Freelance Digital Marketer
              </p>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs mt-2">
              Helping businesses build a stronger digital presence.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-600 flex items-center justify-center text-ink-300 hover:text-white transition-all duration-200"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-400 mb-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-300 hover:text-accent-400 transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact summary */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-400 mb-1">
              Get In Touch
            </p>
            <a href="mailto:aashiansari7065@gmail.com" className="text-sm text-ink-300 hover:text-accent-400 transition-colors w-fit">
              aashiansari7065@gmail.com
            </a>
            <a href="tel:7065766747" className="text-sm text-ink-300 hover:text-accent-400 transition-colors w-fit">
              7065766747
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-300 hover:text-accent-400 transition-colors w-fit"
            >
              WhatsApp
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-300 hover:text-accent-400 transition-colors w-fit"
            >
              Instagram
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-300 hover:text-accent-400 transition-colors w-fit"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400">
            &copy; 2026 Aashi. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Built with care for growing businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
