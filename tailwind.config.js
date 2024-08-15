/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "600px": "600px",
      },
      height: {
        "500px": "500px",
      },
      colors: {
        primary: {
          "dark-cyan": "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
        },
        neutral: {
          "very-dark-blue": "hsl(212, 21%, 14%)",
          "dark-grayish-blue": "hsl(228, 12%, 48%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      letterSpacing: {
        wide: "6px", // Custom letter spacing value
        wider: "0.2em", // Additional custom value if needed
      },
      screens:{
        'md': "550px",
      }
    },
  },
  plugins: [],
};

