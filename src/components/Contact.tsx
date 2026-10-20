import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { AlertCircle, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { contact } from '@/lib/data';

const serviceOptions = [
  'SEO & Local SEO',
  'Google Business Profile',
  'Social Media Management',
  'Google & Meta Ads',
  'Website Development',
  'Content Creation',
  'Catalogue Design',
  'Other',
];

export default function Contact() {
  const [status, setStatus] = useState<{ message: string; whatsappUrl?: string; isError?: boolean } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get('fullName') ?? '').trim();
    const email = String(formData.get('emailAddress') ?? '').trim();
    const phone = String(formData.get('phoneNumber') ?? '').trim();
    const service = String(formData.get('serviceRequired') ?? '');
    const projectDetails = String(formData.get('projectDetails') ?? '').trim();
    const message = [
      'Hello Aashi, I would like to discuss a project.',
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Service required: ${service || 'Not specified'}`,
      '',
      'Project details:',
      projectDetails,
    ].join('\n');
    const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(message)}`;

    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatus({
        message: 'Your WhatsApp draft is ready. Review it and press Send in WhatsApp to complete your enquiry.',
        whatsappUrl,
      });
    } catch {
      setStatus({
        message: 'We could not open WhatsApp automatically. Use the link below to open your prepared message.',
        whatsappUrl,
        isError: true,
      });
    }
  };

  return (
    <section id="contact" className="section-padding scroll-mt-20 bg-paper">
      <div className="max-w-site container-px">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 block text-xs font-semibold tracking-widest uppercase text-accent-600">
            Contact
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 leading-[1.15] sm:text-4xl lg:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Have a project in mind or need help growing your business online? Let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <ContactCard icon={Mail} title="Email">
            <a
              className="break-all text-sm font-semibold text-ink-800 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </ContactCard>

          <ContactCard icon={Phone} title="Phone / WhatsApp">
            <a
              className="text-sm font-semibold text-ink-800 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              href={`tel:${contact.phoneLink}`}
            >
              {contact.phone}
            </a>
            <a
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> Chat on WhatsApp
            </a>
          </ContactCard>

          <ContactCard icon={MessageCircle} title="Let&apos;s Discuss Your Project">
            <p className="text-sm leading-relaxed text-ink-500">
              Get in touch to discuss your digital marketing requirements and project goals.
            </p>
          </ContactCard>
        </div>

        <form
          onSubmit={handleSubmit}
          onChange={() => setStatus(null)}
          className="mx-auto mt-10 grid max-w-4xl gap-5 rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:p-8 lg:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="fullName" type="text" placeholder="Your full name" required />
            <Field label="Email Address" name="emailAddress" type="email" placeholder="you@example.com" required />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone Number (optional)" name="phoneNumber" type="tel" placeholder="Your phone number" />
            <div>
              <label htmlFor="serviceRequired" className="mb-2 block text-sm font-semibold text-ink-700">
                Service Required
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                defaultValue=""
                className="w-full rounded-xl border border-ink-200 bg-cream/50 px-4 py-3 text-sm text-ink-800 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <option value="">Choose a service (optional)</option>
                {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="projectDetails" className="mb-2 block text-sm font-semibold text-ink-700">
              Project Details / Message
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={5}
              placeholder="Tell me about your project and goals..."
              required
              className="w-full resize-y rounded-xl border border-ink-200 bg-cream/50 px-4 py-3 text-sm text-ink-800 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
            >
              Send Message <Send size={16} aria-hidden="true" />
            </button>
            {status && (
              <div role="status" aria-live="polite" className="text-sm text-ink-600">
                <p className="flex items-start gap-2">
                  <AlertCircle size={18} className={`mt-0.5 shrink-0 ${status.isError ? 'text-red-600' : 'text-accent-600'}`} aria-hidden="true" />
                  <span>{status.message}</span>
                </p>
                {status.whatsappUrl && (
                  <a
                    href={status.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-6 mt-1 inline-block font-semibold text-accent-700 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                  >
                    Open WhatsApp
                  </a>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-40 flex-col items-start rounded-2xl border border-ink-100 bg-cream/40 p-5 text-left transition-colors hover:bg-white sm:p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-sm font-semibold text-ink-900">{title}</h3>
      <div className="flex flex-col items-start">{children}</div>
    </div>
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
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-ink-200 bg-cream/50 px-4 py-3 text-sm text-ink-800 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-500"
      />
    </div>
  );
}