import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

export default function Process() {
  return (
    <section id="process" className="section-padding bg-cream">
      <div className="max-w-site container-px">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-600 mb-3 block">
            How I Work
          </span>
          <motion.h2
            variants={fadeUp}
            transition={transition}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.15]"
          >
            Simple Process. Clear Communication.
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile) / horizontal line (desktop) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ink-100 lg:left-0 lg:right-0 lg:top-7 lg:bottom-auto lg:h-px lg:w-full" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-between"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                transition={transition}
                className="relative flex gap-5 lg:flex-col lg:gap-4 lg:items-start lg:w-[18%]"
              >
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-paper border-2 border-accent-600 flex items-center justify-center font-extrabold text-accent-600 text-sm shadow-sm lg:mx-auto">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 lg:pt-4 lg:text-center">
                  <h3 className="text-lg font-bold text-ink-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow (desktop) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
