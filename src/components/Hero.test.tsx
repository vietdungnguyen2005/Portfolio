import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Hero } from './Hero';

describe('Hero', () => {
  it('introduces both Java backend and production web work without a role-specific internship label', () => {
    const html = renderToStaticMarkup(<Hero />);

    expect(html).toContain('I build reliable web applications and Java backend services.');
    expect(html).toContain('full-stack developer intern');
    expect(html).not.toContain('Backend Engineer Intern');
  });

  it('describes the photographic avatar accurately', () => {
    const html = renderToStaticMarkup(<Hero />);

    expect(html).toContain('alt="Portrait photo of Nguyen Viet Dung"');
  });
});
