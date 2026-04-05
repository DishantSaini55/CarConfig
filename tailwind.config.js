/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9fafb',
          900: '#0a0a0a',
          950: '#050505',
        },
        gold: {
          400: '#d4af37',
          500: '#c9a961',
          600: '#b8860b',
        },
        silver: {
          300: '#d1d5db',
          400: '#9ca3af',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
