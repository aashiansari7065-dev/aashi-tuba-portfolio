import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-site container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            transition={transition}
            className="text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4 block"
          >
            Building My Freelance Portfolio
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={transition}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.2] mb-8"
          >
            Building My Freelance Portfolio
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="text-base sm:text-lg text-ink-500 leading-relaxed max-w-2xl"
          >
            I&apos;m currently growing my independent freelance practice and building long-term
            relationships with businesses. My focus is simple — understand the business, do the
            work properly and communicate clearly.
          </motion.p>

          <motion.div variants={fadeUp} transition={transition} className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-600 text-white text-sm font-semibold hover:bg-accent-700 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-accent-600/20 group"
            >
              Let&apos;s Grow Your Business Together
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
