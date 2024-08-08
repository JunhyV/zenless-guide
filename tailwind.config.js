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
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out",
        slideDown: "slideDown 0.1s forwards",
        slideUp: "slideUp 0.1s forwards",
      },
    },
  },
  plugins: [],
};
