// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px", // Mobile
      md: "768px", // Medium
      lg: "1024px", // Large
      xl: "1280px", // Extra
      "2xl": "1536px", // 2 Extra large
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      //  нові кольори, шрифти, тощо, не змінюючи стандартні
      // colors: {
      //   'my-custom-color': '#abcdef',
      // },
    },
  },
  plugins: [], // додати  додаткові плагіни Tailwind CSS
};

export default config;
