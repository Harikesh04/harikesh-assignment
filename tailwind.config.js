/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter"],
      },
      colors: {
        customGrey:"#EFF2F5",
        customGreen:"#0FBA83",
        customDarkBlue:"#0141CF",
      },
      screens: {
        'xs': '400px', // Defined custom breakpoint at 400px
      },
    },
  },
  plugins: [],
};
