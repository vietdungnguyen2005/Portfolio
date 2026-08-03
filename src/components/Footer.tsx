import { HeartHandshake } from 'lucide-react';

import { navItems, profile } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-page">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-5 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2 text-xs font-black uppercase sm:text-sm">
          <HeartHandshake size={18} aria-hidden="true" />
          Built by {profile.name}
        </p>
        <nav className="flex flex-wrap gap-3 sm:gap-4" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-black uppercase underline decoration-4 underline-offset-4 sm:text-sm">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
