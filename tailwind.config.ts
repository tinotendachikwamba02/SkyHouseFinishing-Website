import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1C4F',
        sky: '#2D67F1',
        skyBright: '#38BDF8',
        badge: '#4472F2',
        ink: '#191A1E',
        muted: '#5C6675',
        canvas: '#F9FAFF',
        midnight: '#0A1C4F',
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(0, 38, 91, 0.24)',
      },
    },
  },
  plugins: [],
} satisfies Config;
