/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary:'#63B178',
       bg:'#F8F8F8',
       joinbg:"#F2FAF5",
       cardbg:"#F2FAF5",

      },
    },
  },
  plugins: [],
};
