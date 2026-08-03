'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

import { Section } from '@/components/Section';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building things.">
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            className="border-brutal bg-page p-5 shadow-brutalLg sm:p-6"
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-black sm:text-2xl">{exp.title}</h3>
                <p className="mt-1 text-base font-bold text-ink/72">{exp.company}</p>
              </div>
              <div className="flex flex-col gap-1 text-sm font-bold text-ink/60">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} aria-hidden="true" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} aria-hidden="true" />
                  {exp.location}
                </span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold leading-6 text-ink/75 sm:text-base">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-purple" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}