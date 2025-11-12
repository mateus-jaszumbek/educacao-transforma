/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 força o Tailwind a usar classes, e não o sistema
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // 👈 corrigido: era "page", o certo é "pages"
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
        accent: "#f59e0b",
      },
    },
  },
  plugins: [],
};
