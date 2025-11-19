import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          50: "hsl(45, 100%, 96%)",
          100: "hsl(45, 100%, 91%)",
          200: "hsl(45, 97%, 83%)",
          300: "hsl(45, 97%, 74%)",
          400: "hsl(45, 96%, 56%)",
          500: "hsl(45, 93%, 47%)",
          600: "hsl(35, 88%, 40%)",
          700: "hsl(35, 87%, 33%)",
          800: "hsl(30, 83%, 28%)",
          900: "hsl(25, 80%, 14%)",
        },
        charcoal: {
          50: "hsl(210, 17%, 98%)",
          100: "hsl(210, 17%, 95%)",
          200: "hsl(210, 16%, 90%)",
          300: "hsl(210, 14%, 83%)",
          400: "hsl(210, 12%, 60%)",
          500: "hsl(210, 11%, 45%)",
          600: "hsl(210, 12%, 32%)",
          700: "hsl(210, 14%, 20%)",
          800: "hsl(210, 17%, 12%)",
          900: "hsl(210, 20%, 5%)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "book-flip": {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
        "book-flip-reverse": {
          "0%": {
            transform: "rotateY(180deg)",
          },
          "100%": {
            transform: "rotateY(0deg)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "book-flip": "book-flip 1.2s ease-in-out forwards",
        "book-flip-reverse": "book-flip-reverse 1.2s ease-in-out forwards",
        "slide-left": "slide-left 1s ease-in-out forwards",
        "slide-right": "slide-right 1s ease-in-out forwards",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        1000: "1000px",
        1200: "1200px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
