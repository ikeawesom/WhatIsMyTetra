import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "design-1": "linear-gradient(135deg, #7950f2 5%, #f783ac 95%)",
        "design-2": "linear-gradient(135deg, #7950f2 5%, #4dabf7 95%)",
      },
      fontFamily: {
        header: "'Londrina Solid', 'cursive'",
        default: "'Onest', 'sans-serif'",
      },
    },
  },
  plugins: [],
};
export default config;
