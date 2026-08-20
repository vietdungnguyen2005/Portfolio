import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Contact } from './Contact';

describe('Contact', () => {
  it('offers working direct contact actions instead of a placeholder form', () => {
    const html = renderToStaticMarkup(<Contact />);

    expect(html).not.toContain('<form');
    expect(html).toContain(`mailto:`);
  });
});
