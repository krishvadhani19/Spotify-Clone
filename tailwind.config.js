/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        thin: "0.5px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      colors: {
        // Background colors
        "dark-800": "#777777",
        "dark-700": "#666666",
        "dark-600": "#555555",
        "dark-500": "#444444 ",
        "dark-400": "#333333",
        "dark-300": "#222222",
        "dark-200": "#1a1a1a ",
        "dark-100": "#000000",

        "primary-gray": "#cbd5e1",
      },

      boxShadow: {
        rightShadow: "6px 0px 20px #000000",
      },
    },
  },
  plugins: [],
};
