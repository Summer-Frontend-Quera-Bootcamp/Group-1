/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Customized Colors

      white: "#ffffff",

      black: {
        primary: "#000000",
        secondary: "#1E1E1E",
      },

      brand: {
        primary: "#208D8E",
        secondary: "#C2F7FA",
      },

      gray: {
        100: "#F1F3F5",
        200: "#BDC0C6",
        300: "#868E96",
        400: "#7D828C", // subtitles have this color
        500: "#5F6C7C",
        600: "#46494D",
        700: "#343A40",
      },

      red: {
        100: "#FFE3E3",
        200: "#E17E80",
        300: "#EC8182",
        400: "#F27474",
        500: "#E46161",
        600: "#FA5252",
        700: "#FC0733",
        danger: "#9F0000", // for danger area i.e delete,...
      },

      pink: {
        100: "#FFDEEB",
        200: "#E64980",
        300: "#F92E8F",
      },

      grape: {
        100: "#F3D9FA",
        200: "#DE88FD",
        300: "#C074D1",
        400: "#BE4BDB",
      },

      violet: {
        100: "#EEDFF6",
        200: "#E5DBFF",
        300: "#9286EA",
        400: "#7950F2",
      },

      indigo: {
        100: "#DBE4FF",
        200: "#74AADD",
        300: "#6897C2",
        400: "#7FA1D1",
        500: "#4C6EF5",
      },

      blue: {
        100: "#E9F9FF",
        200: "#D0EBFF",
        300: "#6DAFCE",
        400: "#6CB2F7",
        500: "#228BE6",
        600: "#3C45E7",
      },

      cyan: {
        100: "#C5F6FA",
        200: "#A5E4F8",
        300: "#15AABF",
      },

      teal: {
        100: "#C3FAE8",
        200: "#BFFDE3",
        300: "#78C6B0",
        400: "#84C6A1",
        500: "#76BC86",
        600: "#12B886",
        700: "#486774",
      },

      green: {
        100: "#D3F9D8",
        200: "#40C057",
        300: "#43BB0B",
        400: "#71FDA9",
      },

      lime: {
        100: "#E9FAC8",
        200: "#80DC69",
        300: "#82C91E",
        400: "#92FF07",
      },

      yellow: {
        100: "#FFF3BF",
        200: "#FAB005",
      },

      orange: {
        100: "#FFE8CC",
        200: "#F3C567",
        300: "#F1A25C",
        400: "#E28A60",
        500: "#E57A57",
        600: "#F98F2E",
        700: "#FD7E14",
      },

      brown: {
        primary: "#B9995E",
      },
    },
    extend: {},
  },
  plugins: [],
};
