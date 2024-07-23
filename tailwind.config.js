/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        phone:
          "url('/src/assets/images/background/zenless-zone-zero-belle-wise-phone-wallpaper-4k-uhdpaper.com-283@0@k.jpg')",
        desktop:
          "url('/src/assets/images/background/zenless-zone-zero-belle-wise-4k-wallpaper-uhdpaper.com-283@0@k.jpg')",
      },
      colors: {
        overlay: "rgb(38, 38, 38, .5)",
      },
      height: {
        108: "108px",
      },
      keyframes: {
        slideDown: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "500px", opacity: "1" },
        },
        slideUp: {
          "0%": { maxHeight: "500px", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s forwards",
        slideUp: "slideUp 0.5s forwards",
      },
    },
  },
  plugins: [],
};
