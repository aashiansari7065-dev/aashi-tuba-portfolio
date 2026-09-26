import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import type { Project } from '@/lib/data';

const caseStudySections: { key: keyof Pick<Project, 'challenge' | 'strategy' | 'contentApproach' | 'seoApproach' | 'adsApproach' | 'expectedGoal'>; label: string; num: string }[] = [
  { key: 'challenge', label: 'The Challenge', num: '01' },
  { key: 'strategy', label: 'The Strategy', num: '02' },
  { key: 'contentApproach', label: 'Content Direction', num: '03' },
  { key: 'seoApproach', label: 'SEO Direction', num: '04' },
  { key: 'adsApproach', label: 'Advertising Direction', num: '05' },
  { key: 'expectedGoal', label: 'Expected Outcome', num: '06' },
];

const solarCaseStudySections = [
  { key: 'challenge', label: 'The Challenge', num: '01' },
  { key: 'strategy', label: 'The Approach', num: '02' },
  { key: 'contentApproach', label: 'Social Media Management', num: '03' },
  { key: 'seoApproach', label: 'Website Development', num: '04' },
  { key: 'adsApproach', label: 'My Role', num: '05' },
] as const;

const smartViewCaseStudySections = [
  { key: 'challenge', label: 'The Challenge', num: '01' },
  { key: 'strategy', label: 'The Approach', num: '02' },
  { key: 'contentApproach', label: 'Local SEO', num: '03' },
  { key: 'seoApproach', label: 'Website Development', num: '04' },
  { key: 'adsApproach', label: 'My Role', num: '05' },
] as const;

const offPageCaseStudySections = [
  { key: 'challenge', label: 'The Challenge', num: '01' },
  { key: 'strategy', label: 'The Approach', num: '02' },
] as const;

const ecommerceCaseStudySections = [
  { key: 'challenge', label: 'The Challenge', num: '01' },
  { key: 'strategy', label: 'The Approach', num: '02' },
] as const;

const attitudeAcademySlideShareUrl = 'https://www.slideshare.net/slideshow/mastering-adobe-premiere-pro-and-after-effects-pptx/284572269';
const attitudeAcademyInfographicUrl = 'https://www.behance.net/gallery/240739787/Computer-Basic-Every-Beginner-Should-Know';
const attitudeAcademyBlogUrl = 'https://pin.it/4QWIqM2A0';
const attitudeAcademySocialBookmarkingUrl = 'https://www.tumblr.com/attitude360/802354410788405248/video-editing-skills-that-boost-social-media?source=share';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-paper rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-paper/95 backdrop-blur-md border-b border-ink-100 px-6 sm:px-8 py-5 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold mb-2">
                  {project.type}
                </span>
                <h3 id="case-study-title" className="text-xl sm:text-2xl font-extrabold text-ink-900 leading-tight">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-9 h-9 rounded-full bg-ink-50 hover:bg-ink-100 flex items-center justify-center text-ink-600 transition-colors"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-6 flex flex-col gap-6">
              {project.id === 'ecommerce-marketplace-management' && project.coverImage && (
                <div className="flex min-h-[210px] items-center justify-center overflow-hidden rounded-xl border border-ink-100 bg-ink-50 p-3 sm:min-h-[250px]">
                  <img
                    src={project.coverImage}
                    alt={`${project.title} cover`}
                    className="max-h-[360px] w-full object-contain"
                  />
                </div>
              )}

              {/* Meta */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <div>
                  <span className="text-ink-400">Category: </span>
                  <span className="font-semibold text-ink-700">{project.category}</span>
                </div>
                <div>
                  <span className="text-ink-400">Services: </span>
                  <span className="font-semibold text-ink-700">{project.services}</span>
                </div>
              </div>

              {project.gallery && (
                <section aria-labelledby="project-visuals-title">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-extrabold tracking-widest text-accent-600 uppercase">Project Visual Gallery</span>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {project.gallery.map((visual) => (
                      <figure key={visual.num} className="overflow-hidden rounded-xl border border-ink-100 bg-cream">
                        <div className="flex min-h-[210px] items-center justify-center bg-ink-50 p-3 sm:min-h-[230px]">
                          {project.id === 'attitude-academy' && visual.label === 'Blog Submission' ? (
                            <a href={attitudeAcademyBlogUrl} target="_blank" rel="noopener noreferrer">
                              <img
                                src={visual.image}
                                alt={`${project.title} - ${visual.label}`}
                                className="max-h-[360px] w-full object-contain"
                              />
                            </a>
                          ) : (
                            <img
                              src={visual.image}
                              alt={`${project.title} - ${visual.label}`}
                              className="max-h-[360px] w-full object-contain"
                            />
                          )}
                        </div>
                        <figcaption className="border-t border-ink-100 bg-paper px-4 py-3">
                          <div className="flex items-start gap-2">
                            <span className="text-xs font-extrabold text-accent-600">{visual.num}</span>
                            <div>
                              <h4 className="text-sm font-bold text-ink-900">{visual.label}</h4>
                              <p className="mt-1 text-xs leading-relaxed text-ink-500">{visual.description}</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              {/* Sections */}
              {(project.id === 'solar' ? solarCaseStudySections : project.id === 'smart-view-tv-repair' ? smartViewCaseStudySections : project.id === 'attitude-academy' ? offPageCaseStudySections : project.id === 'ecommerce-marketplace-management' ? ecommerceCaseStudySections : caseStudySections).map((section) => (
                <div key={section.key}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-extrabold text-accent-600">{section.num}</span>
                    <h4 className="text-base font-bold text-ink-900">{section.label}</h4>
                  </div>
                  {(project.id === 'solar' && section.key === 'adsApproach') ||
                  (project.id === 'smart-view-tv-repair' && ['contentApproach', 'seoApproach', 'adsApproach'].includes(section.key)) ? (
                    <ul className="space-y-2 pl-8 text-sm leading-relaxed text-ink-600">
                      {project[section.key].split('\n').map((role) => <li key={role} className="list-disc pl-1">{role}</li>)}
                    </ul>
                  ) : (
                    <p className="pl-8 text-sm leading-relaxed text-ink-600">{project[section.key]}</p>
                  )}
                </div>
              ))}

              {project.id === 'ecommerce-marketplace-management' && project.ecommerceActivities && (
                <>
                  <section aria-labelledby="ecommerce-role-title">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-extrabold text-accent-600">03</span>
                      <h4 id="ecommerce-role-title" className="text-base font-bold text-ink-900">My Role</h4>
                    </div>
                    <div className="pl-8">
                      <p className="text-sm font-semibold text-ink-700">E-Commerce Management</p>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-600">
                        {project.contentApproach.split('\n').slice(1).map((role) => (
                          <li key={role} className="list-disc pl-1">{role.replace(/^•\s*/, '')}</li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <section aria-labelledby="ecommerce-activities-title">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-extrabold text-accent-600">04</span>
                      <h4 id="ecommerce-activities-title" className="text-base font-bold text-ink-900">E-Commerce Activities</h4>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.ecommerceActivities.map((activity) => (
                        <div key={activity.num} className="rounded-xl border border-ink-100 bg-cream/60 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <span className="text-xs font-extrabold text-accent-600">{activity.num}</span>
                            <div>
                              <h5 className="text-sm font-bold text-ink-900">{activity.title}</h5>
                              <p className="mt-1 text-xs leading-relaxed text-ink-500">{activity.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {project.workShowcase && (
                    <section aria-labelledby="ecommerce-showcase-title">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-extrabold text-accent-600">05</span>
                        <h4 id="ecommerce-showcase-title" className="text-base font-bold text-ink-900">Project Work Showcase</h4>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        {project.workShowcase.map((visual) => (
                          <figure key={visual.num} className="overflow-hidden rounded-xl border border-ink-100 bg-cream">
                            <div className="flex min-h-[210px] items-center justify-center bg-ink-50 p-3">
                              <img src={visual.image} alt={`${project.title} - ${visual.label}`} className="max-h-[360px] w-full object-contain" />
                            </div>
                            <figcaption className="border-t border-ink-100 bg-paper px-4 py-3">
                              <h5 className="text-sm font-bold text-ink-900">{visual.label}</h5>
                              <p className="mt-1 text-xs leading-relaxed text-ink-500">{visual.description}</p>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </section>
                  )}

                  {project.skills && (
                    <section aria-labelledby="ecommerce-skills-title">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-extrabold text-accent-600">06</span>
                        <h4 id="ecommerce-skills-title" className="text-base font-bold text-ink-900">Skills Demonstrated</h4>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-8">
                        {project.skills.map((skill) => (
                          <span key={skill} className="rounded-md bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-500">{skill}</span>
                        ))}
                      </div>
                    </section>
                  )}

                  {project.platform && (
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-accent-200 bg-accent-50 px-5 py-4">
                      <span className="text-sm font-semibold text-ink-700">Platform</span>
                      <span className="text-sm font-bold text-ink-900">{project.platform}</span>
                    </div>
                  )}
                </>
              )}

              {project.id === 'attitude-academy' && project.offPageActivities && (
                <section aria-labelledby="off-page-activities-title">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-extrabold text-accent-600">03</span>
                    <h4 id="off-page-activities-title" className="text-base font-bold text-ink-900">My Role</h4>
                  </div>
                  <div className="pl-8">
                    <p className="text-sm font-semibold text-ink-700">Off-Page SEO</p>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-600">
                      {project.contentApproach.split('\n').slice(1).map((role) => (
                        <li key={role} className="list-disc pl-1">{role.replace(/^•\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="text-sm font-extrabold text-accent-600">04</span>
                    <h4 className="text-base font-bold text-ink-900">Off-Page SEO Activities</h4>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.offPageActivities.map((activity) => (
                      <div key={activity.num} className="overflow-hidden rounded-xl border border-ink-100 bg-cream/60">
                        {activity.image && (activity.name === 'PPT Submission' ? (
                          <a
                            href={attitudeAcademySlideShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View PPT on SlideShare"
                            className="group relative flex h-36 cursor-pointer items-center justify-center bg-ink-50 p-2"
                          >
                            <img src={activity.image} alt={`${project.title} - ${activity.name}`} className="h-full w-full object-contain transition-opacity group-hover:opacity-80" />
                            <span className="absolute inset-0 flex items-center justify-center gap-1.5 bg-ink-900/45 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                              <Eye size={14} />
                              View PPT
                            </span>
                          </a>
                        ) : activity.name === 'Infographic Submission' ? (
                          <a
                            href={attitudeAcademyInfographicUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View infographic on Behance"
                            className="group relative flex h-36 cursor-pointer items-center justify-center bg-ink-50 p-2"
                          >
                            <img src={activity.image} alt={`${project.title} - ${activity.name}`} className="h-full w-full object-contain transition-opacity group-hover:opacity-80" />
                            <span className="absolute inset-0 flex items-center justify-center gap-1.5 bg-ink-900/45 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                              <Eye size={14} />
                              View Infographic
                            </span>
                          </a>
                        ) : activity.name === 'Blog Submission' ? (
                          <a
                            href={attitudeAcademyBlogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View blog on Pinterest"
                            className="group relative flex h-36 cursor-pointer items-center justify-center bg-ink-50 p-2"
                          >
                            <img src={activity.image} alt={`${project.title} - ${activity.name}`} className="h-full w-full object-contain transition-opacity group-hover:opacity-80" />
                            <span className="absolute inset-0 flex items-center justify-center gap-1.5 bg-ink-900/45 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                              <Eye size={14} />
                              View Blog
                            </span>
                          </a>
                        ) : activity.name === 'Social Bookmarking' ? (
                          <a
                            href={attitudeAcademySocialBookmarkingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View social bookmarking on Tumblr"
                            className="group relative flex h-36 cursor-pointer items-center justify-center bg-ink-50 p-2"
                          >
                            <img src={activity.image} alt={`${project.title} - ${activity.name}`} className="h-full w-full object-contain transition-opacity group-hover:opacity-80" />
                            <span className="absolute inset-0 flex items-center justify-center gap-1.5 bg-ink-900/45 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                              <Eye size={14} />
                              View Social Bookmarking
                            </span>
                          </a>
                        ) : (
                          <div className="flex h-36 items-center justify-center bg-ink-50 p-2">
                            <img src={activity.image} alt={`${project.title} - ${activity.name}`} className="h-full w-full object-contain" />
                          </div>
                        ))}
                        <div className="flex items-center gap-3 px-4 py-3">
                          <span className="text-xs font-extrabold text-accent-600">{activity.num}</span>
                          <span className="text-sm font-semibold text-ink-800">{activity.name}</span>
                        </div>
                        {activity.name === 'PPT Submission' && activity.file && (
                          <div className="px-4 pb-4">
                            <a
                              href={attitudeAcademySlideShareUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View PPT on SlideShare"
                              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-700"
                            >
                              <Eye size={14} />
                              View PPT
                            </a>
                          </div>
                        )}
                        {activity.name === 'PDF Submission' && (
                          <div className="px-4 pb-4">
                            <a
                              href="https://www.4shared.com/s/fEHDlxSzEfa"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex cursor-pointer items-center rounded-full bg-accent-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-700"
                            >
                              View PDF
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.id === 'attitude-academy' && (
                <section aria-labelledby="off-page-process-title" className="rounded-xl border border-accent-200 bg-accent-50 px-5 py-4">
                  <p id="off-page-process-title" className="text-xs font-extrabold uppercase tracking-widest text-accent-600">Off-Page SEO Process</p>
                  <div className="mt-3 flex flex-col items-start gap-2 text-sm font-semibold leading-relaxed text-ink-800">
                    {project.expectedGoal.split(' → ').map((step, index, steps) => (
                      <div key={step} className="flex flex-col items-start gap-2">
                        <span>{step}</span>
                        {index < steps.length - 1 && <span className="text-accent-600">↓</span>}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.id === 'solar' && (
                <div className="rounded-xl border border-accent-200 bg-accent-50 px-5 py-4">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-accent-600">Digital Presence Focus</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-ink-800">{project.expectedGoal}</p>
                </div>
              )}

              {project.id === 'smart-view-tv-repair' && (
                <div className="rounded-xl border border-accent-200 bg-accent-50 px-5 py-4">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-accent-600">Local Digital Presence</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-ink-800">{project.expectedGoal}</p>
                </div>
              )}

              {/* Concept disclaimer */}
              {project.id !== 'attitude-academy' && <div className="rounded-xl bg-accent-50 border border-accent-100 px-4 py-3">
                <p className="text-xs text-accent-800 font-medium">
                  Concept project — created to demonstrate my marketing approach.
                </p>
              </div>}

              {/* CTA */}
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-600 text-white text-sm font-semibold hover:bg-accent-700 transition-colors"
              >
                Discuss a Similar Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
