import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        normal: "0 -2px -2px 2px rgba(0,0,0,0.25)"
      },
      fontSize: {
        xl8: "2rem",
        xl16: "4rem",
        xl32: "8rem"
      },
      rotate: {
        c1: "calc(var(--deg) * 1)",
        c2: "calc(var(--deg) * 2)",
        c3: "calc(var(--deg) * 3)",
        c4: "calc(var(--deg) * 4)",
        c5: "calc(var(--deg) * 5)",
        c6: "calc(var(--deg) * 6)",
        c7: "calc(var(--deg) * 7)",
        c8: "calc(var(--deg) * 8)",
        c9: "calc(var(--deg) * 9)",
        c10: "calc(var(--deg) * 10)",
        c11: "calc(var(--deg) * 11)",
        c12: "calc(var(--deg) * 12)",
        c13: "calc(var(--deg) * 13)",
        c14: "calc(var(--deg) * 14)",
        c15: "calc(var(--deg) * 15)",
        c16: "calc(var(--deg) * 16)"
      },
      letterSpacing: {
        "16": "0.16em",
        "6": "0.06em",
        "4": "0.04em"
      },
      animation: {
        "spin-slow": "spinner 30s 1000ms linear infinite alternate"
      },
      keyframes: {
        spinner: {
          "0%": { transform: "rotate(calc(calc(var(--deg) * 3) * -1))" },
          "100%": { transform: "rotate(360deg)" }
        }
      }
    },
    fontFamily: {
      slab: ["var(--besley)", "sans-serif"],
      serif: ["var(--Abril_Fatface)", "serif"]
    }
  },
  plugins: []
};
export default config;
