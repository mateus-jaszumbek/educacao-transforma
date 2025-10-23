/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./page/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2563eb", // azul principal
          secondary: "#1e40af", // azul escuro
          accent: "#f59e0b", // laranja
        },
      },
    },
    plugins: [],
  };