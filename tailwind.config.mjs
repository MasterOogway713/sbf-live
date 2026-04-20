/** @type {import('tailwindcss').Config} */
export default {
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
      },
      animation: { 
        'fade-in-up': 'fadeInUp 1.2s ease-out forwards', 
        'fade-in': 'fadeIn 1s ease-out forwards' 
      },
      keyframes: {
        fadeInUp: { 
          '0%': { opacity: '0', transform: 'translateY(20px)' }, 
          '100%': { opacity: '1', transform: 'translateY(0)' } 
        },
        fadeIn: { 
          '0%': { opacity: '0' }, 
          '100%': { opacity: '1' } 
        }
      }
    },
  },
  plugins: [],
}
