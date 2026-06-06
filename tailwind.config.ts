import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      },
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        charcoal: {
          950: "#070411",
          900: "#120B28",
          850: "#1B113B",
          800: "#241653"
        },
        sawa: {
          purple: "#2A1A5E",
          flame: "#F45905",
          orange: "#FB9224",
          yellow: "#FBE555"
        },
        ivory: "#F7F0DE",
        sand: "#D9BE8F",
        clay: "#F45905",
        gold: "#FBE555",
        palm: "#507D54",
        ocean: "#2A1A5E",
        coral: "#FB9224"
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(251, 229, 85, 0.22)",
        ocean: "0 30px 100px rgba(42, 26, 94, 0.28)"
      },
      backgroundImage: {
        "sawa-radial": "radial-gradient(circle at 20% 20%, rgba(251,229,85,0.2), transparent 32%), radial-gradient(circle at 82% 14%, rgba(244,89,5,0.22), transparent 34%), radial-gradient(circle at 52% 76%, rgba(42,26,94,0.6), transparent 34%)",
        "bead-line": "linear-gradient(90deg, #2A1A5E 0 25%, #F45905 25% 50%, #FB9224 50% 75%, #FBE555 75% 100%)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(1.5rem, -1rem, 0) scale(1.04)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.96)", opacity: "0.6" },
          "70%": { transform: "scale(1.12)", opacity: "0.12" },
          "100%": { transform: "scale(1.16)", opacity: "0" }
        }
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        pulseRing: "pulseRing 5s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
