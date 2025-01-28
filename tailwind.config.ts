import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neutral-middle": "rgb(141, 141, 141)",
        "neutral-dark": "rgb(95, 95, 95)",
        "typescript-color": "rgb(49 120 198)",
        "tailwindCSS-color": "rgb(6 182 212)",
        "vercel-color": "rgb(34 34 34)",
        "AWS-color": "rgb(140 79 255)",
        "react-color": "rgb(85 184 212 )",
        "scss-color": "rgb(240, 98, 146)",
      },
    },
  },
  plugins: [],
} satisfies Config;
