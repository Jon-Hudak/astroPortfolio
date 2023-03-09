/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["'Aldrich', sans-serif"],
      },
      colors: {
        "dark-gray": "#191919",
        "accent-orange": "#ff872b",
        "accent-blue": "#43B0FF",
        gunmetal: "#292F36",
        cardinal: "#D00000",
        offBlack: "#03090f"
      },
      screens: {
        tall: { raw: "(min-height:701px)" },
      },
      keyframes: {
        menuAnim: {
          "0%": { transform: "scaleY(0%)" },
          "80%": { transform: "scaleY(110%)" },
          "100%": { transform: "scaleY(100%)" },
        },
        imgSlide: {
          "0%": {opacity:0, transform: "translate(50%)"},
          "100%": {opacity:1, transform: "translate(0)"}
        }
       
      },
      animation: {
        menuOpen: "menuAnim 0.3s ease-in-out forwards",
        hero: "imgSlide 2s ease-out-forwards"
      },
    },
  },
  plugins: [],
}