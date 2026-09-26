import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, Instagram, Linkedin, CheckCircle2 } from 'lucide-react';
import { contact } from '@/lib/data';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

const helpOptions = [
  'Social Media Marketing',
  'SEO',
  'Meta Ads',
  'Google Ads',
  'Content Strategy',
  'Google Business Profile',
  'Not sure yet',
];

const contactItems = [
  { label: 'Email', value: contact.email, icon: Mail, href: `mailto:${contact.email}` },
  { label: 'WhatsApp', value: 'Chat on WhatsApp', icon: MessageCircle, href: contact.whatsapp },
  { label: 'Instagram', value: '@aashi', icon: Instagram, href: contact.instagram },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', icon: Linkedin, href: contact.linkedin },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-paper">
      <div className="max-w-site container-px">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
          {/* Left: form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span
              variants={fadeUp}
              transition={transition}
              className="text-xs font-semibold tracking-widest uppercase text-accent-600 mb-3 block"
            >
              Contact
            </motion.span>
            <motion.h2
              variants={fadeUp}
              transition={transition}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.15] mb-3"
            >
              Let&apos;s Talk About Your Business
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={transition}
              className="text-sm text-ink-500 mb-8"
            >
              I usually respond within 24 hours.
            </motion.p>

            {/* Form */}
            <motion.form
              variants={fadeUp}
              transition={transition}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" type="text" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone" name="phone" type="tel" placeholder="Your phone number" />
                <Field label="Business Name" name="business" type="text" placeholder="Your business" />
              </div>

              {/* Help with */}
              <div>
                <label htmlFor="help" className="block text-sm font-semibold text-ink-700 mb-2">
                  What do you need help with?
                </label>
                <select
                  id="help"
                  name="help"
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-cream/50 text-ink-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  {helpOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ink-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your business and what you're looking for..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-cream/50 text-ink-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitted}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent-600 text-white text-sm font-semibold hover:bg-accent-700 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-accent-600/20 disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </motion.form>
          </motion.div>

          {/* Right: contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-3 lg:pt-16"
          >
            {contactItems.map((item) => (
              <motion.a
                key={item.label}
                variants={fadeUp}
                transition={transition}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-ink-100 bg-cream/40 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center group-hover:bg-accent-600 transition-colors duration-300">
                  <item.icon size={20} className="text-accent-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-ink-400 font-medium">{item.label}</p>
                  <p className="text-sm font-semibold text-ink-800 group-hover:text-accent-700 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Note */}
            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-2 p-5 rounded-2xl bg-accent-50 border border-accent-100"
            >
              <p className="text-sm text-accent-800 font-medium leading-relaxed">
                Reach out via any of the channels above, or fill out the form. I&apos;ll get back to
                you within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink-700 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-cream/50 text-ink-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
      />
    </div>
  );
}
