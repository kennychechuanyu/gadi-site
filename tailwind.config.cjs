/** @type {import('tailwindcss').Config} */
const tone = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          50: tone('violet-50'),
          100: tone('violet-100'),
          200: tone('violet-200'),
          300: tone('violet-300'),
          400: tone('violet-400'),
          500: tone('violet-500'),
          600: tone('violet-600'),
          700: tone('violet-700'),
          800: tone('violet-800'),
          900: tone('violet-900'),
          950: tone('violet-950'),
        },
        ground: {
          DEFAULT: tone('ground'),
          deep: tone('ground-deep'),
        },
        surface: {
          DEFAULT: tone('surface'),
          raised: tone('surface-raised'),
        },
        line: {
          DEFAULT: tone('line'),
          soft: tone('line-soft'),
        },
        lav: {
          DEFAULT: tone('lav'),
          100: tone('lav'),
          200: tone('lav-200'),
          300: tone('lav-300'),
          400: tone('lav-400'),
          500: tone('lav-500'),
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Sora', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.12em',
        wide: '0.06em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
