import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';

describe('theme surface colors', () => {
  it('pairs the theme page background with the matching foreground color', () => {
    const css = readFileSync(new URL('./globals.css', import.meta.url), 'utf8');

    expect(css).toMatch(/\.bg-page\s*{[\s\S]*?color:\s*var\(--ink\)/);
  });
});
