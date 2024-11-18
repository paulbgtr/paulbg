/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
        mono: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        monochrome: {
          primary: "#737373", // mono-500
          secondary: "#404040", // mono-700
          accent: "#a3a3a3", // mono-400
          neutral: "#262626", // mono-800
          "base-100": "#171717", // mono-900
          "base-200": "#0a0a0a", // mono-950
          "base-content": "#f5f5f5", // mono-100
          info: "#525252", // mono-600
          success: "#d4d4d4", // mono-300
          warning: "#e5e5e5", // mono-200
          error: "#262626", // mono-800
        },
      },
    ],
  },
};
