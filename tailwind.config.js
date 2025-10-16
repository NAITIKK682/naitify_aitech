/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scan all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f5af0',
        'primary-dark': '#6930c3',
        secondary: '#ff6b6b',
        'secondary-dark': '#fa5252',
        dark: '#121212',
        'dark-light': '#1e1e1e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'cyberpunk-gradient': 'linear-gradient(90deg, #ff6ec4, #7873f5, #42dff4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        typewriter: 'typewriter 4s steps(40) 1s forwards',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      },
    },
  },
  plugins: [],
}
