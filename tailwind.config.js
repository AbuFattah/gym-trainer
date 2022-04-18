module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#ccc",
        lightBlue: "#090d55",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#050733",

          secondary: "#0C75FF",

          accent: "#9ec4fb",

          neutral: "#112031",

          "base-100": "#f2f4f8",

          info: "#33BCDB",

          success: "#6FDC99",

          warning: "#B17806",

          error: "#EF554D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
