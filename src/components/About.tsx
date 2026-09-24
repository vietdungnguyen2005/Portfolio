'use client';

import { motion } from 'framer-motion';

import { Section } from '@/components/Section';
import { highlights, skillGroups } from '@/lib/data';

export function About() {
  return (
    <Section id="about" eyebrow="Engineering focus" title="Backend-first, comfortable across the web stack.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="border-brutal bg-mint p-5 shadow-brutalLg sm:p-6">
          <p className="text-lg font-black leading-7 sm:text-xl sm:leading-8">
            I work primarily with Java and Spring Boot for backend development, while my production experience also
            covers TypeScript, React, Next.js, and third-party API integration.
          </p>
          <p className="mt-5 text-base font-bold leading-7 text-[#17151f]/75">
            Across personal projects and internship work, I use PostgreSQL, Redis, automated testing, Git, CI, and
            Docker to build and deliver useful web applications.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="border-brutal bg-page p-4 shadow-brutal sm:p-5"
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              whileHover={{ y: -6, rotate: index % 2 ? 1 : -1 }}
            >
              <item.icon size={34} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm font-bold leading-6 text-ink/72">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-8 border-brutal bg-page p-4 shadow-brutalLg sm:mt-10 sm:p-5" aria-label="Engineering skills">
        <p className="mb-5 font-black uppercase">Toolkit</p>
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-brutal bg-page p-3 sm:p-4">
              <h3 className={`border-2 border-ink px-2 py-1 text-sm font-black uppercase text-[#17151f] ${group.accent}`}>
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="border-2 border-ink bg-page px-2 py-1 text-xs font-bold text-ink sm:text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
