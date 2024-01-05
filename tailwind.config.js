/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green1: "#CAFF33",
        green2: "#D1FF4C",
        green3: "#D8FF66",
        green4: "#E5FF99",
        primarygray: "#1A1A1A",
        secondarygray: "#1C1C1C",
        "text-gray": "#B3B3B3",
        "lightergray": "#333333",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      boxShadow: {
        'custom': '10px 10px 5px 0px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
