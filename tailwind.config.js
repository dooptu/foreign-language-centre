/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js", "./home*/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B", // Vibrant Coral
        secondary: "#4ECDC4", // Soft Teal
        accent: "#FFE66D", // Sunny Yellow
        dark: "#1A2530", // Deep Navy instead of black
        light: "#F7F9FC", // Off-white for slight contrast
      },
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0,0,0,0.05)',
        'float': '0 30px 60px -20px rgba(0,0,0,0.1)',
        'card': '0 10px 30px -10px rgba(78, 205, 196, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
