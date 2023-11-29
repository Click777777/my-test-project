/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        slash: { min: "760px", max: "1024px" },
      },
    },
  },
  plugins: [formsPlugin],
};
