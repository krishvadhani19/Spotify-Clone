/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background colors
        "dark-900": "#F1F5F9",
        "dark-800": "#E2E8F0",
        "dark-700": "#CBD5E1",
        "dark-600": "#94A3B8",
        "dark-500": "#64748B",
        "dark-400": "#475569",
        "dark-300": "#1E293B",
        "dark-200": "#282828",
        "dark-100": "#121212",
      },
    },
  },
  plugins: [],
};
