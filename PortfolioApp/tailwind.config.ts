import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        page: 'rgb(var(--page-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        lemon: 'rgb(var(--lemon-rgb) / <alpha-value>)',
        mint: 'rgb(var(--mint-rgb) / <alpha-value>)',
        peach: 'rgb(var(--peach-rgb) / <alpha-value>)',
        purple: 'rgb(var(--purple-rgb) / <alpha-value>)',
        lilac: 'rgb(var(--lilac-rgb) / <alpha-value>)'
      },
      boxShadow: {
        brutal: '8px 8px 0 var(--shadow-color)',
        brutalLg: '12px 12px 0 var(--shadow-color)',
        brutalSm: '5px 5px 0 var(--shadow-color)'
      },
      borderRadius: {
        brutal: '8px'
      }
    }
  },
  plugins: []
};

export default config;
