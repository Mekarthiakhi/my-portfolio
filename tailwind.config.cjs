/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-indigo': '#6366f1', // indigo-500
        'brand-cyan': '#06b6d4', // cyan-500
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradientMove 8s ease infinite',
      },
    },
  },
  plugins: [],
};
