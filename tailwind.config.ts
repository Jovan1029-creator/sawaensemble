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
          950: "#050504",
          900: "#0B0A08",
          850: "#12100C",
          800: "#1A1712"
        },
        ivory: "#F7F0DE",
        sand: "#D9BE8F",
        clay: "#B45E3C",
        gold: "#D8A642",
        palm: "#507D54",
        ocean: "#1D6982",
        coral: "#D86F57"
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(216, 166, 66, 0.18)",
        ocean: "0 30px 100px rgba(29, 105, 130, 0.18)"
      },
      backgroundImage: {
        "sawa-radial": "radial-gradient(circle at 20% 20%, rgba(216,166,66,0.22), transparent 32%), radial-gradient(circle at 82% 14%, rgba(29,105,130,0.24), transparent 34%), radial-gradient(circle at 52% 76%, rgba(180,94,60,0.18), transparent 30%)",
        "bead-line": "linear-gradient(90deg, #D8A642 0 12%, #1D6982 12% 23%, #F7F0DE 23% 31%, #B45E3C 31% 47%, #507D54 47% 61%, #D86F57 61% 72%, #D9BE8F 72% 100%)"
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
