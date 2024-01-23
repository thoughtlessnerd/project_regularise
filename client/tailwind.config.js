/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text:"#FBFCFE",
        background:"#0D131F",
        background2:"#060C15",
        accent:"#29A7EE",
        primary:"#3A5CD6",
        secondary:"#102548",
        red:"#F54E4E",
      },
      width: {
        '128': '32rem',
        '160': '40rem',
      },
      height: {
        '128': '32rem',
        '160': '40rem',
        '200': '50rem',
      }
    },
  },
  plugins: [],
}

