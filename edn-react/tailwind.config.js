/** @type {import('tailwindcss').Config} */
import tailwindForms from "@tailwindcss/forms";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonPrimary: "#324A43",
        buttonHover: "#3B7D6A",
        buttonTextPrimary: "#FFFFFF",
        backgroundColor: "#bbf7d0",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    // ...
    tailwindForms,
  ],
};
