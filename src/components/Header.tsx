'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

import { navItems, profile } from '@/lib/data';
import { useTheme } from '@/components/ThemeProvider';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-4 border-ink bg-page/92 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="border-brutal bg-lemon px-3 py-2 text-xs font-black uppercase shadow-brutalSm transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-purple sm:text-sm"
        >
          {profile.name.split(' ')[0]}.dev
        </a>
        <div className="order-3 flex w-full items-center gap-2 overflow-x-auto pb-1 md:order-none md:w-auto md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-brutal px-3 py-2 text-xs font-black uppercase transition-colors hover:bg-ink hover:text-page focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-purple sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
        <motion.button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
          className="border-brutal grid size-10 place-items-center bg-mint shadow-brutalSm focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-purple sm:size-11"
          whileHover={{ rotate: -6, y: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          {theme === 'light' ? <Moon aria-hidden="true" size={20} /> : <Sun aria-hidden="true" size={20} />}
        </motion.button>
      </nav>
    </header>
  );
}
