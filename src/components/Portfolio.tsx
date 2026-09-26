import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, portfolioFilters } from '@/lib/data';
import type { Project } from '@/lib/data';
import { fadeUp, staggerContainer, transition } from '@/lib/animations';
import CaseStudyModal from './CaseStudyModal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.tags.includes(activeFilter) ||
            p.category === activeFilter
        );

  return (
    <section id="work" className="section-padding bg-paper">
      <div className="max-w-site container-px">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-600 mb-3 block">
            Portfolio
          </span>
          <motion.h2
            variants={fadeUp}
            transition={transition}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.15]"
          >
            Selected Work &amp; Concepts
          </motion.h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 lg:mb-12"
        >
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-ink-900 text-white'
                  : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={fadeUp}
                transition={transition}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col rounded-2xl border border-ink-100 bg-cream/40 overflow-hidden hover:shadow-lift hover:border-accent-200 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-accent-50 to-ink-100 overflow-hidden">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={`${project.title} cover`}
                      className={`h-full w-full ${project.id === 'ecommerce-marketplace-management' ? 'object-contain p-3' : 'object-cover'}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/80 backdrop-blur text-accent-700 text-xs font-semibold mb-3">
                          {project.type}
                        </span>
                        <p className="text-lg font-bold text-ink-800">{project.title}</p>
                        <p className="text-xs text-ink-400 mt-1">Replace with project visual</p>
                      </div>
                    </div>
                  )}
                  {/* Arrow on hover */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} className="text-accent-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 lg:p-6">
                  {project.coverImage && (
                    <span className="inline-block self-start px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold mb-3">
                      {project.type}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-accent-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-4 line-clamp-2">
                    {project.description ?? project.challenge}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-ink-50 text-ink-500 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1.5 text-sm font-semibold text-accent-600 group-hover:text-accent-700 transition-colors">
                    View Case Study
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
