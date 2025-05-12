import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'SF Pro Display'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
