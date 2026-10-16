module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF914D",
          white: "#FFFFFF",
          charcoal: "#111218",
          green: "#2ECC71",
          dark: "#0d1015"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 18, 24, 0.08)"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
