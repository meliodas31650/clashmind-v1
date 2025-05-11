import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"]
      },
      colors: {
        "clash-background": "#0c0f1f",
        "clash-card": "#1c1f2e",
        "clash-accent": "#a78bfa",
        "clash-highlight": "#facc15",
        "clash-border": "#272c3c"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
}

export default config
