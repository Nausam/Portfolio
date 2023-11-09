/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom_gray: "#212121",
        custom_purple: "#ae00ff",
      },
      boxShadow: {
        "custom-sm": "0 0 6px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        xs: "460px", // Add the 639px screen size
      },
    },
  },
  plugins: [],
};
