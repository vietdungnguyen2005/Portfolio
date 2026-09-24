import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { experiences, profile, projects, skillGroups } from './data';

describe('portfolio positioning', () => {
  it('uses the canonical Vietnamese name without implying an inactive custom domain', () => {
    expect(profile.name).toBe('Nguyen Viet Dung');
    expect(profile.brand).toBe('vietdung');
  });

  it('uses a role that fits the submitted Java, software developer, and full-stack CVs', () => {
    expect(profile.role).toBe('Software Developer');
  });

  it('links to the canonical LinkedIn profile', () => {
    expect(profile.linkedin).toBe(
      'https://www.linkedin.com/in/nguy%E1%BB%85n-vi%E1%BB%87t-d%C5%A9ng-b4a723355/'
    );
  });

  it('shows backend, web, and delivery skills for the submitted role families', () => {
    expect(skillGroups.map((group) => group.title)).toEqual([
      'Backend', 'Web', 'Data, testing & delivery'
    ]);
    const visibleSkills = skillGroups.flatMap((group) => group.skills);
    expect(visibleSkills).toEqual(expect.arrayContaining([
      'Java 21', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'JUnit 5', 'Docker'
    ]));
    expect(visibleSkills).not.toEqual(expect.arrayContaining(['AWS', 'Terraform', 'Kubernetes']));
  });

  it('leads with V-Market while preserving the existing project repository links', () => {
    expect(projects.map((project) => project.focus)).toEqual([
      'Transactional commerce & data ingestion',
      'Concurrency & consistency',
      'Failure containment'
    ]);
    expect(projects.map((project) => project.github)).toEqual([
      'https://github.com/vietdungnguyen2005/Project2',
      'https://github.com/vietdungnguyen2005/Project1',
      'https://github.com/vietdungnguyen2005/Project3'
    ]);
    expect(projects.every((project) => project.evidence.startsWith('https://github.com/'))).toBe(true);
    expect(projects[2].demo).toBe(
      'https://v-pulse-payment-ops.vmarket-vietdung2005.workers.dev'
    );
  });

  it('ships every project image referenced by the portfolio', () => {
    for (const project of projects) {
      expect(existsSync(join(process.cwd(), 'public', project.image))).toBe(true);
    }
  });

  it('describes the internship as full-stack work', () => {
    expect(experiences[0].title).toBe('Full-stack Developer Intern');
  });

  it('keeps the skill summary concise and evidence-based', () => {
    expect(skillGroups.flatMap((group) => group.skills)).toHaveLength(16);
  });
});
