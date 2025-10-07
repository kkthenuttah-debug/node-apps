/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Custom colors for Esquire Solicitors
        esquire: {
          50: "hsl(var(--esquire-50))",
          100: "hsl(var(--esquire-100))",
          200: "hsl(var(--esquire-200))",
          300: "hsl(var(--esquire-300))",
          400: "hsl(var(--esquire-400))",
          500: "hsl(var(--esquire-500))", // Main brand color
          600: "hsl(var(--esquire-600))",
          700: "hsl(var(--esquire-700))",
          800: "hsl(var(--esquire-800))",
          900: "hsl(var(--esquire-900))",
          950: "hsl(var(--esquire-950))",
        },
        // Gradients
        "gradient-brand": "var(--gradient-brand)",
        "gradient-brand-dark": "var(--gradient-brand-dark)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-section": "var(--gradient-section)",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'neumorphic-light': '9px 9px 18px #d9d9d9, -9px -9px 18px #ffffff',
        'neumorphic-dark': '9px 9px 18px #1a1a1a, -9px -9px 18px #2a2a2a',
        'card-shadow': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-shadow-hover': '0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'background-color, border-color, color, fill, stroke',
        'shadow': 'box-shadow',
        'transform': 'transform',
        'opacity': 'opacity',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero-light': 'linear-gradient(to right, hsl(var(--esquire-50)), hsl(var(--esquire-100)))',
        'gradient-hero-dark': 'linear-gradient(to right, hsl(var(--esquire-950)), hsl(var(--esquire-900)))',
        'gradient-card-light': 'linear-gradient(145deg, hsl(var(--background)), hsl(var(--esquire-50)))',
        'gradient-card-dark': 'linear-gradient(145deg, hsl(var(--esquire-900)), hsl(var(--esquire-950)))',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "spin-slow": "spin 3s linear infinite",
        "bounce-subtle": "bounce 1s infinite",
        "pulse-light": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "jiggle": "jiggle 0.3s infinite",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        jiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
    },
  },
  plugins: [require("tailwindcss-animate")],
}
