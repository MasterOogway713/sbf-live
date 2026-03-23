/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind exactly which files to scan for class names
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sb-black': '#0a0a0a',
        'sb-gold': '#D4AF37',
        'sb-cream': '#F9F8F6',
        'sb-dark': '#1A1A1A'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif']
      },
      letterSpacing: {
        'luxury': '0.25em',
        'super-wide': '0.35em'
      }
    },
  },
  plugins: [],
}