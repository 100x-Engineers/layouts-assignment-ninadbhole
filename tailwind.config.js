/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#f9f9f9",
        "neutral-100": "#f4f4f4",
        "neutral-200": "#e4e4e4",
        "neutral-300": "#d3d3d3",
        "neutral-400": "#a2a2a2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0a0a0a",
        "neutral-1000": "#000000",
        "twitter-blue-default": "#1d9bf0",
        "twitter-blue-hover": "#1871ca",
        "twitter-blue-disabled": "#1e5d87",
        "blue-wash": "#75beef",
        "button-stroke": "#546a7a",
        "searchbar-fill": "#16181c",
        "success": "#00be74",
        "error": "#8b141a", 
        "twittwe-white-100": "#fff", 
        "primary-100": "#1D9BF0",
        "secondary": "rgba(255, 255, 255, 0.60)"
      },
      boxShadow: {
        'custom': '0 8px 16px 0 rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'chirp': ['Chirp'],
      },
      fontSize: {
        base: "1rem",
        "5xl":"1.5rem",
        inherit: "inherit",  
        time: "0.9375rem",
      },
      backdropBlur: {
        'button-23': "23.668209075927734px"
      },
      borderRadius: {
        '4xl': "4.0625rem",
        'profile_pic_radius': "12.5rem",
      },
      width: {
        '98': "26.625rem",
        '99': "27.125rem",
        'large-card' : "32rem",   
        'normal-card' : "30.0125rem",
        "phone-width" : "24.375rem",
      },
      height: {
        "phone-height" : "54.25rem"
      },
      padding: {
        "3.9" : "0.91rem",
      },
    },
  },
  plugins: [],
}

