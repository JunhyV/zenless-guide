/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "phone": "url('/src/assets/images/background/zenless-zone-zero-belle-wise-phone-wallpaper-4k-uhdpaper.com-283@0@k.jpg')",
        "desktop": "url('/src/assets/images/background/zenless-zone-zero-belle-wise-4k-wallpaper-uhdpaper.com-283@0@k.jpg')",
      },
    },
  },
  plugins: [],
};
