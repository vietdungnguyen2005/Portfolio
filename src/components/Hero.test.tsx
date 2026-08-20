import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Hero } from './Hero';

describe('Hero', () => {
  it('leads with backend positioning and no broken resume action', () => {
    const html = renderToStaticMarkup(<Hero />);

    expect(html).toContain('Backend Engineer');
    expect(html).not.toContain('Download CV');
    expect(html).not.toContain('Available for frontend roles');
  });
});
