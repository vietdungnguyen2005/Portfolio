import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { experiences, profile, projects, skillTags } from './data';

describe('portfolio positioning', () => {
  it('positions Viet Dung as a backend engineer', () => {
    expect(profile.role).toBe('Backend Engineer Intern');
  });

  it('keeps the visible skill set focused on backend engineering', () => {
    expect(skillTags).toEqual(
      expect.arrayContaining(['Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'Testcontainers'])
    );
    expect(skillTags).not.toEqual(expect.arrayContaining(['AWS', 'Terraform', 'Kubernetes']));
  });

  it('presents the three current backend case studies and their evidence', () => {
    expect(projects.map((project) => project.focus)).toEqual([
      'Concurrency & consistency',
      'Legacy modernization',
      'Failure containment'
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

  it('keeps the intern skill summary concise and evidence-based', () => {
    expect(skillTags).toHaveLength(12);
    expect(skillTags).toEqual(
      expect.arrayContaining(['Java 21', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'JUnit 5'])
    );
  });
});
