import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Header } from './Header';
import { ThemeProvider } from './ThemeProvider';

describe('Header', () => {
  it('renders the stable personal brand independently of name order', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    expect(html).toContain('vietdung.dev');
    expect(html).not.toContain('Nguyen.dev');
  });
});
