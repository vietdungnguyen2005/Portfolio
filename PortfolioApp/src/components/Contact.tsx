'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import { Section } from '@/components/Section';
import { profile, socials } from '@/lib/data';

export function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Message drafted. Connect this form to your preferred email or API when you are ready.');
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something that makes recruiters stop scrolling.">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-8">
        <form onSubmit={handleSubmit} className="border-brutal bg-peach p-4 shadow-brutalLg sm:p-5 md:p-7">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="form-field">
              <span>Name</span>
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>
          </div>
          <label className="form-field mt-5">
            <span>Message</span>
            <textarea name="message" required rows={6} placeholder="Tell me about the role, team, or project." />
          </label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <motion.button type="submit" className="btn-brutal bg-purple text-white" whileHover={{ y: -4, rotate: -1 }} whileTap={{ scale: 0.94 }}>
              <Send size={22} aria-hidden="true" />
              Send hello
            </motion.button>
            <p className="text-sm font-black" aria-live="polite">
              {status}
            </p>
          </div>
        </form>

        <aside className="space-y-4">
          <div className="border-brutal bg-mint p-5 shadow-brutalLg sm:p-6">
            <h3 className="text-xl font-black sm:text-2xl">Get in touch</h3>
            <div className="mt-4 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm font-black text-ink/80 transition-colors hover:text-ink sm:text-base">
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-black text-ink/80 transition-colors hover:text-ink sm:text-base">
                <Phone size={18} aria-hidden="true" />
                {profile.phone}
              </a>
              <span className="flex items-center gap-3 text-sm font-black text-ink/60 sm:text-base">
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
                  download={social.label === 'Download CV' ? true : undefined}
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