import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';
import heroImage from '@/assets/background/hero image.png';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 pb-10 lg:pt-20 lg:pb-16">
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-8 lg:px-[60px] grid gap-10 xl:grid-cols-2 xl:gap-10 items-center">
        {/* Left: copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-none flex-col gap-6 lg:gap-7"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} transition={transition}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Freelance Digital Marketer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={transition}
            className="w-full max-w-none text-[2.5rem] sm:text-[2.875rem] md:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-ink-900"
          >
            Helping Businesses
            <br />
            Grow With <span className="text-gradient">Better Digital
            <br /> Marketing.</span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            variants={fadeUp}
            transition={transition}
            className="text-base sm:text-lg text-ink-500 leading-relaxed max-w-xl"
          >
            I help businesses build a stronger online presence through Social Media Marketing, SEO,
            Content Strategy and Paid Advertising — with a focus on real business goals, not just
            likes and followers.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} transition={transition} className="flex flex-col items-start gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent-600 text-white text-sm font-semibold hover:bg-accent-700 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-accent-600/20 group"
            >
              Let&apos;s Work Together
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-ink-200 text-ink-800 text-sm font-semibold hover:border-ink-300 hover:bg-ink-50 transition-all duration-200"
            >
              View My Work
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p variants={fadeUp} transition={transition} className="text-sm text-ink-400 font-medium pt-1">
            Social Media &bull; SEO &bull; Meta Ads &bull; Google Ads &bull; Content Strategy
          </motion.p>
        </motion.div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex min-h-[240px] items-center justify-center xl:relative xl:-left-[205px] xl:w-[125%]"
        >
          <img
            src={heroImage}
            alt=""
            className="h-auto w-full max-w-[780px] object-contain xl:max-w-[975px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
