module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
  ],
  theme: {
    extend: {
      maxWidth: {
        '18': '18rem',
      },
    },
  },
};