'use client';

import { motion } from 'framer-motion';

import { Section } from '@/components/Section';
import { highlights, skillTags } from '@/lib/data';

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="A frontend developer who likes neat code and noisy buttons.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="border-brutal bg-mint p-5 shadow-brutalLg sm:p-6">
          <p className="text-lg font-black leading-7 sm:text-xl sm:leading-8">
            I build responsive web products with React, Next.js, TypeScript, and Tailwind CSS. My sweet spot is turning
            rough product ideas into interfaces that feel clear, lively, and reliable.
          </p>
          <p className="mt-5 text-base font-bold leading-7 text-ink/75">
            I pay attention to component architecture, accessibility, loading speed, and the small motion details that make
            a product feel cared for. I like UI that has personality, but I like maintainable code even more.
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

      <div className="mt-8 min-h-48 border-brutal bg-lemon p-4 shadow-brutalLg sm:mt-10 sm:min-h-56 sm:p-5" aria-label="Draggable skill tags">
        <p className="mb-5 font-black uppercase">Drag the skill stickers</p>
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
