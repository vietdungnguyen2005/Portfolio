import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Contact } from './Contact';

describe('Contact', () => {
  it('offers a mailto contact action that works with the visitor’s mail client', () => {
    const html = renderToStaticMarkup(<Contact />);

    expect(html).not.toContain('<form');
    expect(html).toContain('mailto:vietdungnguyen2005@gmail.com');
    expect(html).not.toContain('mail.google.com');
  });

  it('welcomes software development roles across backend and full-stack work', () => {
    const html = renderToStaticMarkup(<Contact />);

    expect(html).toContain('Open to software engineering opportunities');
    expect(html).toContain('Java backend');
    expect(html).toContain('full-stack web engineering');
    expect(html).not.toContain('Open to backend internships');
  });
});
