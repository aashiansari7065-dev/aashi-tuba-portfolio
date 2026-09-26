import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

const whatsappMessage = `Hi! 👋

Welcome to Aashi & Tuba Digital Marketing.

We help businesses grow online with:
✨ SEO
✨ Social Media Marketing & Management
✨ Google Business Profile
✨ Meta & Google Ads
✨ Content Strategy & Creation
✨ Local SEO

Tell us a little about your business and what you're looking to improve, and we'll be happy to discuss your requirements.

🚀 Ready to grow your business online?
Send us a message and let's start the conversation!

Looking forward to connecting! 😊`;

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-site container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative rounded-3xl bg-ink-900 px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20 overflow-hidden text-center"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-600/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-600/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

          <div className="relative flex flex-col items-center">
            <motion.h2
              variants={fadeUp}
              transition={transition}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-2xl"
            >
              Have A Business To Grow?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={transition}
              className="mt-5 text-base sm:text-lg text-ink-300 max-w-xl leading-relaxed"
            >
              Let&apos;s talk about where your business is today and what we can improve online.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent-600 text-white text-sm font-semibold hover:bg-accent-500 transition-all duration-200 group"
              >
                Start a Conversation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`https://wa.me/917065766747?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                <MessageCircle size={18} />
                WhatsApp Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
