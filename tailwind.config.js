/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "11px",
        xs: "14px",
        sm: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "30px",
        "5xl": "33px",
        "6xl": "40px",
        "7xl": "50px",
        "8xl": "52px",
        "9xl": "60px",
      },
      colors: {
        white: "#ffffff",
        "dark-blue": "#110163",
        purple: "#81488e",
        "dark-gray": "#303030",
        "light-gray": "#6a6969",
        "light-pink": "#fbe8ff",
        blue: "#431ea6",
        green: "#85b6a6",
        "dark-green": "#076787",
        "light-purple": "#9d8fcd",
      },
    },
  },
  plugins: [],
};
