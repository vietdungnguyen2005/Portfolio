'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { Section } from '@/components/Section';
import { projects, techFilters } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.tech.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <Section id="projects" eyebrow="Projects" title="Real products, real metrics, real links.">
      <div className="responsive-scroll mb-8 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0" role="group" aria-label="Project technology filters">
        {techFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn('border-brutal shrink-0 px-3 py-2 text-xs font-black uppercase shadow-brutalSm transition-transform hover:-translate-y-1 sm:px-4 sm:py-3 sm:text-sm', activeFilter === filter ? 'bg-purple text-white' : 'bg-page')}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProject === project.title;
            return (
              <motion.article
                layout
                key={project.title}
                className="border-brutal bg-page p-3 shadow-brutalLg sm:p-4"
                initial={{ scale: 0.92, opacity: 0, rotate: -1 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
              >
                <div className={cn('border-brutal overflow-hidden p-2 sm:p-3', project.accent)}>
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    width={920}
                    height={560}
                    loading="lazy"
                    className="border-brutal aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-black sm:text-2xl">{project.title}</h3>
                    <span className="shrink-0 border-2 border-ink bg-lemon px-2 py-0.5 text-[0.65rem] font-black uppercase">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-black uppercase text-ink/50">{project.role}</p>
                  <p className="mt-3 text-sm font-bold leading-6 text-ink/72 sm:text-base sm:leading-7">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {project.tech.map((tech) => (
                      <li key={tech} className="border-2 border-ink bg-lemon px-2 py-1 text-xs font-black uppercase">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Case study expandable */}
                  <button
                    type="button"
                    onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                    className="mt-4 text-sm font-black text-purple underline decoration-2 underline-offset-2 transition-colors hover:text-ink"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Hide case study ↑' : 'View case study ↓'}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-4 border-t-2 border-ink/10 pt-4">
                          <div>
                            <h4 className="text-sm font-black uppercase text-ink/60">Challenge</h4>
                            <p className="mt-1 text-sm font-bold leading-6 text-ink/75">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-black uppercase text-ink/60">Solution</h4>
                            <p className="mt-1 text-sm font-bold leading-6 text-ink/75">{project.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-black uppercase text-ink/60">Results</h4>
                            <ul className="mt-1 space-y-1">
                              {project.results.map((result, i) => (
                                <li key={i} className="flex gap-2 text-sm font-bold leading-6 text-ink/75">
                                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-mint" aria-hidden="true" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href={project.github} className="btn-mini" target="_blank" rel="noreferrer">
                      <Github size={18} aria-hidden="true" />
                      GitHub
                    </a>
                    <a href={project.demo} className="btn-mini" target="_blank" rel="noreferrer">
                      <ExternalLink size={18} aria-hidden="true" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}