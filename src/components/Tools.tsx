import { motion } from 'framer-motion';
import { tools } from '@/lib/data';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

const toolLetters: Record<string, string> = {
  'Canva': 'C',
  'Google Analytics': 'GA',
  'Google Search Console': 'SC',
  'Google Business Profile': 'GBP',
  'Meta Ads Manager': 'MA',
  'Google Ads': 'GA',
  'WordPress': 'WP',
  'Google Keyword Planner': 'KP',
};

export default function Tools() {
  return (
    <section className="py-20 sm:py-24 bg-paper">
      <div className="max-w-site container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.h2
            variants={fadeUp}
            transition={transition}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-900"
          >
            Tools I Work With
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool}
              variants={fadeUp}
              transition={transition}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-ink-100 bg-cream/40 hover:bg-white hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-ink-900 flex items-center justify-center group-hover:bg-accent-600 transition-colors duration-300">
                <span className="text-lg font-extrabold text-white">
                  {toolLetters[tool] || tool.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-semibold text-ink-700 text-center leading-tight">{tool}</span>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-ink-400 mt-6">
          Tools listed reflect platforms I work with. Not affiliated with or certified by these brands.
        </p>
      </div>
    </section>
  );
}
