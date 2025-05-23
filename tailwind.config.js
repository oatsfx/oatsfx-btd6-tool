/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 6s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        sans: ["Overused\\ Grotesk", "sans-serif"],
        display: ["Unbounded", "Overused\\ Grotesk"],
        btd6: ["LuckiestGuy"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      "dracula",
      {
        forest: {
          primary: "#1eb854",
          "primary-focus": "#188c40",
          "primary-content": "#ffffff",
          secondary: "#20d55f",
          "secondary-focus": "#18aa4b",
          "secondary-content": "#ffffff",
          accent: "#d99330",
          "accent-focus": "#b57721",
          "accent-content": "#ffffff",
          neutral: "#110e0e",
          "neutral-focus": "#060404",
          "neutral-content": "#ffffff",
          "base-100": "#171212",
          "base-200": "#110e0e",
          "base-300": "#060404",
          "base-content": "#ffffff",
          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",
          "--animation-btn": ".25s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
        nightwing: {
          primary: "#ffffff",
          "primary-focus": "#e6e6e6",
          "primary-content": "#000000",
          secondary: "#152747",
          "secondary-focus": "#091120",
          "secondary-content": "#ffffff",
          accent: "#503447",
          "accent-focus": "#32202c",
          "accent-content": "#ffffff",
          neutral: "#171618",
          "neutral-focus": "#2e2d2f",
          "neutral-content": "#8191dc",
          "base-100": "#111117",
          "base-200": "#181824",
          "base-300": "#2e2e3f",
          "base-content": "#b9bce6",
          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",
        },
        Theme1: {
          primary: "#ffb3d9",
          "primary-content": "#1b1c22",
          secondary: "#b9ffb3",
          accent: "#ffffb3",
          neutral: "#22212c",
          "base-100": "#302f3d",
          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
