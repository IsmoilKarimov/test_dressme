/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  important: true,
  // purge: ['./src/pages/**/*.{js,ts,jsx,tsx}'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#fafafa",
        textColor: "#707070",
        btnBgColor: "#fcfcfc",
        catalogBg: "#F2F2FD",
        fullBlue: "#007DCA",
        searchBgColor: "#F2F2F2",
        borderColor: "#707070",
        borderColor2: "#e2e2e2",

        borderColorCard: "#c1c1c1",
        yandexText: "#868695",
        // SignIn
        SignInBgColor: "#0077B6",
        OpacitySignIn: "#E8E8E8",
        // set wear
        setButtonColor: "#E8E8E8",
        setTexOpacity: "#A1A1A1",
        setPriceRed: "#D50000",
        // Skeleton Color
        skeltonColor: "#F4F4F4",
        bgCard: "rgba(255, 255, 255, 0.4)",
        // season-----
        borderSpring: "#008F0E",
        bgSpring: "rgba(0, 143, 14, 0.1)",
        borderSummer: "#EAA700",
        bgSummer: "rgba(234, 167, 0, 0.1)",
        borderAutumm: "#E17A02",
        bgAutumm: "rgba(225, 122, 2, 0.1)",
        borderWinter: "#007DCA",
        bgWinter: "rgba(0, 125, 202, 0.1)",
        // yandex navbar
        yandexNavbar: " rgba(255, 255, 255, 0.8)",
        yandexWhite: " #FFFFFF",

        // Icons Colors
        Alyuminy: "#4D4D4D",
      },
      fontFamily: {
        NunitoRegular: ["Nunito-Regular", "sans-serif"],
        NunitoMedium: ["Nunito-Medium", "sans-serif"],
        NunitoSemibold: ["Nunito-Semibold", "sans-serif"],
        NunitoBold: ["Nunito-Bold", "sans-serif"],


        // AeonikProRegular: ["OTFAeonikProRegular", "sans-serif"],  // 400
        // AeonikProMedium: ["OTFAeonikProMedium", "sans-serif"],  // 500

      },
      boxShadow: {
        myShadow1: "1px -2px 0 0 rgb(17,24,39)",
        myShadow2: "-1px -2px 0 0 rgb(17,24,39)",
        cardShadow: "0px 1px 10px 0px rgba(0,0,0,0.59)",
        navbarShadow: "0px -4px 14px -4px rgba(0,0,0,0.75)",
        navMenuShadov: "0px -2px 10px -8px rgba(0,0,0,0.75)",
      },
    },
    letterSpacing: {
      "1": "0.01em",
    },
    screens: {
      ss: "320px",
      ls: "360px",
      ll: "390px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
  plugins: [],
};
