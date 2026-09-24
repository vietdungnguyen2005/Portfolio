import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Experience } from './Experience';

describe('Experience', () => {
  it('links both production sites and distinguishes ownership from contribution', () => {
    const html = renderToStaticMarkup(<Experience />);

    expect(html).toContain('Full-stack Developer Intern');
    expect(html).toContain('Independently built, deployed, and maintain');
    expect(html).toContain('href="https://valentinaphuquoc.com/"');
    expect(html).toContain('Contributed frontend features to');
    expect(html).toContain('href="https://phuquoctimes.com/"');
  });
});
