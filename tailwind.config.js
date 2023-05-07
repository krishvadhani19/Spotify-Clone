/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        "dark-800": "#777777",
        "dark-700": "#666666",
        "dark-600": "#555555",
        "dark-500": "#444444 ",
        "dark-400": "#333333",
        "dark-300": "#222222",
        "dark-200": "#1a1a1a ",
        "dark-100": "#111111",

        "primary-gray": "#cbd5e1",
      },
    },
  },
  plugins: [],
};
