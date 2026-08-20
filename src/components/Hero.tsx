'use client';

import Image from 'next/image';
import { ArrowDownRight, Github, Mail, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { profile } from '@/lib/data';

const words = ['Java 21', 'Spring Boot', 'PostgreSQL'];

export function Hero() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.45], [0, -8]);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-4 border-ink bg-page pt-32 sm:pt-36 lg:pt-28"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid mx-auto grid min-h-[calc(100svh-96px)] max-w-6xl items-center gap-8 px-4 pb-14 sm:px-5 md:gap-10 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[1.08fr_0.92fr] lg:pb-20">
        <div className="relative z-10">
          <motion.p
            className="brutal-label mb-5 inline-flex max-w-full items-center gap-2 bg-mint"
            initial={{ y: 20, opacity: 0, rotate: -2 }}
            animate={{ y: 0, opacity: 1, rotate: -2 }}
            transition={{ duration: 0.35 }}
          >
            <Sparkles size={18} aria-hidden="true" />
            Viet Dung Nguyen · Backend Engineer Intern
          </motion.p>
          <motion.h1
            id="hero-title"
            className="hero-title max-w-4xl font-black leading-[0.94] tracking-normal text-ink"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.06, duration: 0.42 }}
          >
            I build backends that stay correct when real-world traffic gets messy.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-base font-bold leading-7 text-ink/78 sm:text-lg sm:leading-8 lg:text-xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.42 }}
          >
            {profile.headline} My work focuses on transactions, concurrency, data migration, failure containment, and
            integration tests that prove the difficult paths.
          </motion.p>
          <motion.div
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.42 }}
          >
            <a href="#projects" className="btn-brutal bg-purple text-white">
              See projects
              <ArrowDownRight size={22} aria-hidden="true" />
            </a>
            <a href={profile.github} className="btn-brutal bg-mint" target="_blank" rel="noreferrer">
              <Github size={22} aria-hidden="true" />
              GitHub
            </a>
            <a href="#contact" className="btn-brutal bg-peach">
              <Mail size={22} aria-hidden="true" />
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div className="relative z-10 mx-auto w-full max-w-[22rem] sm:max-w-md lg:justify-self-end" style={{ rotate }}>
          <div className="border-brutal relative overflow-hidden bg-peach p-3 shadow-brutalLg sm:p-4">
            <Image
              src="/images/avatar.webp"
              alt="Graphic portrait of Viet Dung Nguyen labeled Java 21 and Backend"
              width={720}
              height={720}
              priority
              className="border-brutal aspect-square w-full object-cover"
            />
            <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className="border-brutal bg-page px-2 py-2 text-center text-[0.68rem] font-black uppercase shadow-brutalSm sm:py-3 sm:text-sm"
                  initial={{ y: index % 2 ? 12 : -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.35, ease: 'easeOut' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div aria-hidden="true" className="hero-stripe" />
    </section>
  );
}
