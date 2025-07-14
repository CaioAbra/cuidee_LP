// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: {
          dark: "#064E3B",
          base: "#199A8E",
          light: "#99DED4",
          lighter: "#D7F5F1",
        },
        neutral: {
          900: "#0E0E0E",
          800: "#1A1A1A",
          700: "#2A2A2A",
          600: "#3B3B3B",
          500: "#4E4E4E",
          400: "#808080",
          300: "#B3B3B3",
          200: "#D6D6D6",
          100: "#E7E7E7",
          50: "#F6F6F6",
        },

        Secundary: {
          600: "#00647E",
        },
        success: "#00C48C",
        warning: "#F7B500",
        danger: "#FF647C",
      },
      fontSize: {
        "heading-xl": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        "heading-lg": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "heading-md": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "body-md": ["1rem", { lineHeight: "1.5rem" }],
        "body-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        caption: ["0.75rem", { lineHeight: "1rem" }],
      },
    },
  },
  plugins: [],
};

export default config;
