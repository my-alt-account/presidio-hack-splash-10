
import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"], // This ensures `font-display` works
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          DEFAULT: "hsl(39, 67%, 96%)", /* Cream color */
          light: "hsl(39, 67%, 99%)",
          dark: "hsl(39, 30%, 90%)",
        },
        presidio: {
          DEFAULT: "#184520", /* Forest green */
          dark: "#0e2a13", /* Darker green */
          light: "#286036", /* Lighter green */
        },
        dark: {
          DEFAULT: "#184520", /* Forest green */
          100: "#1d472a", /* Slightly lighter green */
          200: "#214f2e", /* Medium green */
          300: "#286036", /* Lighter accent green */
        },
        bitcoin: {
          DEFAULT: "#f2a900",
          light: "#ffc945",
        },
        primary: {
          DEFAULT: "hsl(var(--primary-color))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--neutral-dark))",
          foreground: "hsl(var(--neutral-light))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent-green))",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
