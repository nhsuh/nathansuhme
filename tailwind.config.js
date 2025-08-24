/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9A85',          // soft coral sunset
        secondary: '#FFB4A6',        // peachy pink
        accent: {
          purple: '#D4A5E8',         // soft lavender
          orange: '#FFD4A3',         // gentle apricot
          rose: '#F7B2BD',           // muted rose
          gold: '#F5D08A',           // warm sunrise gold
        },
        neutral: {
          50:  '#FAF7F5',            // softer warm off-white
          100: '#F5F0EB',            // muted peachy beige
          200: '#E8D5C4',            // soft warm beige
          300: '#D4B5A0',            // light warm brown
          400: '#B8967F',            // medium warm brown
          500: '#9D7C6F',            // darker warm brown
          600: '#7A5D52',            // deep warm brown
          700: '#5A453E',            // dark warm brown
          800: '#3D2D27',            // very dark warm
          900: '#2A1F1B',            // almost black warm
          950: '#1A1310',            // deep warm black
        },
        background: {
          light: '#FAF7F5',          // much softer warm white
          dark: '#2A1F1B',           // warm dark
        }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],     // elegant serif for headings
        body: ['var(--font-space-grotesk)', 'sans-serif'],     // clean modern sans for body
        code: ['"JetBrains Mono"', 'monospace'],     // technical monospace
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}; 