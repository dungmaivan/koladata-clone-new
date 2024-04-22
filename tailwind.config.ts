import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "competitor-1":
          "url('https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/04title.b0f9b6c1.webp')",
        "competitor-2":
          "url('https://d149xzut2sq6e3.cloudfront.net/upload/1d23faec.webp')",
        "competitor-3":
          "url('https://d4ewq8axz3ayo.cloudfront.net/production/out/_next/static/media/04.b34a5b58.webp')",
      },
      animation: {
        "horizon-scroll": "horizon-scroll 104s linear infinite",
      },
      keyframes: {
        "horizon-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#56a1ed",
      },
    },
  },
  plugins: [],
};
export default config;
