import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('section-shell scroll-mt-28 py-14 sm:py-20 md:py-24 lg:py-28', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="brutal-label mb-3 inline-block rotate-[-1deg]">{eyebrow}</p>
            <h2 className="section-title max-w-3xl font-black leading-none tracking-normal">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
