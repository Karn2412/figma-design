import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#F1A501",
          coral: "#DF6951",
          red: "#E17B77",
        },
        brand: {
          blue: "#006380",
          lightBlue: "#61AABD",
          navy: "#181E4B",
          body: "#5E6282",
          light: "#F8F8F8",
          cream: "#FFF1DA",
        },
      },
      fontFamily: {
        volkhov: ["Volkhov", "Georgia", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #ffffff 60%, #FFF9F0 100%)",
        "card-gradient": "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)",
        "newsletter-gradient": "linear-gradient(135deg, #006380 0%, #004A61 100%)",
      },
      boxShadow: {
        card: "0 15px 40px rgba(0,0,0,0.12)",
        "card-hover": "0 25px 60px rgba(0,0,0,0.2)",
        float: "0 10px 30px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        "2.5xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};

export default config;
