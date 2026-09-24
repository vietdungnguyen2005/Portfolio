import { ArrowUpRight, BookOpenText } from 'lucide-react';

import { Section } from '@/components/Section';

const announcement =
  'https://inseclab.uit.edu.vn/chuc-mung-van-khoi-viet-dung-va-duc-trung-co-bai-bao-khoa-hoc-duoc-chap-nhan-dang-tai-hoi-nghi-quoc-te-fdse-2026/';

export function Research() {
  return (
    <Section id="research" eyebrow="Research" title="A research question beyond the codebase.">
      <article className="border-brutal grid gap-6 bg-page p-5 shadow-brutalLg sm:p-7 lg:grid-cols-[1fr_2fr] lg:gap-10">
        <div className="flex flex-col items-start gap-4">
          <span className="brutal-label bg-lilac">Accepted · FDSE 2026</span>
          <BookOpenText size={54} strokeWidth={1.6} aria-hidden="true" />
          <p className="text-sm font-bold leading-6 text-ink/70">
            Co-author · The 13th International Conference on Future Data and Security Engineering
          </p>
        </div>
        <div>
          <h3 className="max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
            RAG-VM: A Retrieval-Augmented Generation Framework for Vulnerability Management
          </h3>
          <p className="mt-4 max-w-3xl text-sm font-bold leading-7 text-ink/75 sm:text-base">
            Research on using task-specific retrieval and evidence to support vulnerability-management work,
            including security bug identification, CVSS assessment, patch correctness analysis, and stable-patch classification.
          </p>
          <p className="mt-3 text-sm font-bold leading-6 text-ink/65">
            Accepted for FDSE 2026. The conference proceedings are expected in Springer CCIS; publication details are pending.
          </p>
          <a href={announcement} target="_blank" rel="noreferrer" className="btn-mini mt-6 gap-2">
            InSecLab announcement
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </article>
    </Section>
  );
}
