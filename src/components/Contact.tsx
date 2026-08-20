'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import { Section } from '@/components/Section';
import { profile, socials } from '@/lib/data';

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk about backend systems.">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="border-brutal bg-peach p-5 shadow-brutalLg sm:p-7 md:p-9">
          <p className="brutal-label inline-block bg-lemon">Open to backend internships</p>
          <h3 className="mt-6 max-w-2xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
            Need someone who cares about what happens when requests race, fail, or get retried?
          </h3>
          <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#17151f]/75 sm:text-lg">
            I am interested in Backend Engineer internship opportunities where correctness, maintainable Java services, and clear
            operational behavior matter.
          </p>
          <motion.a
            href={`mailto:${profile.email}?subject=Backend%20Engineer%20Intern%20opportunity`}
            className="btn-brutal mt-7 inline-flex bg-purple text-white"
            whileHover={{ y: -4, rotate: -1 }}
            whileTap={{ scale: 0.94 }}
          >
            <Mail size={22} aria-hidden="true" />
            Email me
            <ArrowRight size={22} aria-hidden="true" />
          </motion.a>
        </div>

        <aside className="space-y-4">
          <div className="border-brutal bg-mint p-5 shadow-brutalLg sm:p-6">
            <h3 className="text-xl font-black sm:text-2xl">Get in touch</h3>
            <div className="mt-4 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm font-black text-[#17151f]/80 transition-colors hover:text-[#17151f] sm:text-base">
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-black text-[#17151f]/80 transition-colors hover:text-[#17151f] sm:text-base">
                <Phone size={18} aria-hidden="true" />
                {profile.phone}
              </a>
              <span className="flex items-center gap-3 text-sm font-black text-[#17151f]/65 sm:text-base">
                <MapPin size={18} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="border-brutal bg-page p-5 shadow-brutalLg sm:p-6">
            <h3 className="text-lg font-black">Find me online</h3>
            <div className="mt-4 grid gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="border-brutal flex items-center justify-between bg-page px-4 py-3 font-black shadow-brutalSm transition-transform hover:-translate-y-1"
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="flex items-center gap-3">
                    <social.icon size={20} aria-hidden="true" />
                    {social.label}
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
