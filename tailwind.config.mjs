/** @type {import('tailwindcss').Config} */
import tailwindUtopia from "@domchristie/tailwind-utopia";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      utopia: {
        minScreen: 320,
        maxScreen: 1362,
        minSize: 18,
        maxSize: 20,
        minScale: 1.2,
        maxScale: 1.25,
      },

      fontSize: {
        xs: "inherit",
        sm: "inherit",
        base: "var(--font-0)", // Usa tu variable CSS
        lg: "var(--font-1)",
        xl: "var(--font-2)",
        "2xl": "var(--font-3)",
        "3xl": "var(--font-4)",
        "4xl": "var(--font-5)",
      },

      spacing: {
        "3xs": "var(--espacio-3xs)",
        "2xs": "var(--espacio-2xs)",
        xs: "var(--espacio-xs)",
        sm: "var(--espacio-s)",
        md: "var(--espacio-m)",
        lg: "var(--espacio-l)",
        xl: "var(--espacio-xl)",
        "2xl": "var(--espacio-2xl)",
        "3xl": "var(--espacio-3xl)",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [
    tailwindUtopia({
      useClamp: true,
      prefix: "fl-", // Asegura que el prefijo sea correcto
      baseStep: "base",
    }),
  ],
  /* output: "hybrid", */
  routing: {
    prefixDefaultLocale: false,
  },
};
