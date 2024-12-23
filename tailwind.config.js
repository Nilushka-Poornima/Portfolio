/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation:{
        gradient: 'gradientAnimation 6s linear infinite',
      },
      keyframes:{
        graientAnimation:{
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        move_large: {
          "0%": { transform: "translate(-50px, -50px)" },
          "25%": { transform: "translate(200px, -100px)" },
          "50%": { transform: "translate(0, 200px)" },
          "75%": { transform: "translate(-200px, 100px)" },
          "100%": { transform: "translate(-50px, -50px)" },
        },
        move_medium: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(150px, -150px)" },
          "50%": { transform: "translate(-100px, 100px)" },
          "75%": { transform: "translate(200px, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
        move_small: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-50px, -50px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        move_large: "move_large 1s linear infinite",
        move_medium: "move_medium 1s linear infinite",
        move_small: "move_small 2s linear infinite reverse",
      },
    },    
  },
  plugins: [],
};