import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D2B52',
        gold: '#f59e0b',
        ink: '#2D2D2D',
        muted: '#6B7280',
        canvas: '#F8F9FA',
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(13, 43, 82, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
