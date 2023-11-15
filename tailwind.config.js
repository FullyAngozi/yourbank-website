import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'green1': "#CAFF33",
        "green2": "#D1FF4C",
        "green3": '#D8FF66',
        "green4": '#E5FF99',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      }
    },
  },
  plugins: [
    flowbitePlugin,
  ],
};
