/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "palatinate-blue": '#2B3BE5',
        "coarse-wool": '#1D1A27',
        "ghost-white": '#FBF8FF',
        "pale-marigold": '#FFBE47',
        "rare-wind": '#5BFBD8',
        "brave-purple": '#968AB6'
      },
      boxShadow: {
        'purple-sm': '0px 2px 10px rgba(43, 59, 229, 0.2)',
        'purple-md': '0px 10px 30px rgba(43, 59, 229, 0.3)',
        'black-sm': '0px 2px 30px rgba(0, 0, 0, 0.04)',
        'black-md': '0px 5px 50px rgba(0, 0, 0, 0.05)'
      },
      dropShadow: {
        'purple-sm': '0px 10px 50px rgba(43, 59, 229, 0.08)'
      },
      fontFamily: {
        'outfit': ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

