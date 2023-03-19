/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050f16",
        // primary: "#050816",
        secondary: "#a6afc3",
        // secondary: "#aaa6c3",
        tertiary: "#101930",
        // tertiary: "#151030",
        "black-100": "#0d1425",
        // "black-100": "#100d25",
        "black-200": "#030c25",
        // "black-200": "#090325",
        "white-100": "#f3f3f3",
        // "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
