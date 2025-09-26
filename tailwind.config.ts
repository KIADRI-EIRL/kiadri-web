// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de marca Kiadri (auxiliares)
        coral: "#FF5A5F",      // Coral intenso
        turquoise: "#00E5C5",  // Turquesa brillante
        purple: "#9D00FF",     // Púrpura

        // Escala de marca principal (verde confianza)
        brand: {
          50:  "#f7fbfb",
          100: "#e9f7f6",
          200: "#cccce8",
          300: "#a0dad3",
          400: "#66c15b",
          500: "#2ea594", // Verde confianza (Kiadri)
          600: "#228578",
          700: "#1b6a60",
          800: "#184f47",
          900: "#114f39",
        },

        // Otros alias útiles
        accent: "#ef476f",  // Llamados a la acción
        ink:    "#0f172a",  // Texto principal (slate-900)
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
