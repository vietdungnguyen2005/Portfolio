'use client';

import { motion } from 'framer-motion';

import { Section } from '@/components/Section';
import { highlights, skillTags } from '@/lib/data';

export function About() {
  return (
    <Section id="about" eyebrow="Backend focus" title="Business rules first. Failure paths included.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="border-brutal bg-mint p-5 shadow-brutalLg sm:p-6">
          <p className="text-lg font-black leading-7 sm:text-xl sm:leading-8">
            I build Java and Spring Boot services for workflows where duplicate requests, concurrent updates, malformed
            data, and unreliable dependencies are normal engineering constraints—not edge cases to ignore.
          </p>
          <p className="mt-5 text-base font-bold leading-7 text-[#17151f]/75">
            I model invariants explicitly, keep transactions short, make recovery observable in the domain, and verify the
            result against real PostgreSQL and Redis instances with integration tests.
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

      <div className="mt-8 min-h-48 border-brutal bg-lemon p-4 shadow-brutalLg sm:mt-10 sm:min-h-56 sm:p-5" aria-label="Backend engineering skills">
        <p className="mb-5 font-black uppercase">Backend toolkit</p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skillTags.map((skill, index) => (
            <motion.button
              key={skill}
              type="button"
              drag
              dragConstraints={{ top: -24, bottom: 24, left: -24, right: 24 }}
              className="border-brutal cursor-grab bg-page px-3 py-2 text-xs font-black uppercase shadow-brutalSm active:cursor-grabbing sm:px-4 sm:py-3 sm:text-sm"
              whileHover={{ y: -5, rotate: index % 2 ? 2 : -2 }}
              whileTap={{ scale: 0.94 }}
              aria-label={`${skill} skill sticker`}
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  );
}
