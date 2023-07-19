/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'pagebg': '#FEF1F9',
        'main': '#966978',
        'light': '#FDFBFB',
        'brown': '#88704A',
      }
    },
  },
  plugins: [],
}
