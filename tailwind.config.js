module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#02044A",

          secondary: "#0C75FF",

          accent: "#9ec4fb",

          neutral: "#fff",

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
