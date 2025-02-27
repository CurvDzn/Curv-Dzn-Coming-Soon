/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradientBG 15s ease infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'pulse-text': 'pulseText 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shooting-star': 'shootingStar 5s ease-out infinite',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
    },
  },
  plugins: [],
};