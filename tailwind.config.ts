import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      mono: ['var(--font-mono)'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
