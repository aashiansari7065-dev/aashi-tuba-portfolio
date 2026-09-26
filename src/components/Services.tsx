import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { services } from '@/lib/data';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group flex flex-col rounded-2xl border border-ink-100 bg-paper p-6 lg:p-7 hover:shadow-lift hover:border-accent-200 transition-all duration-300">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5 group-hover:bg-accent-600 transition-colors duration-300">
        <service.icon
          size={22}
          className="text-accent-600 group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Title + description */}
      <h3 className="text-lg font-bold text-ink-900 mb-2">{service.title}</h3>
      <p className="text-sm text-ink-500 leading-relaxed mb-4">{service.description}</p>

      {/* Details (expandable) */}
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? '200px' : '0px' }}>
        <ul className="flex flex-col gap-2 pt-1 pb-4">
          {service.details.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm text-ink-600">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Learn more toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
        aria-expanded={open}
      >
        {open ? (
          <>
            Show Less <Minus size={16} />
          </>
        ) : (
          <>
            Learn More <Plus size={16} />
          </>
        )}
      </button>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="max-w-site container-px">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={transition}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.15]"
          >
            Everything You Need To Build Your Online Presence
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeUp} transition={transition}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
