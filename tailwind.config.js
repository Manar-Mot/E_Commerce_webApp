/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flipAndBack: {
          "0%,100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(-1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      animation: {
        flipAndBack: "flipAndBack 0.5s ease-in-out ",
        "marquee-infinite": "marquee 25s linear infinite",
        "marquee2-infinite": "marquee2 25s linear infinite",
      },

      borderRadius: {
        custom: "140px",
        blopM: "49% 51% 70% 30% / 81% 82% 18% 19% ",
      },
      direction: {
        rtl: "rtl",
      },
      width: {
        "w-80": "80%",
      },

      fontFamily: {
        kufi: ["Noto Kufi Arabic", "sans"],
        cairo: ["Cairo", "sans"],
      },
      colors: {
        light: {
          background: "#ffffff",
          primary: "##237bbf",
          "primary-varient": "#3700b3",
          "pink-purple": "#df82fc",
          secondary: "#03dac6",
          error: "#b00020",
        },
        dark: {
          background: "#121212",
          primary: "#",
          "primary-varient": "#3700b3",
          "pink-purple": "#a656d1",
          secondary: "#03dac6",
          error: "#cf6679",
        },
      },
    },
  },
  plugins: [],
};
