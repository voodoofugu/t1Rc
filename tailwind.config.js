/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["titans_rc/styles/tailwind/TWstyles.js"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        all1: "all",
      },
      transitionDuration: {
        width: "0.1s",
        all1: "2.9s",
      },
      transitionProperty: {
        width: "ease-in-out",
        all1: "cubic-bezier(0.2, 0.85, 0.32, 1.2)",
      },
      animation: {
        appear: "appear 0.3s ease-in-out 0s 1 forwards",
        identifier: "identifier 0.2s ease-in-out 1 forwards",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        identifier: {
          "0%": { opacity: "0", width: "0" },
          "100%": { opacity: "1", width: "100%" },
        },
      },
      boxShadow: {
        shadowColor6:
          "inset -1px -1px 3px #eaecfb, 1px 1px 3px #fff, inset 1px 1px 3px #abb1ed, -1px -1px 3px #969ee9",
        shadowColorDark7:
          "inset -1px -1px 3px #c0c5f2, 1px 1px 3px #eaecfb, inset 1px 1px 3px #818ae4, -1px -1px 3px #5763db",
        shadowColor8:
          "-1px -1px 2px #fff, inset 1px 1px 2px #dde0f8, 1px 1px 2px #818ae4, inset -1px -1px 2px #abb1ed",
        toggleBtn:
          "inset -1px -1px 3px #c0c5f2, 1px 1px 3px #eaecfb, inset 1px 1px 3px #818ae4, -1px -1px 3px #5763db",
        pageBoxHover:
          "0 0 2px 1px #969ee9, -5px -5px 10px #fff, inset 1px 1px 2px #fff, inset -1px -1px 2px #abb1ed, 5px 5px 10px #969ee9",
        pageBoxActive:
          "0 0 2px 1px #969ee9, -2px -2px 4px #fff, inset 1px 1px 2px #fff, inset -1px -1px 2px #abb1ed, 2px 2px 4px #abb1ed",
        tooltipTemplate: "inset 1px 1px 2px #fff, inset -1px -1px 2px #969ee9",
        toTopBtn:
          "-1px -1px 2px #fff, inset 1px 1px 2px #dde0f8, 1px 1px 2px #818ae4, inset -1px -1px 2px #abb1ed, 0 4px 10px #969ee9",
        darkTheme:
          "inset -1px -1px 3px #2c3c6e, 1px 1px 3px #3b5093, inset 1px 1px 3px #161e38, -1px -1px 3px #0f1425",
        darkThemeSearchInput:
          "inset -1px -1px 3px #abb1ed, 1px 1px 3px #3b5093, inset 1px 1px 3px #25325c, -1px -1px 3px #0f1425",
        darkThemeClearBtn:
          "-1px -1px 2px #969ee9, inset 1px 1px 2px #344680, 1px 1px 2px #161e38, inset -1px -1px 2px #1e284a",
        darkThemeToTopBtn:
          "inset 1px 1px 2px #5c73be, inset -1px -1px 2px #25325c, 0 4px 10px #161e38",
        shadow1: "inset 0 0 0 2px rgb(129 140 248)",
      },
      dropShadow: {
        dS1: "0.5px 0.5px 1px rgba(255, 255, 255, 0.2)",
      },
      textShadow: {
        tS1: "0.5px 0.5px 1px rgba(255, 255, 255, 0.2)",
      },
      colors: {
        searchInputPlaceholder: "#818ae4",
        clearBtnActive: "#indigo-400",
        toggleBtnActive: "#blue-900",
        toggleBtnOn: "#blue-900",
        tooltipTemplate: "#indigo-600",
        tooltipTemplateTop: "#eaecfb",
        tooltipTemplateBottom: "#c0c5f2",
        toTopBtn: "#gray-300",
        toTopBtnActive: "#indigo-400",
        toTopBtnIcon: "#818ae4",
        darkTheme: "#blue-900",
        darkThemeTemplateTit: "#gray-800",
        darkThemeSearchInput: "#indigo-500",
        darkThemeSearchInputPlaceholder: "#blue-900",
        darkThemeClearBtn: "#blue-900",
        darkThemeClearBtnIcon: "#gray-800",
        darkThemeToTopBtn: "#indigo-600",
        darkThemeToTopBtnIcon: "#99a2ff",
        darkThemeToTopBtnHover: "#indigo-600",
        darkThemePageBox: "#blue-900",
        darkThemePageBoxHover: "#blue-900",
        darkThemePageBoxLink: "#indigo-300",
        darkThemePageBoxActive: "#blue-900",
        darkThemePageBoxInfo: "#indigo-500",
        darkThemeTooltipTemplate: "#indigo-800",
        darkThemeTooltipTemplateTop: "#5c73be",
        darkThemeTooltipTemplateBottom: "#344680",
      },
      backgroundImage: {
        linGr1:
          "linear-gradient(to bottom, #969ee9 4px, transparent 0) no-repeat 5px -6px/2px 6px",
      },
      fontFamily: {
        custom: ["Roboto Flex", "Montserrat", "sans-serif"],
      },
      height: {
        custom: "calc(100vh - 114px)",
      },
      spacing: {
        1160: "1160px",
        184: "184px",
        62: "62px",
        48: "48px",
        34: "34px",
        32: "32px",
        30: "30px",
        26: "26px",
        24: "24px",
        16: "16px",
        15: "15px",
        13: "13px",
        12: "12px",
        10: "10px",
        9: "9px",
        5: "5px",
        4: "4px",
        3: "3px",
        2: "2px",
        1: "1px",
        0.5: "0.5px",
        "2rem": "2rem",
        "calc100%-80px": "calc(100% - 80px)",
        "calc100%-54px": "calc(100% - 54px)",
        "Min50%": "-50%",
        "50%": "50%",
      },
      borderRadius: {
        18: "18px",
        30: "30px",
      },
      borderWidth: {
        6: "6px",
        4: "4px",
      },
      rotate: {
        Min45: "-45deg",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
