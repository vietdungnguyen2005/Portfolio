'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

import { Section } from '@/components/Section';
import { education } from '@/lib/data';

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I'm sharpening my fundamentals.">
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <motion.article
            key={edu.school}
            className="border-brutal bg-page p-5 shadow-brutalLg sm:p-6"
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-black sm:text-2xl">{edu.degree}</h3>
                <p className="mt-1 text-base font-bold text-ink/72">{edu.school}</p>
              </div>
              <div className="flex flex-col gap-1 text-sm font-bold text-ink/60">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} aria-hidden="true" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} aria-hidden="true" />
                  {edu.location}
                </span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {edu.details.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold leading-6 text-ink/75 sm:text-base">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-mint" aria-hidden="true" />
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