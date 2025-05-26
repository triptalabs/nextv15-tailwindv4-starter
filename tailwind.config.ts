import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        licorice: "#140F14",
        platinum: "#E5E5E5",
        darkSlateGray: "#35605A",
        pompAndPower: "#7D6B91",
        mediumSlateBlue: "#6874E8",
        gradient1: "#326D76",
        gradient2: "#407792",
        gradient3: "#647EA9",
        gradient4: "#9282B3",
        gradient5: "#BD85B0",
        classy1: "#96B1AC",
        classy2: "#637C78",
        classy3: "#4A5973",
        classy4: "#7C8BA7",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(90deg, #326D76, #6D8550)",
        "gradient-alt": "linear-gradient(90deg, #96B1AC, #7C88A7)",
        "gradient-soft": "linear-gradient(90deg, #96B1AC, #96B1AC)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
