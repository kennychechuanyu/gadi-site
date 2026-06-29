/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ─── Neutral dark — charcoal/blue-black ground, lavender starlight ───
        // Backgrounds + text are neutral (no purple cast); lavender appears only
        // as the accent (links, CTAs, the node-network stars).
        violet: {
          50:  '#f4f3f8',
          100: '#e8e6f0',
          200: '#d8d4e6',
          300: '#d2cfe6',  // bright star / hover
          400: '#c2bdda',  // accent — links, numerals, highlights
          500: '#b3abd4',  // CTA fill (with dark text)
          600: '#9990bf',
          700: '#6f6796',
          800: '#2a2e36',  // border-weight (neutral, matches line)
          900: '#0f1216',  // ground
          950: '#0a0c0f',
        },
        // Page ground + raised surfaces — neutral near-black
        ground: {
          DEFAULT: '#0f1216',  // neutral blue-black
          deep:    '#0a0c0f',  // darker bands
        },
        surface: {
          DEFAULT: '#181b21',  // cards / alternating sections
          raised:  '#21252d',  // hover / raised
        },
        line: {
          DEFAULT: '#2a2e36',  // borders
          soft:    '#20242b',
        },
        // Neutral off-white text scale (100 = brightest)
        lav: {
          DEFAULT: '#ececef',
          100: '#ececef',
          200: '#d4d7dd',
          300: '#9aa0ab',
          400: '#767c87',
          500: '#595f69',
        },
        ink: {
          50:  '#f0f1f3',
          100: '#dddfe4',
          200: '#bec3cc',
          300: '#929bad',
          400: '#6a7589',
          500: '#4f5a6e',
          600: '#3d4759',
          700: '#2d3545',
          800: '#1e2534',
          900: '#0f1318',
          950: '#080c10',
        },
        // Brand accent — derived from logo indigo/purple nodes
        indigo: {
          50:  '#f3f2f9',
          100: '#e4e1f2',
          200: '#c8bfea',  // logo: light lavender node
          300: '#a99dd6',
          400: '#9b8fd6',  // logo: medium purple node
          500: '#7b6dbf',
          600: '#6055a0',  // logo: darker purple node
          700: '#4a4188',
          800: '#332e6b',
          900: '#1e1b4b',  // logo: deep indigo circle
          950: '#12102e',
        },
        // Secondary accent — from logo wordmark, used for CTAs only
        amber: {
          50:  '#fdf8f0',
          100: '#fbeedd',
          200: '#f5d9b3',
          300: '#ecbd7e',
          400: '#e09c4a',
          500: '#c4832a',
          600: '#a46920',
          700: '#83521a',
          800: '#6a4115',
          900: '#573512',
        },
        cream: {
          50:  '#fdfbf8',
          100: '#f8f3eb',
          200: '#f0e8d7',
          300: '#e5d9c4',
          400: '#d6c5a8',
          500: '#c2aa8a',
        },
        stone: {
          400: '#b4a99a',
          500: '#9a8c7e',
          600: '#7d7265',
          700: '#5f5549',
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
