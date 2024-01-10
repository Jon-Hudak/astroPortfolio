/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      

    
    transitionDelay: {
      "0": "0ms",
      "50": "50ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "250": "250ms",
      "300": "300ms",
      "400": "400ms",
      "500": "500ms",
    },
    fontFamily: {
      title: ["'Aldrich', sans-serif"],
    },
    colors: {
      "dark-gray": "#191919",
      "accent-orange": "#ff872b",
      "accent-blue-dark": "#768FB2",
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
      imgRoll: {
        "0%": { opacity: "0", transform: " translate(50%) rotate(45deg)" },
        "100%": { opacity: "1", transform: "translate(0) rotate(0deg) " }
      },
      imgSlide: {
        "0%": { opacity: "0", transform: "translate(50%)" },
        "100%": { opacity: "1", transform: "translate(0rem)", }
      },
      slideNavLiAnim: {
        "0%": { opacity: "0", transform: "translateX(500px);" },
        "100%": { opacity: "1", transform: "translateX(0);" }
      },
      slideNavLiAnimClose: {
        "0%": { transform: "translateX(0);" },
        "100%": { transform: "translateX(500px);" }
      },
      fadeUp: {
        "0%": { transform: "translateY(16px);" },
        "100%": { transform: "translateY(0);" }
      }

    },
    animation: {
      menuOpen: "menuAnim 0.3s ease-in-out forwards",
      heroSlide: "imgSlide 2s ease-out forwards",
      heroRoll: "imgRoll 1s ease-out forwards",
      slideNavLi: "slideNavLiAnim 1s ease-out forwards",
      slideNavLiClose: "slideNavLiAnimClose 1s ease-in forwards",
      fadeUp: "fadeUp 1s ease-out forwards"
    },
  },
},
  plugins: [],
}