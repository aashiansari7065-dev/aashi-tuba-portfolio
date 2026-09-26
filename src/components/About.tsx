import { motion } from 'framer-motion';
import { aboutCards } from '@/lib/data';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="section-padding bg-paper">
      <div className="max-w-site container-px">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            transition={transition}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.15]"
          >
            Not Just Posting.
            <br />
            I Focus On What Your Business Needs.
          </motion.h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-8"
          >
            <motion.p variants={fadeUp} transition={transition} className="text-base sm:text-lg text-ink-500 leading-relaxed">
              Digital marketing is not only about posting every day. The right strategy depends on
              the business, audience, competition and goal.
            </motion.p>
            <motion.p variants={fadeUp} transition={transition} className="text-base sm:text-lg text-ink-500 leading-relaxed">
              I work by first understanding the business and then creating a marketing plan around
              what actually matters — visibility, enquiries, leads and growth.
            </motion.p>

          </motion.div>

          {/* Right: numbered cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-5"
          >
            {aboutCards.map((card) => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                transition={transition}
                className="group flex gap-6 p-6 lg:p-8 rounded-2xl border border-ink-100 bg-cream/40 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <span className="text-4xl font-extrabold text-accent-600/30 group-hover:text-accent-600 transition-colors">
                  {card.num}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-ink-500">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
