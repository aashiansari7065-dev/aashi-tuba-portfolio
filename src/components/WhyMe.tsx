import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whyMePoints } from '@/lib/data';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

export default function WhyMe() {
  return (
    <section id="why-me" className="section-padding bg-ink-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-site container-px relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: large statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={transition}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-400 mb-5 block">
              Why Work With Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.2]">
              Marketing That Starts With Understanding Your Business.
            </h2>
            <p className="mt-8 text-xl sm:text-2xl font-medium text-ink-300 leading-snug max-w-lg">
              &ldquo;I don&apos;t believe in the same marketing strategy for every business.&rdquo;
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-600 text-white text-sm font-semibold hover:bg-accent-500 transition-all duration-200 group"
            >
              Let&apos;s Discuss Your Business
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: points */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-5"
          >
            {whyMePoints.map((point) => (
              <motion.div
                key={point.num}
                variants={fadeUp}
                transition={transition}
                className="group flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-sm font-extrabold text-accent-400 tracking-wider whitespace-nowrap">
                  {point.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{point.title}</h3>
                  <p className="text-sm text-ink-300 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
