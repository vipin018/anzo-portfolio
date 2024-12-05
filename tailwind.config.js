/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anzo1: ['anzo1', 'sans-serif'],
        anzo2: ['anzo2', 'sans-serif'],
        anzo3: ['anzo3', 'sans-serif'],
        anzo4: ['anzo4', 'sans-serif'],
        anzo5: ['anzo5', 'sans-serif'],
        anzo6: ['anzo6', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

