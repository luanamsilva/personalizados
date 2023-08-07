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
        'rose': '#F8EBF3',
        'light': '#FDFBFB',
        'brown': '#88704A',
      },
      scale: {
        '175': '1.75',
      },
      width: {
        '300': '300px',
      },
      height: {
        '300': '300px',
        '400': '400px',
        '500': '500px',
      },
    
    },
  },
  plugins: [ require('@tailwindcss/typography'),],
}
